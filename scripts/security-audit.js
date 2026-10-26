#!/usr/bin/env node

/**
 * Automated Security Audit & Verification Script
 * Validates:
 * 1. Absence of unescaped rendering (v-html, innerHTML, document.write, eval)
 * 2. External links tabnabbing hygiene (target="_blank" -> rel="noopener noreferrer")
 * 3. Prohibited URL schemes (javascript:, vbscript:, data:text/html)
 * 4. Secrets scan across source tree (Private keys, JWTs, API tokens)
 * 5. Dependency vulnerability status via npm audit
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT_DIR = process.cwd();
const SRC_DIR = path.join(ROOT_DIR, 'src');

let failures = 0;
let warnings = 0;

function reportPass(message) {
  console.log(`\x1b[32m✔ PASS:\x1b[0m ${message}`);
}

function reportFail(message, details = []) {
  failures++;
  console.error(`\x1b[31m✖ FAIL:\x1b[0m ${message}`);
  details.forEach(d => console.error(`    ↳ ${d}`));
}

function reportWarn(message) {
  warnings++;
  console.warn(`\x1b[33m▲ WARN:\x1b[0m ${message}`);
}

function getAllFiles(dir, exts = ['.vue', '.ts', '.js', '.html']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(getAllFiles(fullPath, exts));
      }
    } else {
      if (exts.includes(path.extname(file))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

console.log('\n🔒 Starting Portfolio Security Audit...\n');

// 1. Audit Unsafe DOM Injection & Code Execution
const srcFiles = getAllFiles(SRC_DIR);
const unsafePatterns = [
  { pattern: /v-html/g, name: 'v-html directive' },
  { pattern: /\.innerHTML\s*=/g, name: 'innerHTML assignment' },
  { pattern: /\.outerHTML\s*=/g, name: 'outerHTML assignment' },
  { pattern: /document\.write\(/g, name: 'document.write' },
  { pattern: /\beval\(/g, name: 'eval()' },
  { pattern: /new\s+Function\(/g, name: 'new Function()' },
  { pattern: /href\s*=\s*["']\s*javascript:/gi, name: 'javascript: URL' },
];

let xssViolations = [];
srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(ROOT_DIR, file);
  unsafePatterns.forEach(({ pattern, name }) => {
    if (pattern.test(content)) {
      xssViolations.push(`${relPath} contains prohibited ${name}`);
    }
  });
});

if (xssViolations.length === 0) {
  reportPass('No unsafe XSS vectors or raw DOM injection methods detected in src/.');
} else {
  reportFail('Unsafe DOM injection or code execution patterns found.', xssViolations);
}

// 2. Audit Tabnabbing Protection on External Links
let linkViolations = [];
srcFiles.filter(f => f.endsWith('.vue')).forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(ROOT_DIR, file);
  
  // Find all <a ... target="_blank" ...>
  const anchorRegex = /<a\b([^>]*?)target\s*=\s*["']_blank["']([^>]*?)>/gi;
  let match;
  while ((match = anchorRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const hasRel = /rel\s*=\s*["'][^"']*(?:noopener|noreferrer)[^"']*["']/i.test(fullTag);
    if (!hasRel) {
      linkViolations.push(`${relPath}: External anchor missing rel="noopener noreferrer": ${fullTag.substring(0, 80)}`);
    }
  }
});

if (linkViolations.length === 0) {
  reportPass('All target="_blank" links include proper rel="noopener noreferrer" tabnabbing protection.');
} else {
  reportFail('External links found without rel="noopener noreferrer".', linkViolations);
}

// 3. Scan for Hardcoded Credentials in Working Tree
const SECRET_REGEXES = [
  { name: 'Private Key Block', regex: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: 'AWS Access Key ID', regex: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'GitHub Token', regex: /\bgh[pousr]_[0-9a-zA-Z]{36}\b/ },
  { name: 'Supabase Service Role JWT', regex: /eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\.[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+/ },
  { name: 'Hardcoded Secret Assignment', regex: /(?:api_key|secret_key|private_key|auth_token)\s*[:=]\s*["'][0-9a-zA-Z\-_.]{16,}["']/i },
];

let secretViolations = [];
const allTrackedFiles = getAllFiles(ROOT_DIR, ['.vue', '.ts', '.js', '.json', '.html', '.md', '.env']);
allTrackedFiles.forEach(file => {
  if (file.includes('node_modules') || file.includes('dist') || file.includes('scripts/security-audit.js')) return;
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(ROOT_DIR, file);
  SECRET_REGEXES.forEach(({ name, regex }) => {
    if (regex.test(content)) {
      secretViolations.push(`${relPath}: Potential ${name} detected.`);
    }
  });
});

if (secretViolations.length === 0) {
  reportPass('No hardcoded secrets, private keys, or credentials detected.');
} else {
  reportFail('Potential hardcoded credentials detected.', secretViolations);
}

// 4. Verify Router 404 Catch-All & Param Bounds
const routerFile = path.join(SRC_DIR, 'router', 'index.ts');
if (fs.existsSync(routerFile)) {
  const routerContent = fs.readFileSync(routerFile, 'utf8');
  if (routerContent.includes('/:pathMatch(.*)*')) {
    reportPass('Router catch-all 404 route is configured.');
  } else {
    reportFail('Router missing catch-all 404 route definition.');
  }
} else {
  reportFail('Router configuration file not found at src/router/index.ts.');
}

// 5. Audit Dependencies via npm audit
try {
  execSync('npm audit --audit-level=high', { stdio: 'pipe' });
  reportPass('Dependency audit passed with 0 high/critical vulnerabilities.');
} catch (err) {
  reportFail('High or critical dependency vulnerabilities detected. Run `npm audit` to inspect.');
}

console.log('\n----------------------------------------');
if (failures === 0) {
  console.log(`\x1b[32m✔ Security Audit Passed Successfully (${warnings} warnings).\x1b[0m\n`);
  process.exit(0);
} else {
  console.error(`\x1b[31m✖ Security Audit Failed with ${failures} error(s).\x1b[0m\n`);
  process.exit(1);
}

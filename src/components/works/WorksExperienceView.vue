<template>
  <div class="works-experience-view">
    <WorksHero />
    <FeaturedProject @open-case-study="$emit('open-case-study', $event)" />
    <ProjectsGallery @open-case-study="$emit('open-case-study', $event)" />
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/portfolio';
import WorksHero from './WorksHero.vue';
import FeaturedProject from './FeaturedProject.vue';
import ProjectsGallery from './ProjectsGallery.vue';

defineEmits<{
  (e: 'open-case-study', project: Project): void;
}>();
</script>

<style scoped lang="scss">
.works-experience-view {
  width: 100%;
}
</style>

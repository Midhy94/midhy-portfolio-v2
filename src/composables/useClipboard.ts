import { ref } from 'vue';

export function useClipboard() {
  const copied = ref(false);
  let timeoutId: number | null = null;

  const copy = async (text: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      copied.value = true;

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        copied.value = false;
      }, 2400);

      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };

  return {
    copied,
    copy
  };
}

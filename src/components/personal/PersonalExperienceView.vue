<template>
  <div class="personal-experience-view">
    <PersonalHero @switch-to-works="$emit('switch-to-works')" />
    <PersonalPhilosophy />
    <PersonalCareer />
    <PersonalCapabilities />
    <PersonalStats />
    <PersonalAbout />
  </div>
</template>

<script setup lang="ts">
import PersonalHero from './PersonalHero.vue';
import PersonalPhilosophy from './PersonalPhilosophy.vue';
import PersonalCareer from './PersonalCareer.vue';
import PersonalCapabilities from './PersonalCapabilities.vue';
import PersonalStats from './PersonalStats.vue';
import PersonalAbout from './PersonalAbout.vue';

defineEmits<{
  (e: 'switch-to-works'): void;
}>();
</script>

<style scoped lang="scss">
.personal-experience-view {
  width: 100%;
}
</style>

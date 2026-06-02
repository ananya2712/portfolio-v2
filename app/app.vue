<script setup lang="ts">
const { init: initTheme } = useTheme()
onMounted(() => { initTheme() })
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

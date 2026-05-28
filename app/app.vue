<script setup lang="ts">
const { init } = useTheme()
onMounted(() => { init() })
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

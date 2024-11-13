<script setup lang="ts">
</script>

<template>
  <main class="h-full flex-col flex justify-center items-center gap-2">
    Hi there, I am a shadcn button
    <Button variant="destructive">
      Hi this is me
    </Button>
    <Icon name="Sun" />
    <RouterLink to="/about">
      About
    </RouterLink>
  </main>
</template>

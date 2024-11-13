<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="h-full flex-col flex justify-center items-center gap-2">
    <Button variant="destructive">
      {{ t('button') }}
    </Button>
  </main>
</template>

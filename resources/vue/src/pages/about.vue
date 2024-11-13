<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="about">
    <h1>
      {{ t('about') }}
    </h1>
  </div>
</template>

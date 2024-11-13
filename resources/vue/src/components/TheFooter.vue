<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '@/i18n'

const { locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav class="flex justify-center gap-6 mt-6">
    <RouterLink to="/">
      <Button icon="House" variant="ghost" />
    </RouterLink>

    <RouterLink to="/about">
      <Button icon="PersonStanding" variant="ghost" />
    </RouterLink>

    <!--    <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()"> -->
    <!--      <div i="carbon-sun dark:carbon-moon" /> -->
    <!--    </button> -->

    <Button icon="Languages" variant="ghost" @click="toggleLocales" />
  </nav>
</template>

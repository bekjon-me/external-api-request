<script setup lang="ts">
import type { Weather } from '@/models/weather'

interface Props {
  weather: Weather
}

defineProps<Props>()
</script>

<template>
  <div class="p-4 mt-4 bg-gray-100 rounded-md shadow-md">
    <div class="flex flex-col items-start gap-2">
      <div class="text-xl font-bold">
        City: {{ weather.city }}
      </div>
      <div class="text-xl">
        Humidity: {{ weather.humidity }}%
      </div>
      <div class="text-xl">
        Temperature: {{ weather.temperature }}°C
      </div>
      <div class="text-xl">
        Location: {{ weather.lat }}, {{ weather.lon }}
      </div>
      <div>
        Weather: {{ weather.weather }}
      </div>
    </div>
  </div>
</template>

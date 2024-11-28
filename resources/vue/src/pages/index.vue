<script setup lang="ts">
import type { Weather } from '@/models/weather'
import { FormField } from '@/components/ui/form'
import weatherService from '@/services/weather-service'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const weather = ref<Weather>()
const loading = ref(false)

const zodSchema = z
  .object({
    city_name: z.string(),
  })

type FormValues = z.infer<typeof zodSchema>
const formSchema = toTypedSchema(zodSchema)
const form = useForm({
  validationSchema: formSchema,
})

async function onSubmit(values: FormValues) {
  loading.value = true
  try {
    const response = await weatherService.getWeatherData(values.city_name)
    weather.value = response.data
  }
  catch (e: any) {
    form.setFieldError('city_name', e.response.data.message)
  }
  loading.value = false
}

const handleFormSubmit = form.handleSubmit(onSubmit)
</script>

<template>
  <div class="flex flex-col items-center">
    <form class="w-fit" @submit.prevent="handleFormSubmit">
      <FormField v-slot="{ componentField }" name="city_name">
        <FormItem>
          <FormLabel>City name</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Tashkent" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button class="mt-4" type="submit" :loading="loading" :disabled="loading">
        Submit
      </Button>
    </form>

    <WeatherCard v-if="weather" :weather="weather" />
  </div>
</template>

<template>
  <div>
    <select
      v-model="selectedLanguage"
      class="border-2 focus:outline-none focus:ring-4 transition duration-200"
    >
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedLanguage = ref('ru')
</script>

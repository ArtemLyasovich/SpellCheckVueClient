<template>
  <div>
    <select
      v-model="selectedLanguage"
      class="px-6 py-3 text-2xl font-semibold text-gray-800 bg-white border-2 border-blue-400 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out"
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

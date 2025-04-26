<template>
  <div class="p-6 bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col">
    <label
      for="text"
      class="h-[5vh] text-5xl font-bold text-center text-gray-800 mb-4 font-serif"
    >
      Введите текст для проверки:
    </label>
    <textarea
      id="text"
      v-model="text"
      class="flex-1 p-6 text-2xl text-gray-900 font-serif rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-inner resize-none"
      placeholder="Например: Это тестовый текст с ашипкой"
    ></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<script setup>
import { useSpellcheckStore } from './../api/spellchecker.js'

const store = useSpellcheckStore()
</script>

<template>
  <div class="border flex flex-col">
    <label for="text" class="h-[5vh] flex items-center justify-center">
      Введите текст для проверки:
    </label>
    <textarea
      id="text"
      v-model="store.text"
      class="flex-1 border focus:outline-none focus:ring-4 text-[20px] resize-none"
      placeholder="Например: Это тестовый текст с ашипкой"
    ></textarea>
  </div>
</template>

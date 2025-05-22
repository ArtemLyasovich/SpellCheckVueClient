<template>
  <div>
    <select
      v-model="store.language"
      class="border-2 focus:outline-none focus:ring-4 transition duration-200"
    >
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script setup>
import { useSpellcheckStore } from './../api/spellchecker.js'

const store = useSpellcheckStore()
</script>

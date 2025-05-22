<template>
  <div class="flex flex-col h-screen w-[92vw]">
    <header class="h-[10vh] flex items-center justify-between">
      <div class="flex items-center justify-center space-x-2">
        <img src="/src/assets/logo.png" alt="Logo" class="w-[40px] h-[40px] object-contain" />
        <h1 class="text-[40px]">GrammarCheck</h1>
      </div>
      <div class="flex items-center space-x-4">
        <LanguageSelector />
        <button class="text-xl">🌙/☀️</button>
      </div>
    </header>

    <main class="h-[70vh] flex items-center justify-center px-1">
      <div class="flex w-full max-w-6xl h-full">
        <div class="flex flex-col w-1/2 h-full">
          <TextInput class="flex-1" />
        </div>
        <div class="flex flex-col w-1/2">
          <ResultDisplay class="flex-1" />
        </div>
      </div>
    </main>

    <div class="h-[20vh] flex flex-col items-center justify-start mt-[10px]">
      <SubmitButton />
      <div class="w-full max-w-4xl">
        <h2 class="text-lg font-semibold mb-2">Пояснения ошибок:</h2>
        <ul class="list-disc list-inside text-sm">
          <li v-for="(error, index) in store.explanations" :key="index">
            <template v-if="error.type === 'spelling'">
              Ошибка: {{ error.error }} — {{ error.message }}. 
              <span v-if="error.suggestions.length">
                Предложения: {{ error.suggestions.join(', ') }}
              </span>
            </template>
            <template v-else-if="error.type === 'grammar'">
              Ошибка в предложении "{{ error.error }}": {{ error.message }}
            </template>
            <template v-else>
              {{ error.message }}
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextInput from './components/TextInput.vue'
import ResultDisplay from './components/ResultDisplay.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import SubmitButton from './components/SubmitButton.vue'
import { useSpellcheckStore } from './api/spellchecker.js'

const store = useSpellcheckStore()
</script>

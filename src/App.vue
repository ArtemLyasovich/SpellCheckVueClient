<!-- TODO: Move to Home.vue-->
<template class="">
  <div class="flex flex-col min-h-screen w-full">

    <!-- TODO: full width -->
    <header class="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800 w-full" >
      <div class="flex items-center gap-4">
        <img src="/src/assets/logo.png" alt="Logo" height="40px" />
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">GrammarCheck</h1>
      </div>

      <div class="flex items-center gap-4">
        <LanguageSelector />
        <!-- TODO: implement -->
        <button class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
          🌙/☀️
        </button>
      </div>
    </header>

    <main class="flex-1 flex flex-col w-full justify-center items-center p-6">
      <div class="flex w-full max-w-7xl gap-8 flex-1">
        <div class="flex flex-col w-1/2">
          <TextInput class="flex-1" />
        </div>

        <div class="flex flex-col w-1/2">
          <ResultDisplay class="flex-1" />
        </div>
      </div>
    </main>

     <!-- TODO: styles -->
    <div class="mt-6">
      <SubmitButton />
    </div>

    <div class="mt-6 w-full max-w-7xl p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner">
      <h2 class="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Пояснения ошибок:</h2>
      <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
        <li>Ошибка 1: Неверное окончание в слове "пример".</li>
        <li>Ошибка 2: Пропущена запятая в сложносочинённом предложении.</li>
        <!-- TODO: dynamic -->
      </ul>
    </div>
  </div>
</template>


<script setup>
import TextInput from './components/TextInput.vue'
import ResultDisplay from './components/ResultDisplay.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import SubmitButton from './components/SubmitButton.vue'
</script>

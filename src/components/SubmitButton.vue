<template>
  <div>
    <button
      class="px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-lg 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
             hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 
             focus:outline-none focus:ring-4 focus:ring-indigo-300"
      @click="handleClick"
    >
      ✨ Отправить ✨
    </button>
  </div>
</template>

<script setup>
import { checkSpelling, checkGrammar, useSpellcheckStore } from './../api/spellchecker.js'

const store = useSpellcheckStore()

const handleClick = async () => {
  try {
    console.log('Отправка запроса на проверку орфографии...')
    const spellingResult = await checkSpelling(store.text, store.language)
    console.log('Ответ от spellcheck:', spellingResult)

    console.log('Отправка запроса на проверку грамматики...')
    const grammarResult = await checkGrammar(store.text, store.language)
    console.log('Ответ от grammarcheck:', grammarResult)

    const spellingErrors = (spellingResult.errors || []).map(err => ({
      type: 'spelling',
      error: err.word,
      message: 'Орфографическая ошибка',
      suggestions: err.suggestions || []
    }))

    const grammarErrors = (grammarResult.errors || []).map(err => ({
      type: 'grammar',
      error: err.sentence,
      message: err.message,
      suggestions: []
    }))

    store.setExplanations([...spellingErrors, ...grammarErrors])

  } catch (error) {
    console.error('Ошибка при проверке текста:', error)
  }
}
</script>

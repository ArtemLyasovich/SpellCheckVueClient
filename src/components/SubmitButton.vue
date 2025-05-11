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
const handleClick = () => {
  console.log('Кнопка нажата')
}
</script>

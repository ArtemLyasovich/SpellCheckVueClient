<template>
  <div>
    <button
      class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out"
      @click="handleClick"
    >
      Отправить
    </button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log('Кнопка нажата')
}
</script>

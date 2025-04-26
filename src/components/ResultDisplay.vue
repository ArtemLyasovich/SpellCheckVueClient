<template>
  <div
    class="flex flex-col p-6 bg-white rounded-2xl shadow-xl border border-gray-200"
  >
    <div class="h-[10vh] flex items-center justify-center mb-4">
      <label
        for="result"
        class="text-[40px] font-extrabold text-gray-800 font-serif"
      >
        Результаты проверки:
      </label>
    </div>
    <div
      id="result"
      class="flex-1 p-8 text-[28px] text-gray-900 font-serif rounded-xl border border-gray-300 bg-gray-50 shadow-inner overflow-auto"
    >
      Нет ошибок!
    </div>
  </div>
</template>

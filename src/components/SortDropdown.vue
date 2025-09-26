<template>
  <div class="relative">
    <select 
      v-model="store.sort" 
      class="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full"
    >
      <option value="default">Default Sorting</option>
      <option value="alphabetical">Alphabetical (A-Z)</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore'
const store = useProductStore()
</script>
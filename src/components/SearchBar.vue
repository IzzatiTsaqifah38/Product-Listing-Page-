<template>
  <div class="sticky top-0 z-20 bg-white border-b border-gray-200/80 backdrop-blur-sm">
    <div class="p-4">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        
        <input
          type="text"
          placeholder="Search products..."
          v-model="store.search"
          class="w-full bg-gray-50/80 rounded-2xl border-0 pl-12 pr-10 py-4 text-sm focus:ring-3 focus:ring-blue-500/20 focus:bg-white transition-all duration-300 placeholder-gray-500"
        />
        
        <div v-if="store.search" class="absolute inset-y-0 right-0 flex items-center pr-4">
          <button 
            @click="store.search = ''" 
            class="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200/50 transition-colors"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore'
const store = useProductStore()
</script>
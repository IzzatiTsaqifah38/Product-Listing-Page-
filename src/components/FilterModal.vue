<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end transition-opacity duration-300">
    <div class="bg-white w-full rounded-t-3xl max-h-[85vh] overflow-hidden transform transition-transform duration-300">
      <div class="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <div>
          <h2 class="text-xl font-bold text-gray-900">Filters</h2>
          <p class="text-sm text-gray-500">Refine your product search</p>
        </div>
        <button @click="close" class="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <div class="p-6 border-b border-gray-200">
        <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
          <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          Categories
        </h3>
        <div class="grid grid-cols-2 gap-3">
          <button
            v-for="category in store.categories"
            :key="category"
            @click="store.toggleCategory(category)"
            :class="[
              'py-3 px-4 rounded-xl border text-sm font-medium transition-all',
              store.selectedCategories.includes(category)
                ? 'bg-blue-50 border-blue-500 text-blue-600'
                : 'bg-white border-gray-300 text-gray-700 hover:border-blue-300'
            ]"
          >
            {{ formatCategory(category) }}
          </button>
        </div>
      </div>
      
      <div class="p-6">
        <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
          <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path>
          </svg>
          Sort By
        </h3>
        <div class="space-y-2">
          <label v-for="option in sortOptions" :key="option.value" class="flex items-center p-3 rounded-xl border border-gray-200 hover:border-blue-300 cursor-pointer">
            <input
              type="radio"
              :value="option.value"
              v-model="store.sort"
              class="text-blue-600 focus:ring-blue-500"
            />
            <span class="ml-3 text-sm font-medium">{{ option.label }}</span>
          </label>
        </div>
      </div>
      <div class="p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0">
        <div class="flex gap-3">
          <button 
            @click="store.clearFilters()"
            class="flex-1 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            Clear All
          </button>
          <button 
            @click="close"
            class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore'

const store = useProductStore()
const isOpen = defineModel()

const sortOptions = [
  { value: 'default', label: 'Default Sorting' },
  { value: 'alphabetical', label: 'Alphabetical (A-Z)' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' }
]

const formatCategory = (category) => {
  return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

const close = () => {
  isOpen.value = false
}
</script>
<template>
  <div class="group relative bg-white rounded-2xl shadow-custom hover:shadow-custom-hover transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 cursor-pointer transform hover:-translate-y-1">
    <div class="relative bg-gradient-to-br from-gray-50 to-white h-52 p-6 flex items-center justify-center">
      <img 
        :src="product.image" 
        :alt="product.title"
        class="max-h-40 object-contain transition-transform duration-500 group-hover:scale-110" 
      />
      <div class="absolute top-3 right-3">
        <span class="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full capitalize border border-gray-200">
          {{ formatCategory(product.category) }}
        </span>
      </div>
      <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button class="bg-white text-blue-600 p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="p-5">
      <h3 class="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 leading-tight min-h-[40px] group-hover:text-blue-600 transition-colors">
        {{ product.title }}
      </h3>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xl font-bold text-blue-600">RM{{ product.price.toFixed(2) }}</p>
        </div>
        <button class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2.5 rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const formatCategory = (category) => {
  return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

defineProps({
  product: Object
})
</script>
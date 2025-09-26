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
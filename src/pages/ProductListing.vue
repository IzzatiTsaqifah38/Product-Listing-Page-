<template>
  <div class="max-w-md mx-auto bg-white min-h-screen">
    <SearchBar />
    
    <div class="sticky top-16 z-10 bg-white border-b border-gray-200/80 backdrop-blur-sm">
      <div class="flex justify-between items-center px-4 py-4">
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500 font-medium">{{ store.filteredProducts.length }} products</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-40">
            <SortDropdown />
          </div>
          
          <button 
            @click="showFilterModal = true"
            class="relative border border-gray-300 rounded-xl px-4 py-3 flex items-center gap-2 text-sm font-medium hover:border-blue-500 hover:text-blue-600 transition-all bg-white hover:bg-blue-50/50 min-w-[100px] justify-center"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"></path>
            </svg>
            <span>Filter</span>
            <span v-if="store.activeFilterCount > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm">
              {{ store.activeFilterCount }}
            </span>
          </button>
        </div>
      </div>
      
      <div v-if="store.activeFilterCount > 0" class="px-4 pb-3">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-sm text-blue-800 font-medium">Active filters:</span>
          
          <span v-if="store.search" class="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 font-medium">
            Search: "{{ store.search }}"
            <button @click="store.search = ''" class="text-blue-600 hover:text-blue-800 ml-1">×</button>
          </span>
          
          <span v-for="category in store.selectedCategories" :key="category" class="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 font-medium">
            {{ formatCategory(category) }}
            <button @click="store.toggleCategory(category)" class="text-blue-600 hover:text-blue-800 ml-1">×</button>
          </span>
          
          <span v-if="store.sort !== 'default'" class="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-full flex items-center gap-1 font-medium">
            {{ getSortLabel(store.sort) }}
            <button @click="store.sort = 'default'" class="text-blue-600 hover:text-blue-800 ml-1">×</button>
          </span>
          
          <button @click="store.clearFilters()" class="text-blue-600 text-sm font-medium hover:text-blue-800 ml-auto">
            Clear all
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="store.loading" class="flex flex-col items-center justify-center py-20">
      <div class="animate-spin rounded-full h-14 w-14 border-4 border-blue-600 border-t-transparent mb-4"></div>
      <p class="text-gray-500 font-medium">Loading products...</p>
    </div>
    
    <div v-else class="grid grid-cols-2 gap-5 p-5">
      <ProductCard
        v-for="product in store.filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    
    <div v-if="!store.loading && store.filteredProducts.length === 0" class="text-center py-20 px-4">
      <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-900 mb-2">No products found</h3>
      <p class="text-gray-500 mb-6 max-w-sm mx-auto">Try adjusting your search or filter criteria to find what you're looking for.</p>
      <button 
        @click="store.clearFilters()"
        class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
      >
        Clear all filters
      </button>
    </div>
    
    <FilterModal v-model="showFilterModal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '../store/productStore'
import SearchBar from '../components/SearchBar.vue'
import SortDropdown from '../components/SortDropdown.vue'
import ProductCard from '../components/ProductCard.vue'
import FilterModal from '../components/FilterModal.vue'

const store = useProductStore()
const showFilterModal = ref(false)

const formatCategory = (category) => {
  return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

const getSortLabel = (sortValue) => {
  const sortLabels = {
    'alphabetical': 'Sort: A-Z',
    'price-low': 'Sort: Price Low to High',
    'price-high': 'Sort: Price High to Low'
  }
  return sortLabels[sortValue] || 'Sort'
}

onMounted(() => {
  store.fetchProducts()
})
</script>
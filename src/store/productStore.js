import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    search: '',
    selectedCategories: [],
    sort: 'default',
    categories: [],
    loading: false
  }),
  
  getters: {
    filteredProducts: (state) => {
      let filtered = [...state.products]
      
      if (state.search) {
        filtered = filtered.filter(p =>
          p.title.toLowerCase().includes(state.search.toLowerCase())
        )
      }
      
      if (state.selectedCategories.length > 0) {
        filtered = filtered.filter(p => 
          state.selectedCategories.includes(p.category)
        )
      }
      
      if (state.sort === 'alphabetical') {
        filtered.sort((a, b) => a.title.localeCompare(b.title))
      } else if (state.sort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price)
      } else if (state.sort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price)
      }
      
      return filtered
    },
    
    activeFilterCount: (state) => {
      let count = 0
      
      if (state.search) count++
      
      count += state.selectedCategories.length
      
      if (state.sort !== 'default') count++
      
      return count
    }
  },
  
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        this.products = res.data
        this.categories = [...new Set(res.data.map(p => p.category))]
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        this.loading = false
      }
    },
    
    toggleCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(c => c !== category)
      } else {
        this.selectedCategories.push(category)
      }
    },
    
    clearFilters() {
      this.search = ''
      this.selectedCategories = []
      this.sort = 'default'
    }
  }
})
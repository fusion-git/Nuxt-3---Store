<template>
  <div class="text-center mb-6">
    <h2 class="text-2xl sm:text-3xl">Fusion Store powered by Nuxt</h2>
    <p class="text-base">Check out our last products</p>
  </div>
  <div class="container px-4">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>

const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=4')

</script>

<style scoped>
  
</style>
<template>
  <div class="text-center">
    <h2>Fusion Store powered by Nuxt</h2>
    <p>Check out our last products</p>
  </div>
  <div class="container px-44">
    <div class="grid grid-cols-3 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>

const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=3')

</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
<template>
  <div>
    <header class="shadow-sm bg-white px-4">
      <nav class="container mx-auto p-4 flex justify-center border-t-2 sm:justify-between">
        <NuxtLink to="/products" class="font-bold hidden sm:block">Fusion Merch</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Merch</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="container mx-auto p-4 flex justify-center border-t-2">
      <p>Copyrigh @ 2024</p>
      <div class="flex justify-"></div>
    </footer>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>
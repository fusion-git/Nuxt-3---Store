<template>
  <div>
    <header class="shadow-sm bg-white px-4">
      <nav class="container mx-auto p-4 flex justify-center items-center w-5/6 sm:justify-between">
        <NuxtLink to="/" class="font-bold hidden sm:block">Fusion Store</NuxtLink>
        <ul class="flex gap-4 items-center">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4 w-5/6">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>
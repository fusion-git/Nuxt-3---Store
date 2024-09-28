<template>
  <div class="text-center ml-10 mr-10">
    <h2>About us</h2>
    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia accusantium dolorum magnam tempore tenetur molestiae tempora laboriosam temporibus inventore suscipit ab totam rerum perferendis quam rem praesentium saepe et, repellat blanditiis ipsam iusto quidem id. Necessitatibus molestiae blanditiis iusto similique omnis accusantium vitae est nobis rem placeat iste, non saepe facilis. Reprehenderit cumque est iusto eligendi aperiam nesciunt dolor aliquam incidunt? In, ab voluptas sapiente fugit accusantium voluptatem quasi vel nulla iure ratione? Modi tempore adipisci exercitationem excepturi, reprehenderit labore sequi reiciendis laboriosam minima sit cum! Facilis delectus mollitia assumenda facere asperiores commodi earum quas dignissimos quos distinctio odit rem quidem consequuntur voluptas laboriosam iste voluptatibus porro, laborum quia pariatur esse animi dolor quaerat enim. Commodi debitis dicta perferendis similique rem ducimus natus assumenda nesciunt eaque quod, fuga maxime totam quo minus dignissimos voluptate ab cupiditate dolor modi. Aliquid minima delectus minus, cupiditate voluptatum iusto rerum veniam, explicabo ad reprehenderit ipsam dolorem! Aliquid quos dolor fugiat consequatur! Error alias aliquid aliquam pariatur! Officia exercitationem a voluptates deserunt iusto molestiae id voluptate necessitatibus, voluptas sed rerum, blanditiis modi, natus repellendus odio ut. Dolorem, laudantium provident, beatae corrupti sequi aperiam ipsum expedita in aliquam porro molestiae eligendi modi reprehenderit fuga sunt esse qui sit quo itaque illo. Fuga architecto praesentium fugiat vitae molestias voluptatibus illo vero atque voluptas quam, odit suscipit. Earum unde officia tempore, aliquid ab molestiae quasi, magni necessitatibus cupiditate facilis cumque quae? Aut saepe ea similique, perferendis placeat tenetur minima, labore officia voluptate provident in, possimus rerum. Est!</p>
    <p>api response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>

<script setup>

  const { data } = await useFetch('/api/currency/GBP')
  
</script>
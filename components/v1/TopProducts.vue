<script setup lang="ts">
const slides = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
}));
</script>

<template>
  <session class="top-products v1">
    <h2>Top Products</h2>
    <div class="list">
      <div class="card" v-for="(slide, index) in slides" :key="'top-products-caroucel-index-' + index">
        <NuxtLink :to="'/product/' + index" :title="'Product ' + index">
          <div class="header">
            <NuxtImg :src="slide.url" alt="Product Image" />
            <h4>Product Name {{ index }}</h4>
          </div>
          <div class="content">
            <p v-show="index % 2 == 0">Aliquam ullamcorper rutrum nisi, vitae consequat nunc volutpat sit amet. Proin
              aliquet, diam et porttitor
              euismod, nisi ante convallis tortor</p>
            <p v-show="index % 2 == 1">Aliquam ullamcorper rutrum nisi, euismod, nisi ante convallis tortor</p>
          </div>
          <div class="footer">
            <p>$99.00</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </session>
</template>
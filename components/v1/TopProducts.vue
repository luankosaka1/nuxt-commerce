<script setup lang="ts">
const products = ref([]);

try {
  const { data, error } = await useAsyncGql({
    operation: 'GetTopProducts',
    variables: {
      id: 41,
    },
  });

  if (error?.value?.statusCode) {
    console.log('error', error);
  } else {
    products.value = data?.value?.category?.products.items;
  }
} catch (error) {
  console.log(error);
}
</script>

<template>
  <session class="top-products v1">
    <h2>Top Products</h2>
    <div class="list">
      <div class="card" v-for="(product, index) in products" :key="'top-products-caroucel-index-' + index">
        <NuxtLink :to="'/product/' + product.url_key" :title="product.name">
          <div class="header">
            <NuxtImg :src="product.small_image.url" alt="Product Image" />
            <h4>{{ product.name }}</h4>
          </div>
          <div class="content" v-html="product.short_description.html"></div>
          <div class="footer">
            <p>{{ formatPrice(product.price_range.minimum_price.final_price) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </session>
</template>
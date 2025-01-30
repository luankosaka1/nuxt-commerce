<template>
  <session class="caroucel-session">
    <carousel :items-to-show="1">
    <slide v-for="(slide, index) in slides" :key="'caroucel-index-' + index">
      <div class="carousel__item">
        <NuxtImg :src="slide" :alt="slide" :key="'caroucel-slide-index-' + index" />
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </session>
</template>

<script setup lang="ts">
const slides = [
  "https://static.vecteezy.com/ti/vetor-gratis/p1/2006774-paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-gratis-vetor.jpg",
  "https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170138608/70143581-banner-de-com%C3%A9rcio-eletr%C3%B4nico.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg?ts=1606113265"
]
</script>

<style lang="scss">
.caroucel-session {
  max-width: 1540px;
  width: 100%;
  margin: 0 auto;

  .carousel__item {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
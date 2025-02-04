<template>
  <session class="caroucel-session">
    <carousel :items-to-show="1" :wrap-around="true">
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
  "https://picsum.photos/1980/450?random=1",
  "https://picsum.photos/1980/450?random=2",
  "https://picsum.photos/1980/450?random=3",
  "https://picsum.photos/1980/450?random=4",
  "https://picsum.photos/1980/450?random=5",
]
</script>
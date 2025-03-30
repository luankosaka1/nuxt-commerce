<template>
  <div class="category-list v1" style="max-width: 1440px; margin: 3rem auto 0;">
    <h1>Category: {{ category?.name }}</h1>

    <div class="columns" style="display: flex; gap: 16px;">
      <div class="column">
        <div class="filter">
          <h2>Filters</h2>
          <div class="filter-item" v-for="(aggregation, index) in aggregations" :key="index"
            style="border: 1px solid #ccc; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <h3>{{ aggregation.label }}</h3>
            <div class="filter-options">
              <div class="option" v-for="(option, index) in aggregation.options" :key="index">
                {{ option.label }} ({{ option.count }})
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="sort-by">
          <select>
            <option v-for="option in sortFields.options" :key="option.value" :value="option.value"
              :selected="option.value === sortFields.default">
              {{ option.label }}
            </option>
          </select>
        </div>
        <br />
        <div class="products" v-if="products">
          <ul style="display: flex; flex-wrap: wrap; gap: 8px;">
            <li v-for="product in products" :key="product.uid"
              style="border: 1px solid #ccc; padding: 16px; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; justify-content: center; align-items: center;">
              <h5>{{ product.name }}</h5>
              <NuxtImg width="200" height="200" :src="product.small_image.url" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCategoryByUrlKey } from '@/services/getCategoryByUrlKey';
import { getProductsByCategoryUid } from '@/services/getProductsByCategoryUid';

const { urlKey } = defineProps<{
  urlKey: string
}>();

const category = await getCategoryByUrlKey(urlKey);
const search = await getProductsByCategoryUid(category.uid);

const products = search?.items;
const aggregations = search?.aggregations;
const sortFields = search?.sort_fields;


</script>
<template>
  <div>
    <h1>Category</h1>
    {{ urlKey }}
  </div>
</template>

<script lang="ts" setup>
import {getProductsByCategoryUrlKey} from '@/services/getProductsByCategoryUrlKey';
const { urlKey } = defineProps<{
  urlKey: string
}>();

await getProductsByCategoryUrlKey(urlKey);
</script>
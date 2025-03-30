<script setup lang="ts">
import type { RouteType } from "@/types/RouteType";
import { RouteTypeService } from '@/services/routeTypeService'

const route = useRoute();
const urlKey: string = route.params.dynamic[route.params.dynamic.length - 1];
const routeType: RouteType|undefined = await RouteTypeService(urlKey)
</script>

<template>
  <div class="page">
    <V1PageCategory v-if="routeType?.type === 'CATEGORY'" :url-key="urlKey" />
  </div>
</template>
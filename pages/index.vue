<template>
  <div class="page page-index">
    <V1Caroucel />
    <V1Beneficies />
    <V1FavoriteProduct />
    <V1TopProducts />
    <V1Newsletter />
  </div>
</template>
<style lang="scss">
.page {
  &.page-index {
    display: flex;
    flex-direction: column;
    gap: 7rem;
  }
}
</style>
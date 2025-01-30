<template>
  <div class="layout default">
    <AppHeader />
    <AppMenu />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.layout {
  &.default {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    main {
      flex: 1;
      /* padding: 4rem 0; */
    }
  }
}
</style>
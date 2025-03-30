<template>
  <div class="component-menu v1">
    <div class="header-menu">
      <button class="btn btn-header-menu" @click="showMenuModal = true">
        <Icon name="ic:baseline-menu" color="black" size="3rem" />
      </button>
    </div>
    <div v-show="showMenuModal" class="header-menu-mobile">
      <div class="background" @click="showMenuModal = false"></div>
      <div class="menu-content">
        <div class="menu-user">
          <div class="user">
            <div class="avatar">
              <Icon name="ic:baseline-account-circle" color="gray" size="5rem" />
            </div>
            <div class="welcome">
              <div class="hello">Olá, visitante</div>
              <div class="extra">
                <div class="login-register">
                  <NuxtLink to="/login" title="login" @click="showMenuModal = false">entre</NuxtLink>
                  ou
                  <NuxtLink to="/register" title="register" @click="showMenuModal = false">cadastre-se</NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-close" @click="showMenuModal = false">
            <Icon name="ic:baseline-close" color="gray" size="3rem" />
          </button>
        </div>
        <hr />
        <div class="menu-categories">
          <p class="menu-title">Categorias</p>
          <ul class="category-level-1">
            <li v-for="(categoryLvl1, indexCategoryLvl1) in categoryMenu?.items"
              :key="'menu-category-index-' + indexCategoryLvl1">
              <NuxtLink @click="closeMenu" :to="'/' + categoryLvl1.url_key" :title="categoryLvl1.name">{{ categoryLvl1.name }}</NuxtLink>
  
              <ul v-show="categoryLvl1.children_count > 0" class="category-level-2">
                <li v-for="(categoryLvl2, indexCategoryLvl2) in categoryLvl1.children"
                  :key="'menu-category-children-index-' + indexCategoryLvl2">
                  <NuxtLink @click="closeMenu" :to="'/' + categoryLvl1.url_key + '/' + categoryLvl2.url_key" :title="categoryLvl2.name">
                    <Icon name="ic:outline-arrow-right" size="2rem" />
                    {{ categoryLvl2.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <hr />
        <div class="menu-list">
          <p class="menu-title">Menu content</p>
          <ul>
            <li>
              <NuxtLink to="/" title="Link">Link</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" title="Link">Link</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" title="Link">Link</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" title="Link">Link</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" title="Link">Link</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showMenuModal = ref(false);
const categoryMenu = ref<any>({});

const { data, error } = await useAsyncGql({
  operation: 'GetCategoriesMenu',
})

if (error?.value) {
  console.log('menu category error', error)
}

categoryMenu.value = data.value.categories;

function closeMenu() {
  showMenuModal.value = false;
}
</script>
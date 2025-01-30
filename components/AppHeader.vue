<template>
  <header class="app-header">
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
                  <NuxtLink to="/" title="login">entre</NuxtLink>
                  ou
                  <NuxtLink to="/" title="register">cadastre-se</NuxtLink>
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
            <li v-for="(categoryLvl1, indexCategoryLvl1) in categoryMenu?.items" :key="'menu-category-index-' + indexCategoryLvl1">
              <NuxtLink :to="categoryLvl1.url_key" :title="categoryLvl1.name">{{ categoryLvl1.name }}</NuxtLink>
              
              <ul v-show="categoryLvl1.children_count > 0" class="category-level-2">
                <li v-for="(categoryLvl2, indexCategoryLvl2) in categoryLvl1.children" :key="'menu-category-children-index-' + indexCategoryLvl2">
                  <NuxtLink :to="categoryLvl2.url_key" :title="categoryLvl2.name">
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
            <li><NuxtLink to="/" title="Link">Link</NuxtLink></li>
            <li><NuxtLink to="/" title="Link">Link</NuxtLink></li>
            <li><NuxtLink to="/" title="Link">Link</NuxtLink></li>
            <li><NuxtLink to="/" title="Link">Link</NuxtLink></li>
            <li><NuxtLink to="/" title="Link">Link</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>

    <NuxtLink to="/">
      <div class="logo">Nuxt Commerce</div>
    </NuxtLink>

    <form class="header-search" method="get" action="/search">
      <input class="input-search" maxlength="50" type="search" name="q" placeholder="Search" />
      <button class="btn btn-icon" type="submit">
        <Icon name="ic:baseline-search" color="black" size="2.5rem" />
      </button>
    </form>

    <div class="header-options">
      <div class="header-option">
        <Icon name="ic:baseline-perm-phone-msg" color="black" size="2.5rem" />
        <span>Atendimento</span>
      </div>

      <div class="header-option">
        <Icon name="ic:twotone-local-shipping" color="black" size="2.5rem" />
        <span>Rastrear pedido</span>
      </div>

      <div class="header-option">
        <Icon name="ic:baseline-account-circle" color="black" size="2.5rem" />
        <span>Minha Conta</span>
      </div>
    </div>

    <div class="cart">
      <Icon name="ic:baseline-shopping-cart" color="black" size="3rem" />
      <sup>0</sup>
    </div>
  </header>
</template>

<script lang="ts" setup>
const showMenuModal = ref(false);
const categoryMenu = ref<any>({});

const {data, error} = await useAsyncGql({
  operation: 'GetCategoriesMenu',
})

if (error?.value) {
  console.log('menu category error', error)
}

categoryMenu.value = data.value.categories;
</script>

<style>
header {
  &.app-header {
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    border-bottom: 1px solid #d5d5d5cc;

    .logo {
      font-size: 1.5rem;
    }

    .header-menu-mobile {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 100;

      .background {
        background-color: #000;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 105;
        opacity: .5;
      }

      .menu-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 85vw;
        height: 100vh;
        background-color: #FFF;
        z-index: 110;
        padding: 2.4rem 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        overflow-y: auto;

        .menu-user {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          justify-content: space-between;

          .user {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
        }

        .menu-categories {
          ul {
            margin-bottom: .8rem;

            li {
              margin: 1rem 0;
            }
          }

          .category-level-1 {
            .category-level-2 {
              margin-left: 1.6rem;

              a {
                color: gray;
                transition: .3s;
                &:hover {
                  color: #534f4f;
                }
              }
            }
          }
        }

        hr {
          opacity: .2;
        }

        .menu-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
      }

      .btn {
        float: right;

        &.btn-close {
          font-size: 1.6rem;
        }
      }
    }

    .header-search {
      display: none;
    }

    .header-options {
      display: none;
    }
  }
}

@media (min-width: 1025px) {
  header {
    &.app-header {
      .header-search {
        display: flex;
        gap: 1rem;
        flex: 1;
        position: relative;
        
        .input-search {
          flex: 1;
          border: 1px solid #d5d5d5cc;
          border-radius: 0.25rem;
          padding: 0.5rem;
          width: 10rem;
          height: 4.5rem;
          padding: 0 5rem 0 2rem;
        }

        button {
            position: absolute;
            z-index: 5;
            right: 2rem;
            top: 1rem;
        }
      }

      .header-options {
        display: flex;
        flex-wrap: nowrap;
        gap: 5rem;
        align-items: center;
        justify-content: space-around;

        .header-option {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;

          span {
            display: none;
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) {
  header {
    &.app-header {
      .header-options {
        .header-option {
          span {
            display: block;
          }
        }
      }
    }
  }
}
</style>
<template>
  <header class="app-header">

    <V1Menu />

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
<script setup lang="ts">
import type { GenerateCustomerTokenResult } from '~/models/generateCustomerTokenTypes';
import { GenerateCustomerTokenService } from '~/services/generateCustomerTokenService';

const loginMessage = ref<{ text: string, type: string }>({ text: '', type: '' });
const loading = ref(false);

async function handleFormSubmit(event: any) {
  if (loading.value) return;

  loginMessage.value = { text: '', type: '' };
  loading.value = true;
  const email = event.target['email'].value;
  const password = event.target['password'].value;
  const result: GenerateCustomerTokenResult = await GenerateCustomerTokenService({
    email,
    password,
  });

  if (result.success) {
    event.target['newsletter-email'].value = '';
    loginMessage.value = { text: result.message, type: 'success' };
  } else {
    loginMessage.value = { text: result.message, type: 'error' };
  }

  loading.value = false;

}
</script>

<template>
  <div class="login v1">
    <h1>Login</h1>
    <form class="form" @submit.prevent="handleFormSubmit">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" required name="email" />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" required id="password" name="password" />
      </div>
      <div class="columns form-group">
        <button type="submit" class="btn btn-primary">Entrar</button>
        <NuxtLink to="/resetar-senha" class="btn btn-reset" title="Esqueci minha senha">Esqueci minha senha</NuxtLink>
      </div>
    </form>
    <p v-show="loginMessage?.text" class="alert" :class="'alert-' + loginMessage.type">
      {{ loginMessage?.text }}
    </p>
  </div>
</template>
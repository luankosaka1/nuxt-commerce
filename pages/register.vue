<template>
  <div class="register v1">
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
      <div class="form-group">
        <label for="firstname">Nome</label>
        <input type="text" id="firstname" required name="firstname" />
      </div>
      <div class="form-group">
        <label for="lastname">Sobrenome</label>
        <input type="text" id="lastname" required name="lastname" />
      </div>
      <div class="form-group">
        <label for="is_subscribe" class="label-checkbox">
          <input type="checkbox" id="is_subscribe" name="is_subscribe" />
          <span>Receber novidades</span>
        </label>
      </div>
      <div class="columns form-group">
        <button type="submit" class="btn btn-primary">Criar conta</button>
      </div>
    </form>
    <p v-show="loginMessage?.text" class="alert" :class="'alert-' + loginMessage.type">
      {{ loginMessage?.text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { CreateCustomerV2Service } from '@/services/createCustomerV2Service';

const loginMessage = ref<{ text: string, type: string }>({ text: '', type: '' });
const loading = ref(false);

async function handleFormSubmit(event: any) {
  if (loading.value) return;

  loading.value = true;

  const result = await CreateCustomerV2Service({
    email: event.target.email.value,
    password: event.target.password.value,
    firstname: event.target.firstname.value,
    lastname: event.target.lastname.value,
    is_subscribe: event.target.is_subscribe.checked,
  });

  if (result.success) {
    event.target.reset();
    useRouter().push('/');
  } else {
    loginMessage.value = { text: result.message, type: 'error' };
  }

  loading.value = false;

}
</script>
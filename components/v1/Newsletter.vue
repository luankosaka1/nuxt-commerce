<script setup lang="ts">
import type { SubscribeResult } from '~/models/newsletterTypes';
import { subscribeToNewsletter } from '~/services/newsletterService';

const loading = ref(false);
const subscribeMessage = ref<{ text: string, type: string }>({ text: '', type: '' });

async function handleFormSubmit(event: any) {
  event.preventDefault();

  if (loading.value) return;

  subscribeMessage.value = { text: '', type: '' };
  loading.value = true;

  const email = event.target['newsletter-email'].value;
  const result: SubscribeResult = await subscribeToNewsletter({ email });

  if (result.success) {
    event.target['newsletter-email'].value = '';
    subscribeMessage.value = { text: result.message, type: 'success' };
  } else {
    subscribeMessage.value = { text: result.message, type: 'error' };
  }

  loading.value = false;
}
</script>

<template>
  <div class="newsletter v1">
    <div class="columns">
      <div class="column-left">
        <NuxtImg src="https://picsum.photos/1980/450?random=1" alt="Newsletter" />
      </div>
      <div class="column-right">
        <h2>Newsletter</h2>
        <p>Subscribe to our newsletter to get the latest news and updates.</p>
        <form class="form" @submit="handleFormSubmit">
          <div class="form-label">
            <input :disabled="loading" :class="{ 'disabled': loading }" type="email" name="newsletter-email" required
              placeholder="Enter your email address" />
          </div>
          <button :disabled="loading" :class="{ 'disabled': loading }" class="btn btn-primary"
            type="submit">Subscribe</button>
        </form>
        <p v-show="subscribeMessage?.text" class="alert" :class="'alert-' + subscribeMessage.type">
          {{ subscribeMessage?.text }}
        </p>
      </div>
    </div>
  </div>
</template>
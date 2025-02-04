<script setup lang="ts">
async function handleFormSubmit(event: any) {
  event.preventDefault();

  const email = event.target['newsletter-email'].value;

  try {
    const response = await GqlSubscribeEmailToNewsletter(email);
  } catch (error) {
    console.error(error);
  }
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
            <input type="email" name="newsletter-email" required placeholder="Enter your email address" />
          </div>
          <button class="btn btn-primary" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>
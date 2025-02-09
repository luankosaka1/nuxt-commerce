<template>
  <div class="resetar-senha v1">
    <h1>Resetar senha</h1>
    <form>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Enviar</button>
        <NuxtLink to="/login" title="Voltar para o login">Voltar para o login</NuxtLink>
      </div>
    </form>
  </div>
</template>
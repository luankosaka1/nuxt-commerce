<template>
  <section class="beneficies-session v1">
      <div class="benefit">
        <Icon class="icon" name="ic:baseline-local-shipping" size="6rem" color="gray" />
        <div class="benefit-content">
          <p class="benefit-title">Frete Grátis</p>
          <p class="benefit-subtitle">acima de R$299</p>
        </div>
      </div>
      <div class="benefit">
        <Icon class="icon" name="ic:round-percent" size="6rem" color="gray" />
        <div class="benefit-content">
          <p class="benefit-title">Descontos</p>
          <p class="benefit-subtitle">em pagamentos a vista</p>
        </div>
      </div>
      <div class="benefit">
        <Icon class="icon" name="oui:app-gis" size="6rem" color="gray" />
        <div class="benefit-content">
          <p class="benefit-title">Entrega local</p>
          <p class="benefit-subtitle">receba hoje</p>
        </div>
      </div>
      <div class="benefit">
        <Icon class="icon" name="icomoon-free:credit-card" size="6rem" color="gray" />
        <div class="benefit-content">
          <p class="benefit-title">Pague com cartão</p>
          <p class="benefit-subtitle">em ate 12x s/ juros</p>
        </div>
      </div>
      <div class="benefit">
        <Icon class="icon" name="ic:baseline-security" size="6rem" color="gray" />
        <div class="benefit-content">
          <p class="benefit-title">Segurança</p>
          <p class="benefit-subtitle">Loja oficial</p>
        </div>
      </div>
  </section>
</template>

<style>
.beneficies-session {
  max-width: 1540px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-items: center;
  gap: 2.4rem;
  overflow-x: auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  padding-bottom: 1.2rem;

  .benefit {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    max-width: 25rem;
    min-width: 20rem;

    .benefit-content {
      .benefit-title {
        color: #393939;
        font-weight: 700;
        font-size: 1.4rem;
      }

      .benefit-subtitle {
        margin-top: .6rem;
        color: #393939;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
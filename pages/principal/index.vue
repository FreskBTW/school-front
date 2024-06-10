<template>
  <div>
    <AppHeader />
    <MainBanner />
    <Features />
    <Pricing />
    <Testimonials />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import MainBanner from '~/components/MainBanner.vue'
import Features from '~/components/Features.vue'
import Pricing from '~/components/Pricing.vue'
import Testimonials from '~/components/Testimonials.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    MainBanner,
    Features,
    Pricing,
    Testimonials,
    AppFooter
  }
}
</script>

<style>
/* Estilos globales si es necesario */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>

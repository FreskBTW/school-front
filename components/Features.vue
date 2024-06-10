<template>
  <section class="features">
    <h2>Trusted by company like</h2>
    <div class="companies">
      <div class="company-logo" v-for="n in 5" :key="n">
        <img :src="`/images/company${n}.png`" :alt="`Company ${n}`" />
      </div>
    </div>
    <div class="feature-list">
      <div class="feature" v-for="feature in features" :key="feature.id">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features-web',
  data () {
    return {
      features: [
        { id: 1, title: 'Slack integration', description: 'Statista is a school that offers a personalized...' },
        { id: 2, title: 'Slack integration', description: 'Statista is a school that offers a personalized...' },
        { id: 3, title: 'Slack integration', description: 'Statista is a school that offers a personalized...' },
        { id: 4, title: 'Slack integration', description: 'Statista is a school that offers a personalized...' }
      ]
    }
  }
}
</script>

<style scoped>
.features {
  background: #f5f5f5;
  padding: 40px 20px;
  text-align: center;
}
.companies {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}
.company-logo img {
  max-width: 100px;
}
.feature-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.feature {
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 200px;
}
</style>

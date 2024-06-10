<template>
  <section class="pricing" id="pricing">
    <h2>Pick up the best plan</h2>
    <div class="plans">
      <div class="plan" v-for="plan in plans" :key="plan.id">
        <h3>{{ plan.name }}</h3>
        <p class="price">${{ plan.price }} <span>/ Month</span></p>
        <ul>
          <li v-for="benefit in plan.benefits" :key="benefit">{{ benefit }}</li>
        </ul>
        <button class="choose-button">Choose</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pricing-web',
  data () {
    return {
      plans: [
        { id: 1, name: 'Standard', price: 15, benefits: ['For 1-10 people in a team', 'Basic support', 'All features included'] },
        { id: 2, name: 'Standard', price: 15, benefits: ['For 1-10 people in a team', 'Basic support', 'All features included'] },
        { id: 3, name: 'Standard', price: 15, benefits: ['For 1-10 people in a team', 'Basic support', 'All features included'] }
      ]
    }
  }
}
</script>

<style scoped>
.pricing {
  background: #0b0f3b;
  color: white;
  padding: 40px 20px;
  text-align: center;
}
.plans {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.plan {
  background: #1c1f4a;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 200px;
}
.plan h3 {
  font-size: 24px;
  margin-bottom: 10px;
}
.price {
  font-size: 32px;
  margin: 10px 0;
}
.price span {
  font-size: 16px;
}
ul {
  list-style: none;
  padding: 0;
}
ul li {
  margin: 10px 0;
}
.choose-button {
  background: #00b2ff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
</style>

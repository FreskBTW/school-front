<template>
  <section class="testimonials">
    <h2>Interesting option from customer</h2>
    <div class="testimonials-list">
      <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
        <img :src="testimonial.image" :alt="testimonial.name" />
        <p>{{ testimonial.feedback }}</p>
        <p><strong>{{ testimonial.name }}</strong></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials-web',
  data () {
    return {
      testimonials: [
        { id: 1, name: 'Customer 1', feedback: 'Great product!', image: '/images/customer1.png' },
        { id: 2, name: 'Customer 2', feedback: 'Excellent service!', image: '/images/customer2.png' }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials {
  background: #f5f5f5;
  padding: 40px 20px;
  text-align: center;
}
.testimonials-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.testimonial {
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 200px;
}
.testimonial img {
  max-width: 100px;
  border-radius: 50%;
}
</style>

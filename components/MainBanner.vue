<template>
  <section id="home" class="main-banner">
    <div class="content">
      <h1>Manage your team easily with task man</h1>
      <p>Statista.id is a school management solution that offers a personalized portal to each type of user.</p>
      <button class="cta-button">
        Get Started
      </button>
    </div>
    <div class="image-container">
      <img src="/images/your-image.png" alt="Main Banner Image">
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainBanner'
}
</script>

<style scoped>
.main-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background: #f5f5f5;
}
.content {
  max-width: 50%;
}
h1 {
  font-size: 48px;
  color: #0b0f3b;
}
p {
  font-size: 18px;
  margin: 20px 0;
}
.cta-button {
  background: #00b2ff;
  color: white;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.image-container img {
  max-width: 100%;
}
</style>

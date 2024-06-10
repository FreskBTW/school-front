<template>
  <footer class="footer">
    <div class="footer-links">
      <div class="footer-section" v-for="section in sections" :key="section.title">
        <h4>{{ section.title }}</h4>
        <ul>
          <li v-for="link in section.links" :key="link">{{ link }}</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>©2024 Statista.id. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer-web',
  data () {
    return {
      sections: [
        { title: 'Links', links: ['Home', 'Pricing', 'Use Cases', 'Location', 'FAQ', 'Company'] },
        { title: 'Links', links: ['Home', 'Pricing', 'Use Cases', 'Location', 'FAQ', 'Company'] },
        { title: 'Links', links: ['Home', 'Pricing', 'Use Cases', 'Location', 'FAQ', 'Company'] },
        { title: 'Links', links: ['Home', 'Pricing', 'Use Cases', 'Location', 'FAQ', 'Company'] }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  background: #0b0f3b;
  color: white;
  padding: 40px 20px;
}
.footer-links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.footer-section {
  margin: 20px;
}
.footer-section h4 {
  font-size: 18px;
  margin-bottom: 10px;
}
.footer-section ul {
  list-style: none;
  padding: 0;
}
.footer-section ul li {
  margin: 5px 0;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #1c1f4a;
  padding-top: 20px;
}
.footer-bottom-links a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
</style>

<template>
  <header class="app-header">
    <nav class="nav">
      <div class="logo">Statista</div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#use-cases">Use Cases</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#company">Company</a></li>
      </ul>
      <button class="login-button">Login</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  background: #0b0f3b;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.logo {
  font-size: 24px;
  color: white;
}
.nav-links {
  display: flex;
  list-style: none;
}
.nav-links li {
  margin-right: 20px;
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.login-button {
  background: #0b0f3b;
  color: #00b2ff;
  border: 1px solid #00b2ff;
  padding: 10px 20px;
  cursor: pointer;
}
</style>

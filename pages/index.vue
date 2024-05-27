<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Welcome, Log into your account</h1>
      <div class="login-form">
        <p>It is our great pleasure to have you on board!</p>
        <input v-model="schoolName" type="text" placeholder="Enter the name of school">
        <input v-model="password" type="password" placeholder="Enter Password">
        <button @click="login">
          Login
        </button>
        <p>Already have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      schoolName: '',
      password: ''
    }
  },
  methods: {
    login () {
      // Conectar con back
      console.log('School Name:', this.schoolName)
      console.log('Password:', this.password)
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.login-container {
  text-align: center;
}

h1 {
  font-weight: normal;
  margin-bottom: 20px;
}

.login-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form p {
  margin-bottom: 20px;
}

input[type="text"],
input[type="password"] {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

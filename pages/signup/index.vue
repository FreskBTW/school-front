<template>
  <div class="signup-container">
    <h1>Welcome, create your school account</h1>
    <div class="signup-form">
      <p>It is our great pleasure to have you on board!</p>
      <input v-model="adminName" type="text" placeholder="Enter the name of admin">
      <input v-model="schoolName" type="text" placeholder="Enter the name of school">
      <input v-model="schoolEmail" type="email" placeholder="Enter the school email">
      <button @click="signup">
        Next
      </button>
      <p>
        Already have an account? <NuxtLink to="/">
          Sign up
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      adminName: '',
      schoolName: '',
      schoolEmail: ''
    }
  },
  methods: {
    signup () {
      // Falta conectar con back
      console.log('Admin Name:', this.adminName)
      console.log('School Name:', this.schoolName)
      console.log('School Email:', this.schoolEmail)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}

h1 {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 24px;
}

.signup-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.signup-form p {
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

input[type="text"],
input[type="email"] {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
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
  font-size: 14px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
}

button:hover {
  background-color: #0056b3;
}

a {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}

a:hover {
  text-decoration: underline;
}
</style>

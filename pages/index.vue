<template>
  <div class="login-page">
    <div class="login-container">
      <h1>
        Welcome, Log into your account
      </h1>
      <v-form ref="form" v-model="valid" class="login-form">
        <p>It is our great pleasure <br> to have you on board!</p>
        <v-text-field
          v-model="schoolName"
          label="Enter the name of school"
          :rules="schoolNameRules"
          outlined
          dense
          class="custom-input"
          required
        />
        <v-text-field
          v-model="password"
          label="Enter Password"
          :rules="passwordRules"
          outlined
          dense
          type="password"
          class="custom-input"
          required
        />
        <v-btn class="custom-login-btn" @click="loginUser">
          Login
        </v-btn>
        <p>Dont have an account? <a href="/signup">Sign up</a></p>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      schoolName: '',
      password: '',
      valid: false,
      schoolNameRules: [
        v => !!v || 'School name is required',
        v => (v && v.length >= 3) || 'School name must be at least 3 characters'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be at least 6 characters'
      ]
    }
  },
  methods: {
    loginUser () {
      this.validForm = this.$refs.form.validate()
      if (this.validForm) {
        const sendData = {
          schoolname: this.schoolName,
          adminpass: this.password
        }
        const url = 'http://localhost:5010/api/auth/login'
        this.$axios.post(url, sendData)
          .then((res) => {
            console.log('@@ res=>', res)
            if (res.data.token) {
              localStorage.setItem('token', res.data.token)
              this.$router.push('/dashboard')
              // redirigir a la siguiente pagina
            }
          })
          .catch((err) => {
            console.log('@@ err =>', err)
          }
          )
      } else {
        alert('Algo esta mal')
      }
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
  color: #4f4f4f;
}

h1 {
  font-weight: black;
  font-size: 35px;
  top: 200px;
  position: fixed;
}

.login-form {
  background: #ffffff;
  color: #667085;
  width: 512px;
  height: 400px;
  margin-top: 40px;
  padding: 30px;
}

.login-form p {
  margin-bottom: 60px;
  color: #667085;
  font-size: 18px;
}

.custom-input {
  width: 250px;
  height: 70px;
  margin-left: 100px;
  margin-bottom: 15px;
}

.custom-login-btn {
  width: 330px!important;
  height: 50px !important;
  font-size: 18px;
  font-weight: 500;
  background-color: #2d88d4 !important;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 15px;
  text-transform: none
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

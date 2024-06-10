<template>
  <div class="signup-container">
    <h1>Welcome, create your school account</h1>
    <div class="form-container">
      <!-- Progress Bar -->
      <v-stepper v-model="step" class="progress-bar">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">
            <div class="step-title">Your details</div>
            <div class="step-subtitle"> Name and email</div>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="step > 2" step="2">
            <div class="step-title">Choose a password</div>
            <div class="step-subtitle">Choose a secure password</div>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">
            <div class="step-title">Invite your team</div>
            <div class="step-subtitle">Staff number and address</div>
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>

      <v-stepper v-model="step" class="signup-form">
        <v-stepper-items>
          <!-- Step 1: Account Details -->
          <v-stepper-content step="1">
            <v-form ref="form1" v-model="validStep1">
              <p>It is our great pleasure to have you on board!</p>
              <v-text-field
                v-model="adminName"
                label="Enter the name of admin"
                :rules="adminNameRules"
                outlined
                dense
                class="custom-input"
                required
              />
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
                v-model="schoolEmail"
                label="Enter the school email"
                :rules="schoolEmailRules"
                outlined
                dense
                type="email"
                class="custom-input"
                required
              />
              <v-btn :disabled="!validStep1" class="custom-signup-btn" @click="nextStep">
                Next
              </v-btn>
            </v-form>
          </v-stepper-content>

          <!-- Step 2: Password -->
          <v-stepper-content step="2">
            <v-form ref="form2" v-model="validStep2">
              <v-text-field
                v-model="password"
                label="Enter password"
                :rules="passwordRules"
                outlined
                dense
                class="custom-input"
                type="password"
                required
              />
              <v-text-field
                v-model="confirmPassword"
                label="Confirm password"
                :rules="confirmPasswordRules"
                outlined
                dense
                class="custom-input"
                type="password"
                required
              />
              <v-btn @click="prevStep" class="custom-signup-btn">
                Back
              </v-btn>
              <v-btn :disabled="!validStep2" class="custom-signup-btn" @click="nextStep">
                Next
              </v-btn>
            </v-form>
          </v-stepper-content>

          <!-- Step 3: Staff Info -->
          <v-stepper-content step="3">
            <v-form ref="form3" v-model="validStep3">
              <v-text-field
                v-model="staffNumber"
                label="Enter staff number"
                :rules="staffNumberRules"
                outlined
                dense
                class="custom-input"
                required
              />
              <v-text-field
                v-model="address"
                label="Enter address"
                :rules="addressRules"
                outlined
                dense
                class="custom-input"
                required
              />
              <v-btn @click="prevStep" class="custom-signup-btn">
                Back
              </v-btn>
              <v-btn :disabled="!validStep3" class="custom-signup-btn" @click="submit">
                Submit
              </v-btn>
            </v-form>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
    <p>Already have an account? <a href="/">Login</a></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      step: 1,
      adminName: '',
      schoolName: '',
      schoolEmail: '',
      password: '',
      confirmPassword: '',
      staffNumber: '',
      address: '',
      validStep1: false,
      validStep2: false,
      validStep3: false,
      adminNameRules: [
        v => !!v || 'Admin name is required',
        v => (v && v.length >= 3) || 'Admin name must be at least 3 characters'
      ],
      schoolNameRules: [
        v => !!v || 'School name is required',
        v => (v && v.length >= 3) || 'School name must be at least 3 characters'
      ],
      schoolEmailRules: [
        v => !!v || 'School email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirmation is required',
        v => v === this.password || 'Passwords must match'
      ],
      staffNumberRules: [
        v => !!v || 'Staff number is required'
      ],
      addressRules: [
        v => !!v || 'Address is required'
      ]
    }
  },
  methods: {
    nextStep () {
      if (this.$refs[`form${this.step}`].validate()) {
        this.step++
      }
    },
    prevStep () {
      this.step--
    },
    async submit () {
      if (this.$refs.form3.validate()) {
        try {
          const response = await axios.post('http://localhost:5010/api/auth/signupADM', {
            nameadmin: this.adminName,
            schoolname: this.schoolName,
            schoolemail: this.schoolEmail,
            adminpass: this.password,
            staffnum: this.staffNumber,
            admadress: this.address,
            id: Date.now().toString()

          })
          this.$router.push('/')
          console.log('Registro exitoso:', response.data)
          // Puedes redirigir al usuario o mostrar un mensaje de éxito
        } catch (error) {
          console.error('Error en el registro:', error.response ? error.response.data : error.message)
          // Puedes mostrar un mensaje de error al usuario
        }
      }
    }
  }
}
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  text-align: center;
}

h1 {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 40px !important;
  color: #4F4F4F;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  width: 512px;
  height: auto;
  align-content: center;
}

.signup-form p {
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

.custom-input .v-input__control {
  border-width: 2px;
  padding: 14px;
}

.custom-signup-btn {
  width: 100%;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
  background-color: #2D88D4 !important;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  text-transform: none;
}

a {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}

a:hover {
  text-decoration: underline;
}

.progress-bar {
  position: fixed;
  margin-top: 500px;
  width: 1200px;
  justify-content: center;
}

.step-title {
  font-size: 16px;
  font-weight: bold;
}

.step-subtitle {
  font-size: 12px;
  color: #666;
}

.v-divider {
  height: 2px;
  background-color: #2D88D4;
}
</style>

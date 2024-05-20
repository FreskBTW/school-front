<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center">
    <v-card class="pa-5" max-width="400" elevation="1">
      <v-card-title class="headline text-center">
        Welcome, create your school account
      </v-card-title>
      <v-card-subtitle class="text-center mb-4">
        It is our great pleasure to have you on board!
      </v-card-subtitle>
      <v-form>
        <v-text-field
          v-model="adminName"
          label="Enter the name of admin"
          required
          outlined
          class="mb-4"
        />
        <v-text-field
          v-model="schoolName"
          label="Enter the name of school"
          required
          outlined
          class="mb-4"
        />
        <v-text-field
          v-model="schoolEmail"
          label="Enter the school email"
          required
          outlined
          type="email"
          class="mb-4"
        />
        <v-btn color="primary" block large @click="submitForm">
          Next
        </v-btn>
      </v-form>
      <v-card-actions class="justify-center mt-4">
        <v-btn text href="/login">
          Already have an account? Sign up
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
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
    submitForm () {
      // Implement your form submission logic here
      console.log('Admin Name:', this.adminName)
      console.log('School Name:', this.schoolName)
      console.log('School Email:', this.schoolEmail)
    }
  }
}
</script>

<style scoped>
.fill-height {
  height: 100vh;
  background-color: #f9f9f9;
  padding: 0 16px;
}

.pa-5 {
  padding: 20px !important;
}

.headline {
  font-size: 1.5rem;
  font-weight: 500;
  color: #DCDCDC;
}

.mb-4 {
  margin-bottom: 16px !important;
}

.v-card {
  border-radius: 8px;
}

.v-btn {
  border-radius: 8px;
}

.v-card-subtitle {
  color: #DCDCDC;
}

.v-btn--block {
  border-radius: 8px;
}
</style>

<template>
  <v-app>
    <v-navigation-drawer app permanent class="custom-drawer">
      <v-list active-color="2D88D4">
        <v-list-item class="logo-container">
          <v-list-item-avatar>
            <img src="/logo.png" alt="Logo" class="logo-image">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold white--text">
              Udemy Inter school
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="border-opacity-100" color="white" />
        <br>

        <v-list-item link class="menu-item" @click="$router.push('/dashboard')">
          <v-list-item-icon>
            <v-icon class="white--text menu-icon">
              mdi-home-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text menu-text">
              Dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-menu offset-x right>
          <template #activator="{ on, attrs }">
            <v-list-item link class="menu-item" v-bind="attrs" v-on="on">
              <v-list-item-icon>
                <v-icon class="white--text menu-icon">
                  mdi-home-outline
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="white--text menu-text">
                  Teachers
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list class="menu_style">
            <v-list-item link dark>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left class="spacing-icn">
                    mdi-home-outline
                  </v-icon>Teachers<v-icon right class="spacing-cv">
                    mdi-chevron-down
                  </v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/teachers/all')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>All teachers
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/teachers/add')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>Add teachers
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/teachers/details')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>Teacher details
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-x right>
          <template #activator="{ on, attrs }">
            <v-list-item link class="menu-item" v-bind="attrs" v-on="on">
              <v-list-item-icon>
                <v-icon class="white--text menu-icon">
                  mdi-school-outline
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="white--text menu-text">
                  Students/Classes
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list class="menu_style">
            <v-list-item link dark>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left class="special-spacing-icn">
                    mdi-school-outline
                  </v-icon>Students/Classes<v-icon right class="special-spacing-cv">
                    mdi-chevron-down
                  </v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/students/all')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>All students
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/students/admission')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>Admission form
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/students/promotion')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>Student Promotion
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/classes')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>Class
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-x right>
          <template #activator="{ on, attrs }">
            <v-list-item link class="menu-item" v-bind="attrs" v-on="on">
              <v-list-item-icon>
                <v-icon class="white--text menu-icon">
                  mdi-currency-usd
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="white--text menu-text">
                  Billing
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list class="menu_style">
            <v-list-item link dark>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left class="spacing-icn">
                    mdi-currency-usd
                  </v-icon>Billing<v-icon right class="spacing-cv">
                    mdi-chevron-down
                  </v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/billing/student')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>Student Billing
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/billing/parent')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>Parent Billing
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/billing/school')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>School Billing
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link dark class="menu_style_items" @click="$router.push('/billing/friends')">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon right class="spacing-icn">
                    mdi-chevron-right
                  </v-icon>Friends Billing
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-list-item link class="menu-item" @click="$router.push('/settings-profile')">
          <v-list-item-icon>
            <v-icon class="white--text menu-icon">
              mdi-cog-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text menu-text">
              Settings and profile
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="menu-item" @click="$router.push('/exams')">
          <v-list-item-icon>
            <v-icon class="white--text menu-icon">
              mdi-chart-box-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text menu-text">
              Exams
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="menu-item special-menu-item" @click="$router.push('/features')">
          <v-list-item-icon>
            <v-icon class="menu-icon">
              mdi-bank-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-text">
              Features
            </v-list-item-title>
          </v-list-item-content>
          <v-chip color="#B9D7F1" text-color="black" small class="new-chip">
            NEW
          </v-chip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-data-table :headers="headers" :items="schoolstudents" elevation="0" class="v-data-table-class" />
      </v-container>
      <v-col cols="12" class="text-right">
        <v-btn color="white" class="btn-text-color" @click="$router.push('/')">
          Log out
        </v-btn>
        <v-btn
          class="support-button"
          color="#152259"
          dark
          @click="supportClicked"
        >
          <v-icon left>
            mdi-headset
          </v-icon>
          Support
          <v-icon right>
            mdi-chevron-up
          </v-icon>
        </v-btn>
      </v-col>
      <v-btn color="#509CDB" class="btns-text-color" @click="showNuevo = true">
        Add Student
      </v-btn>
      <v-dialog v-model="showNuevo" class="v-dialog-style" height="auto" width="auto">
        <v-card>
          <v-card-title>Add Students</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="validForm">
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="nameStudent" label="Name" type="input" />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="classStudent"
                      label="Class"
                      type="input"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-select
                      v-model="genderStudent"
                      :items="genderOptions"
                      label="Gender"
                      type="input"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="emailStudent" label="Email address" type="email" :rules="correo" />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="phoneStudent" label="Phone number" type="input" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="studentPass" label="Password" type="password" :rules="password" />
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn right block color="gray" @click="agregar">
                  <span style="color:black; text-transform: none;">
                    Add Student
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'center',
          sortable: true,
          value: 'studentname'
        },
        {
          text: 'Student ID',
          align: 'center',
          sortable: true,
          value: 'studentid'
        },
        {
          text: 'Email adress',
          align: 'center',
          sortable: true,
          value: 'studentemail'
        },
        {
          text: 'Class',
          align: 'center',
          sortable: true,
          value: 'studentclass'
        },
        {
          text: 'Gender',
          align: 'center',
          sortable: false,
          value: 'studentgender'
        }
      ],
      schoolstudents: [],
      password: [
        v => (v && v.length > 8) || 'Password must be more than 8 chars'
      ],
      correo: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      showNuevo: false,
      genderOptions: ['Male', 'Female', 'Other']
    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
    if (!this.token) {
      this.$router.push('/')
    }
    this.getAllStudents()
  },
  methods: {
    getAllStudents () {
      const url = 'http://localhost:5010/api/auth/get-allstudents'
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      this.$axios.get(url, config)
        .then((res) => {
          console.log('@@@ res =>', res)
          if (res.data.message === 'Success') {
            this.schoolstudents = res.data.students
          } else if (res.data.message === 'Invalid Token') {
            this.router.push('/')
          }
        })
        .catch((err) => {
          console.log('@@@ err =>', err)
        })
    },
    logout () {
      console.log('Logging out...')
    },
    agregar () {
      this.validform = this.$refs.form.validate()
      if (this.validForm) {
        const sendData = {
          studentid: Date.now().toString(),
          studentemail: this.emailStudent,
          studentname: this.nameStudent,
          studentpass: this.studentPass,
          studentnum: this.phoneStudent,
          studentclass: this.classStudent,
          studentgender: this.genderStudent
        }
        const url = 'http://localhost:5010/api/auth/students/signup'
        this.$axios.post(url, sendData)
          .then((res) => {
            console.log('@@@ res =>', res)
            if (res.data.message === 'Estudiante registrado Satisfactoriamente') {
              this.getAllUsers()
              this.showNuevo = false
            }
          })
          .catch((err) => {
            console.log('@@@ err =>', err)
          })
      } else {
        alert('Faltan Datos')
      }
    }
  }
}
</script>

<style scoped>
.v-application {
  font-family: "Kumbh Sans", sans-serif;
  flex-direction: column;
}
.v-dialog-style{
  height: 300px !important;
  width: 600px !important;
}

.custom-drawer {
  width: 400px;
  background-color: #152259;
  color: white;
}

.logo-container {
  flex-direction: column;
  align-items: center;
}

.logo-image {
  max-width: 200%;
  width: 500;
  height: auto;
}

.v-list-item-title {
  color: white;
}

.v-list-item__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-main {
  background-color: #f9f9f9;
  flex-grow: 1;
}

.welcome-title {
  font-weight: 500;
  font-size: 36px;
  color: #4F4F4F;
  text-align: center;
  margin-bottom: 10px;
}
.welcome-subtitle {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #4F4F4F;
  text-align: center;
}

.action-card {
  text-align: center;
  width: 800px;
  height: 460px;
  margin-left: 360px;
}

.action-card .v-card-title {
  font-size: 24px;
  font-weight: normal;
}

.action-card .v-card-text {
  font-size: 14px;
  color: #2D88D4;
}

.v-footer {
  background-color: transparent;
  box-shadow: none;
}

.btn-text-color {
  color: black;
  position: fixed;
  top: 30px;
  text-transform: none;
  right: 30px;
}
.btns-text-color {
  color: white;
  top: 0px;
  text-transform: none;
  left: 100px;
  font-size: 15px;
  width: 140px !important;
  height: 50px !important;
}

.menu-item {
  width: 220px;
  height: 50px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 10px;
}

.menu-item:hover {
  background-color: #2D88D4;
}

.menu-icon {
  font-size: 25px;
  margin-bottom: 40px;
}

.menu-text {
  font-size: 14px;
  font-weight: 500;
  color:white;
}

.new-chip {
  width: 41px;
  font-weight: bold;
  height: 20px;
  border-radius: 7px;
  padding: 2px 8px;
  font-size: 10px;
  margin-left: 8px;
}

.header {
  background-color: #FCFAFA;
  color: #424242;
  font-size: 18px;
  text-align: center;
  justify-content: center;
}

.special-menu-item {
  color: white;
  margin-top: 160px;
  border-radius: 4px;
}

.special-menu-item .menu-icon {
  color: white;
}
.icon-background {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E7EFFB;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.icon-content {
  color: #1D3D78;
  font-size: 24px;
}
.support-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 30px;
  padding: 10px 20px;
  width: 181px !important;
  height: 60px !important;
  text-transform: none
}
.icn-log-in{
  position: fixed;
  top: 32px;
  right: 170px;
}
.menu_style {
  color:white !important;
 background-color: #152259;
 width: 300px !important;
 font-size: 14px;
}
.menu_style_items:hover {
  background-color: #2D88D4;
}
.v-data-table-class {
margin-top: 100px;
left: 300px;
position: fixed;
width: 1000px;
height: auto;
}
.spacing-icn{
  margin-right: 20px;
}
.spacing-cv{
  margin-left: 130px !important;
}
.special-spacing-icn{
  margin-right: 20px;
}
.special-spacing-cv{
  margin-left: 70px !important;
}
</style>

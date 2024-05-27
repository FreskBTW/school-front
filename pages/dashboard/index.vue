<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="/logo.png" alt="Logo">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold white--text">
              Udemy Inter. school
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.route" link>
          <v-list-item-icon>
            <v-icon class="white--text">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
          <v-badge v-if="item.new" color="green" dot />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" class="text-right">
            <v-alert type="info" border="left" colored-border elevation="2">
              Learn how to launch faster. Watch our webinar for tips from our experts and get a limited time offer.
            </v-alert>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn icon>
              <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-btn color="primary" @click="logout">
              <v-icon left>
                mdi-logout
              </v-icon>
              Log out
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h1 class="welcome-title">
              Welcome to your dashboard, Udemy school
            </h1>
            <p class="welcome-subtitle">
              Uyo/school/@teachable.com
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="action in actions" :key="action.title" cols="12" sm="4">
            <v-card class="pa-3 action-card">
              <v-card-title>
                <v-icon class="mr-3">
                  {{ action.icon }}
                </v-icon>
                <span>{{ action.title }}</span>
              </v-card-title>
              <v-card-text>{{ action.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <v-spacer />
      <v-btn fab color="primary" dark>
        <v-icon>mdi-headphones</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      menuItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
        { title: 'Teachers', icon: 'mdi-account-multiple', route: '/teachers' },
        { title: 'Students/classes', icon: 'mdi-school', route: '/students-classes' },
        { title: 'Billing', icon: 'mdi-cash-multiple', route: '/billing' },
        { title: 'Settings and profile', icon: 'mdi-cog', route: '/settings-profile' },
        { title: 'Exams', icon: 'mdi-file-document-box-check', route: '/exams' },
        { title: 'Features', icon: 'mdi-star-circle', route: '/features', new: true }
      ],
      actions: [
        { title: 'Add other admins', icon: 'mdi-account-plus', description: 'Create rich course content and coaching products for your students. When you give them a pricing plan, they\'ll appear on your site!' },
        { title: 'Add classes', icon: 'mdi-bank', description: 'Create rich course content and coaching products for your students. When you give them a pricing plan, they\'ll appear on your site!' },
        { title: 'Add students', icon: 'mdi-account-multiple-plus', description: 'Create rich course content and coaching products for your students. When you give them a pricing plan, they\'ll appear on your site!' }
      ]
    }
  },
  methods: {
    logout () {
      console.log('Logging out...')
    }
  }
}
</script>

<style scoped>
.v-application {
  font-family: 'Open Sans', sans-serif;
}

.v-navigation-drawer {
  background-color: #002952;
  color: white;
}

.v-list-item-title {
  color: white;
}

.v-list-item-icon > .v-icon {
  color: white;
}

.v-main {
  background-color: #f9f9f9;
}

.welcome-title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
}

.welcome-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.action-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.action-card .v-card-title {
  font-size: 18px;
  font-weight: bold;
}

.action-card .v-card-text {
  font-size: 14px;
  color: #666;
}

.v-footer {
  background-color: transparent;
  box-shadow: none;
}
</style>

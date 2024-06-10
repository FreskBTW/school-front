import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import AllTeachers from './components/AllTeachers.vue'
import AddTeachers from './components/AddTeachers.vue'
import TeacherDetails from './components/TeacherDetails.vue'
import AllStudents from './components/AllStudents.vue'
import AdmissionForm from './components/AdmissionForm.vue'
import StudentPromotion from './components/StudentPromotion.vue'
import Classes from './components/Classes.vue'
import StudentBilling from './components/StudentBilling.vue'
import ParentBilling from './components/ParentBilling.vue'
import SchoolBilling from './components/SchoolBilling.vue'
import FriendsBilling from './components/FriendsBilling.vue'
import SettingsProfile from './components/SettingsProfile.vue'
import Exams from './components/Exams.vue'
import Features from './components/Features.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/teachers/all', component: AllTeachers },
    { path: '/teachers/add', component: AddTeachers },
    { path: '/teachers/details', component: TeacherDetails },
    { path: '/students/all', component: AllStudents },
    { path: '/students/admission', component: AdmissionForm },
    { path: '/students/promotion', component: StudentPromotion },
    { path: '/classes', component: Classes },
    { path: '/billing/student', component: StudentBilling },
    { path: '/billing/parent', component: ParentBilling },
    { path: '/billing/school', component: SchoolBilling },
    { path: '/billing/friends', component: FriendsBilling },
    { path: '/settings-profile', component: SettingsProfile },
    { path: '/exams', component: Exams },
    { path: '/features', component: Features }
  ]
})

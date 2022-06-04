<template>

  <h1>Login</h1>
  <v-container class="bg-surface-variant">
    <v-row justify="space-around">
      <v-col  xl="4" lg="4" md="4" sm="12" xs="12">
        <v-card title="Admin Login">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="userName_a" :rules="userNameRules" label="Username"></v-text-field>
            <v-text-field v-model="password_a" type="password" label="Password"></v-text-field>
            <v-btn :disabled="!valid" @click="adminLogin">Login</v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col xl="4" lg="4" md="4" sm="12" xs="12">
        <v-card title="Staff Login">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="userName_s" :rules="userNameRules" label="Username"></v-text-field>
            <v-text-field v-model="password_s" type="password" label="Password"></v-text-field>
            <v-btn :disabled="!valid" @click="staffLogin">Login</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    valid: true,
    userName_a: '',
    password_a: '',
    userName_s: '',
    password_s: '',
    adminUserName: 'Admin',
    adminPassword: 'Admin',
    staffUserName: 'Staff',
    staffPassword: 'Staff',
    count: 3,
    userNameRules: [
      // v => !!v || 'Name is required',
    ]
  }),
  methods: {
    adminLogin() {
      if (!(this.userName_a === this.adminUserName && this.password_a === this.adminPassword)) {
        this.$router.push('/allStudents')
      } else {
        this.count--;
        alert('invalid Login ' + this.count + ' more tries');
        if (this.count === 0) {
          this.valid = false;
        }
      }
    },
    staffLogin() {
      if (!(this.userName_s === this.staffUserName && this.password_s === this.staffPassword)) {
        this.$router.push('/allStudents')
      } else {
        this.count--;
        alert('invalid Login ' + this.count + ' more tries');
        if (this.count === 0) {
          this.valid = false;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
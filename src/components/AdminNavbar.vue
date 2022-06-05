<template>
  <v-toolbar>
    <v-toolbar-title>Admin</v-toolbar-title>
    <v-btn theme="dark" @click="manageStudents">Manage Students</v-btn>
    <v-btn theme="dark" @click="manageStaff">Manage Staff</v-btn>
    <v-btn theme="dark" @click="logout">Logout</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "AdminNavbar",
  methods: {
    manageStudents() {
      this.$router.push("/manageStudents");
    },
    manageStaff() {
      this.$router.push("/manageStaff");
    },
    logout() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>
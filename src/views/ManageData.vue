<template>
  <admin-navbar/>
  <h1>Manage Data</h1>
  <h2>Add, Update and Delete students and staff data</h2>
  <hr>

  <v-container>
    <v-row justify="space-around">
      <v-col  xl="4" lg="4" md="4" sm="12" xs="12">
        <v-btn @click="manageStudents">Manage Students</v-btn>
      </v-col>
      <v-col xl="4" lg="4" md="4" sm="12" xs="12">
        <v-btn @click="manageStaff">Manage Staff</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminNavbar from "@/components/AdminNavbar";
export default {
  name: "ManageData",
  components: {AdminNavbar},
  methods: {
    manageStudents() {
      this.$router.push('/manageStudents');
    },
    manageStaff() {
      this.$router.push('/manageStaff');
    }
  }
}
</script>

<style scoped>

</style>
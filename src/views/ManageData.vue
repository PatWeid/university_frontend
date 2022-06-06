<template>
  <admin-navbar/>
  <v-container>
  <div class="d-flex flex-column justify-space-between align-start">
    <h1>Manage Data</h1>
    <h2>Add, Update and Delete students and staff data</h2>
  </div>
  </v-container>
  <v-container>
    <v-row justify="center">
      <v-col  xl="4" lg="4" md="4" sm="12" xs="12">
        <v-btn @click="manageStudents" variant="outlined" size="x-large">Manage Students</v-btn>
      </v-col>
      <v-col xl="4" lg="4" md="4" sm="12" xs="12">
        <v-btn @click="manageStaff" variant="outlined" size="x-large">Manage Staff</v-btn>
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
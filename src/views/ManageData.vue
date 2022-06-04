<template>
  <h1>Manage Data</h1>
  <h2>Add, Update and Delete students and staff data</h2>
  <hr>

  <v-container class="bg-surface-variant">
    <v-row justify="space-around">
      <v-col  xl="4" lg="4" md="4" sm="12" xs="12">
        <v-btn title="Manage Students" @click="manageStudents"></v-btn>
      </v-col>
      <v-col xl="4" lg="4" md="4" sm="12" xs="12">
        <v-btn title="Manage Staff" @click="manageStaff"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ManageData",
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
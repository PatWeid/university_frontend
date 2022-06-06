<template>
  <v-toolbar>
    <v-toolbar-title>Staff</v-toolbar-title>
    <v-btn theme="dark" @click="logout">Logout</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "StaffNavbar",
  methods: {
    logout() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>
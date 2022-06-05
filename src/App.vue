<template>
  <v-app>
<!--    <NavbarComponent />-->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import NavbarComponent from "@/components/NavbarComponent";

export default {
  name: 'App',
  // components: {NavbarComponent},
  data: () => ({
    //
  }),
}
</script>

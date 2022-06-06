<script setup>
import Datepicker from 'vue3-datepicker'
import AdminNavbar from "@/components/AdminNavbar";
</script>

<template>
  <admin-navbar/>
  <h1>Add Staff</h1>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row justify="space-around">
          <v-col>
            <v-text-field v-model="StaffID" :rules="idRules" label="Staff ID"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="firstName" :rules="firstNameRules" label="Firstname"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="lastName" label="Lastname"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col><p>DOB:</p></v-col>
          <v-col>
            <v-input :model-value="dob">
              <datepicker v-model="dob" :upper-limit="today"></datepicker>
            </v-input>
          </v-col>
          <v-col>
            <v-radio-group v-model="gender">
              <v-radio label="male" value="male"></v-radio>
              <v-radio label="female" value="female"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="email" :rules="emailRules" label="E-Mail"></v-text-field>
          </v-col>
          <v-col>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-container>
      <v-row justify="space-between">
        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-container>
            <v-row justify="space-between">
              <v-col>
                <v-btn :disabled="!valid" @click="addStaff">Add Staff</v-btn>
              </v-col>
              <v-col>
                <v-btn @click="cancel">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-container>
          <v-spacer/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import staffService from "@/services/staffService";

export default {
  name: "AddStaff",
  data: () => ({
    staffID: '',
    dob: new Date(),
    today: new Date(),
    firstName: '',
    lastName: '',
    email: '',
    valid: true,
    idRules: [
      v => !!v || 'Staff ID is required',
      v => Number.isInteger(Number(v)) || 'Not a Number',
    ],
    firstNameRules: [
      v => !!v || 'Firstname is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    gender: 0,
  }),
  methods: {
    addStaff() {
      staffService.addStaff(0, this.staffID, this.firstName, this.lastName, this.dob, this.gender, this.email);
      alert('Staff added');
    },
    cancel() {
      this.$router.back();
    },
  }
}
</script>

<style scoped>

</style>
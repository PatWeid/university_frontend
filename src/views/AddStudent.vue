<script setup>
import Datepicker from 'vue3-datepicker'
import AdminNavbar from "@/components/AdminNavbar";
</script>

<template>
  <admin-navbar/>
  <h1>Add Student</h1>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row justify="space-around">
          <v-col>
            <v-text-field v-model="id" :rules="idRules" label="Student ID"></v-text-field>
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
            <datepicker @click="validateDOB" selected="" v-model="dob" :upper-limit="today">DOB</datepicker>
          </v-col>
          <v-col><p>Joining Date:</p></v-col>
          <v-col>
            <datepicker @click="validateDOB" selected="" v-model="joiningDate" :upper-limit="today">DOB</datepicker>
          </v-col>
        </v-row>
        <v-row>
          <v-container class="px-0" fluid>
            <v-radio-group v-model="gender">
              <v-radio label="male" value="male"></v-radio>
              <v-radio label="female" value="female"></v-radio>
            </v-radio-group>
          </v-container>
        </v-row>
        <v-row>
          <v-col>
            <v-select :rules="departmentRules"
                      :items="departments"
                      label="Department"
                      v-model="department"
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field v-model="email" :rules="emailRules" label="E-Mail"></v-text-field>
          </v-col>
        </v-row>
        <v-container>
          <v-row justify="space-between">
            <v-col xl="4" lg="4" md="4" sm="12" xs="12" style="background-color: deeppink">
              <v-container>
                <v-row justify="space-between">
                  <v-col>
                    <v-btn :disabled="!valid" @click="addStudent">Add Student</v-btn>
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
      </v-container>


    </v-form>

  </v-card>
</template>

<script>
import studentService from "../services/studentService.js";

export default {
  name: "AddStudent",
  data: () => ({
    id: '',
    dob: new Date(),
    joiningDate: new Date(),
    today: new Date(),
    firstName: '',
    lastName: '',
    email: '',
    // valid: {
    //   Type: Boolean,
    //   value: true,
    // },
    valid: true,
    idRules: [
      v => !!v || 'Student ID is required',
      v => Number.isInteger(Number(v)) || 'Not a Number'],
    firstNameRules: [
      v => !!v || 'Firstname is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    departmentRules: [
      v => v != 0 || 'Select Department'
    ],
    gender: 0,
    departments: ['Computer Science', 'Mathematics', 'Engineering'],
    department: '',
  }),
  methods: {
    addStudent() {
      studentService.addStudent(this.id, this.firstName, this.lastName, this.dob, this.joiningDate, this.gender, this.department, this.email);
      // TODO !!!!!!!!!!!!!!!!!!!!!!!!date validation!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      let actualDate = new Date();
      console.log(this.dob < actualDate);
      console.log("radiogroup: " + this.gender);
      console.log(this.department);
    },
    validateDOB() {
      // TODO !!!!!!!!!!!!!!!!!!!!!!!!date validation!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      console.log('validate DOB');
    },
    cancel() {
      console.log("picked DOB: " + this.dob);
      this.$router.back();
    }
  }
}
</script>

<style scoped>

</style>
<script setup>
import Datepicker from 'vue3-datepicker'
import AdminNavbar from "@/components/AdminNavbar";
</script>
<template>
  <AdminNavbar/>
  <h1>Update Student</h1>
  <v-card>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row justify="space-around">
          <v-col>
            <v-text-field v-model="id" :disabled=true :rules="idRules" label="Student ID"></v-text-field>
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
            <v-input :model-value="dob" :rules="dobRules">
              <datepicker v-model="dob" :upper-limit="today"></datepicker>
            </v-input>
          </v-col>
          <v-col><p>Joining Date:</p></v-col>
          <v-col>
            <v-input :model-value="joiningDate" :rules="joiningDateRules">
              <datepicker v-model="joiningDate" :upper-limit="today"></datepicker>
            </v-input>
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
      </v-container>
    </v-form>

    <v-container>
      <v-row justify="space-between">
        <v-col xl="4" lg="4" md="4" sm="12" xs="12" style="background-color: deeppink">
          <v-container>
            <v-row justify="space-between">
              <v-col>
                <v-btn :disabled="!valid" @click="updateStudent">Update Student</v-btn>
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
import studentService from "@/services/studentService";

function validateDOB(dob) {
  let upperBorder = new Date();
  let upperYear = upperBorder.getUTCFullYear() - 17;
  upperBorder.setFullYear(upperYear);

  let lowerBorder = new Date();
  let lowerYear = lowerBorder.getUTCFullYear() - 60;
  lowerBorder.setFullYear(lowerYear);

  return dob > lowerBorder && dob < upperBorder;
}

export default {
  name: "UpdateStudent",
  mounted() {
    this.id = this.$route.params.id;
    this.firstName = this.$route.params.firstName;
    this.lastName = this.$route.params.lastName;
    this.dob = new Date(this.$route.params.dob);
    this.joiningDate = new Date(this.$route.params.joiningDate);
    this.gender = this.$route.params.gender;
    this.department = this.$route.params.department;
    this.email = this.$route.params.email;
  },
  data: () => ({
    id: '',
    dob: new Date(),
    joiningDate: new Date(),
    today: new Date(),
    firstName: '',
    lastName: '',
    email: '',
    valid: true,
    idRules: [
      v => !!v || 'Student ID is required',
      v => Number.isInteger(Number(v)) || 'Not a Number',
    ],
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
    dobRules: [
      dob => validateDOB(dob) || 'Invalid DOB - you must be between 17 and 60',
    ],
    joiningDateRules: [
      v => v.getUTCFullYear() === 2015 || 'Invalid Year - only 2015 allowed',
    ],
    gender: 0,
    departments: ['Computer Science', 'Mathematics', 'Engineering'],
    department: '',
  }),
  methods: {
    updateStudent() {
      studentService.updateStudent(this.id, this.firstName, this.lastName, this.dob, this.joiningDate, this.gender, this.department, this.email);
      alert('Student updated');
    },
    cancel() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>

</style>
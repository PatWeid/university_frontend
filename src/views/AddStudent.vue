<script setup>
import Datepicker from 'vue3-datepicker'
// import { ref } from 'vue'
</script>

<template>
  <h1>Add Student</h1>


  <!--  <v-card title="Add Student">-->

  <!--    <v-form ref="form" v-model="valid" lazy-validation>-->
  <v-container>
    <v-row justify="space-around">
      <v-col>
        <v-text-field v-model="id" :rules="idRules" label="Student ID"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="firstName" label="Firstname"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="lastName" label="Lastname"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col><p>DOB:</p></v-col>
      <v-col>
        <datepicker @click="validateDOB" selected="" v-model="dob">DOB</datepicker>
      </v-col>
      <v-col><p>Joining Date:</p></v-col>
      <v-col>
        <datepicker @click="validateDOB" selected="" v-model="joiningDate">DOB</datepicker>
      </v-col>
    </v-row>
    <v-row>
      <v-container class="px-0" fluid>
        <v-radio-group @change="addStudent" v-model="radioGroup">
          <v-radio label="male" value="male"></v-radio>
          <v-radio label="female" value="female"></v-radio>
        </v-radio-group>
      </v-container>
    </v-row>
    <v-row>
      <v-col>
        <v-select
            :items="departments"
            label="Department"
            v-model="department"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field v-model="email" label="E-Mail"></v-text-field>
      </v-col>
    </v-row>
    <v-btn :disabled="!valid" @click="addStudent">Add Student</v-btn>
  </v-container>


  <!--    </v-form>-->

  <!--  </v-card>-->


</template>

<script>
export default {
  name: "AddStudent",
  data: () => ({
    id: '',
    dob: new Date(),
    joiningDate: new Date(),
    firstName: '',
    lastName: '',
    email: '',
    valid: true,
    idRules: [],
    radioGroup: 0,
    departments: ['Computer Science', 'Mathematics', 'Engineering'],
    department: '',
  }),
  methods: {
    addStudent() {
      let actualDate = new Date();
      // console.log(new Date(this.dob).getTime());
      console.log(this.dob < actualDate);
      console.log("radiogroup: " + this.radioGroup);
      console.log(this.department);
    },
    validateDOB() {
      console.log('validate DOB');
    }
  }
}
</script>

<style scoped>

</style>
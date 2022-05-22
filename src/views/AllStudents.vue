<template>
  <h1>All Students</h1>
  <div class="container">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Matrikel Number</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in students" v-bind:key="student.matNr">
        <td>{{student.matNr}}</td>
        <td>{{student.firstName}}</td>
        <td>{{student.lastName}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import StudentService from "../services/studentService.js";

export default {
  name: "AllStudents",
  data() {
    return {
      students: []
    }
  },
created() {
  this.getAllStudents();
},
  methods: {
    getAllStudents() {
      StudentService.getAllStudents().then((response) => {
        this.students = response.data;
      })
    }
  }
}

</script>

<style scoped>

</style>
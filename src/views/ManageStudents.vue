<template>
  <h1>Manage Students</h1>

  <v-table>
    <thead>
    <th class="text-left">Student ID</th>
    <th class="text-left">Firstname</th>
    <th class="text-left">Lastname</th>
    <th class="text-left">DOB</th>
    <th class="text-left">Joining Date</th>
    <th class="text-left">Gender</th>
    <th class="text-left">Department</th>
    <th class="text-left">E-Mail</th>
    </thead>
    <tbody>
    <tr v-for="student in students" :key="student.id">
      <td>{{ student.id }}</td>
      <td>{{ student.firstName }}</td>
      <td>{{ student.lastName }}</td>
      <td>{{ student.dob }}</td>
      <td>{{ student.joiningDate }}</td>
      <td>{{ student.gender }}</td>
      <td>{{ student.department }}</td>
      <td>{{ student.email }}</td>
      <td><v-btn @click="deleteStudent(student.id)">Delete</v-btn></td>
    </tr>
    <v-btn variant="outlined" color="primary" @click="addStudent">add Student</v-btn>
    </tbody>
  </v-table>
</template>

<script>
import StudentService from "../services/studentService.js";

export default {
  name: "manageStudents",
  data() {
    return {
      students: []
    }
  },
  created() {
    this.getAllStudents();
  },
  methods: {
    addStudent() {
      this.$router.push('/addStudent');
    },
    getAllStudents() {
      StudentService.getAllStudents().then((response) => {
        this.students = response.data;
      })
    },
    deleteStudent(id) {
      StudentService.deleteStudent(id);
    }
  }
}
</script>

<style scoped>

</style>
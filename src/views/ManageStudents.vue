<template>
  <admin-navbar/>
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
      <td>{{ student.dob.slice(0,10)}}</td>
      <td>{{ student.joiningDate.slice(0,10) }}</td>
      <td>{{ student.gender }}</td>
      <td>{{ student.department }}</td>
      <td>{{ student.email }}</td>
      <td>
        <v-btn @click="deleteStudent(student.id)">Delete</v-btn>
      </td>
      <td>
        <v-btn @click="updateStudent(student)">Update</v-btn>
      </td>
    </tr>
    <v-btn variant="outlined" color="primary" @click="addStudent">add Student</v-btn>
    </tbody>
  </v-table>
</template>

<script>
import StudentService from "../services/studentService.js";
import AdminNavbar from "@/components/AdminNavbar";

export default {
  name: "manageStudents",
  components: {AdminNavbar},
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
    },
    updateStudent(student) {
      this.$router.push({
        name: "UpdateStudent",
        params: {
          id: student.id,
          firstName: student.firstName,
          lastName: student.lastName,
          dob: student.dob,
          joiningDate: student.joiningDate,
          gender: student.gender,
          department: student.department,
          email: student.email,
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
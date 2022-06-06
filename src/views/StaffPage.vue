<template>
  <h1>StaffPage</h1>
  <h1>Course Overview</h1>

  <v-table>
    <thead>

    </thead>
    <tbody>
    <tr v-for="department in departments" :key="department">
      <v-card @click="expand(department)">
        {{ department }}
      </v-card>
    </tr>
    </tbody>
  </v-table>
  <h1>Matching Students</h1>
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
      <td>{{ student.dob.slice(0, 10) }}</td>
      <td>{{ student.joiningDate.slice(0, 10) }}</td>
      <td>{{ student.gender }}</td>
      <td>{{ student.department }}</td>
      <td>{{ student.email }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
import studentService from "@/services/studentService";

export default {
  name: "StaffPage",
  data: () => ({
    departments: ['Computer Science', 'Mathematics', 'Engineering'],
    students: [],
  }),
  methods: {
    expand(department) {
      studentService.getStudentsByCourse(department).then((response) => {
        this.students = response.data;
      })
    }
  }

}
</script>

<style scoped>

</style>
<template>
  <h1>Manage Students</h1>

  <v-table>
    <thead>
    <th class="text-left">Student ID</th>
    <th class="text-left">Firstname</th>
    <th class="text-left">Lastname</th>
    <th class="text-left">DOB</th>
    <th class="text-left">E-Mail</th>
    <th class="text-left">Department</th>
    <th class="text-left">Gender</th>
    </thead>
    <tbody>
    <tr v-for="student in students" :key="student.id">
      <td>{{ student.id }}</td>
      <td>{{ student.firstName }}</td>
      <td>{{ student.lastName }}</td>
      <td>{{ student.dob }}</td>
      <td>{{ student.email }}</td>
      <td>{{ student.departement }}</td>
      <td>{{ student.gender }}</td>
    </tr>
    <v-btn variant="outlined" color="primary" @click="addStudent">add Student</v-btn>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "manageStudents",
  data() {
    return {
      students: [
        {
          id: 123,
          firstName: 'Pat',
          lastName: 'Weid',
          dob: '30/03/1990',
          email: 'pat@weid.com',
          departement: 'AI',
          gender: 'male'
        },
      ]
    }
  },
  methods: {
    addStudent() {
      this.$router.push('/addStudent');
    }
  }
}
</script>

<style scoped>

</style>
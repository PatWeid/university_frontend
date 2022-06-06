<template>
  <StaffNavbar/>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <h1>Department Overview</h1>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <h3>Departments - click to show students</h3>
  </v-container>

  <v-container>
  <v-table :show-expand="true">
    <tbody>
    <tr v-for="department in departments" :key="department">
      <td>
        <v-row>
          <v-col @click="expand(department)">
            {{ department }}
          </v-col>
        </v-row>
      </td>
    </tr>
    </tbody>
    <v-container>
    <v-btn @click="hide" variant="outlined" color="secondary" rounded="pill" :hidden="hideTable">Hide</v-btn>
    </v-container>
  </v-table>

  <v-container :hidden="hideTable">
    <StudentTable :students="students"/>
  </v-container>
  </v-container>
</template>

<script>
import studentService from "@/services/studentService";
import StaffNavbar from "@/components/StaffNavbar";
import StudentTable from "@/components/StudentTable";

export default {
  name: "StaffPage",
  components: {StudentTable, StaffNavbar},
  data: () => ({
    departments: ['Computer Science', 'Mathematics', 'Engineering'],
    students: [],
    hideTable: true,
  }),
  methods: {
    expand(department) {
      studentService.getStudentsByCourse(department).then((response) => {
        this.students = response.data;
      })
      this.hideTable = false;
    },
    hide() {
      this.hideTable = true;
    }
  }

}
</script>

<style scoped>

</style>
<template>
  <admin-navbar/>
  <h1>Manage Students</h1>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="3">
        <v-card title="Filter Department">
          <v-select :items="departments" label="Department" v-model="departmentFilter"></v-select>
          <v-btn @click="clearDepartmentFilter">Clear Filter</v-btn>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card title="Filter Semester">
          <v-select :items="semesters" label="Month" v-model="semesterFilter"></v-select>
          <v-btn @click="clearSemesterFilter">Clear Filter</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>


  <!--  <v-container>-->
  <!--    <v-row justify="space-around">-->
  <!--      <v-col cols="2">-->
  <!--        <p>Filter Department</p>-->
  <!--      </v-col>-->
  <!--      <v-col cols="2">-->
  <!--        <v-select :items="departments" label="Department" v-model="departmentFilter"></v-select>-->
  <!--      </v-col>-->
  <!--      <v-col cols="2">-->
  <!--        <v-btn @click="clearDepartmentFilter">Clear Filter</v-btn>-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--  </v-container>-->
  <!--  <v-container>-->
  <!--    <v-row justify="space-around">-->
  <!--      <v-col cols="2">-->
  <!--        <p>Filter Month</p>-->
  <!--      </v-col>-->
  <!--      <v-col cols="2">-->
  <!--        <v-select :items="semesters" label="Month" v-model="semesterFilter"></v-select>-->
  <!--      </v-col>-->
  <!--      <v-col cols="2">-->
  <!--        <v-btn @click="clearSemesterFilter">Clear Filter</v-btn>-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--  </v-container>-->
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
    <tr v-for="student in filteredStudents" :key="student.id">
      <td>{{ student.id }}</td>
      <td>{{ student.firstName }}</td>
      <td>{{ student.lastName }}</td>
      <td>{{ student.dob.slice(0, 10) }}</td>
      <td>{{ student.joiningDate.slice(0, 10) }}</td>
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
    <v-container>
      <v-row>
        <v-col>
          <v-btn variant="outlined" @click="addStudent">add Student</v-btn>
        </v-col>
      </v-row>
    </v-container>
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
      students: [],
      departmentFilter: '',
      semesterFilter: '',
      departments: ['Computer Science', 'Mathematics', 'Engineering'],
      semesters: ['Summer', 'Winter'],
    }
  },
  computed: {
    filteredStudents() {
      function mapSemsterFilter(semesterFilter) {
        if (semesterFilter === 'Summer') {
          return ['03', '04', '05', '06', '07', '08'];
        } else if (semesterFilter === 'Winter') {
          return ['09', '10', '11', '12', '01', '02'];
        } else {
          return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        }
      }

      const semesterMonths = mapSemsterFilter(this.semesterFilter);

      return this.students.filter(student => {
        const department = student.department;
        const studentMonth = student.joiningDate.split('-');
        return department.includes(this.departmentFilter) && semesterMonths.includes(studentMonth[1]);
      });
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
      alert('Student deleted');
      this.getAllStudents();
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
    },
    clearDepartmentFilter() {
      this.departmentFilter = '';
    },
    clearSemesterFilter() {
      this.semesterFilter = '';
    }
  }
}
</script>

<style scoped>

</style>
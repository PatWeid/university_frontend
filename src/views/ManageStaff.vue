<template>
  <admin-navbar/>
  <v-container>
    <h1>Manage Staff</h1>
  </v-container>
  <v-container>
  <v-table>
    <thead>
    <th class="text-left">Staff ID</th>
    <th class="text-left">Firstname</th>
    <th class="text-left">Lastname</th>
    <th class="text-left">DOB</th>
    <th class="text-left">Gender</th>
    <th class="text-left">E-Mail</th>
    </thead>
    <tbody>
    <tr v-for="staff in staff" :key="staff.id">
      <td>{{ staff.staffID }}</td>
      <td>{{ staff.firstName }}</td>
      <td>{{ staff.lastName }}</td>
      <td>{{ staff.dob.slice(0, 10) }}</td>
      <td>{{ staff.gender }}</td>
      <td>{{ staff.email }}</td>
      <td>
        <v-btn @click="deleteStaff(staff.id)">Delete</v-btn>
      </td>
      <td>
        <v-btn @click="updateStaff(staff)">Update</v-btn>
      </td>
    </tr>
    <v-container>
      <v-row>
        <v-col>
          <v-btn variant="outlined" @click="addStaff">add Staff</v-btn>
        </v-col>
      </v-row>
    </v-container>
    </tbody>
  </v-table>
  </v-container>
</template>

<script>
import AdminNavbar from "@/components/AdminNavbar";
import StaffService from "@/services/staffService";

export default {
  name: "ManageStaff",
  components: {AdminNavbar},
  created() {
    this.getAllStaff();
  },
  data() {
    return {
      staff: [],
    }
  },
  methods: {
    addStaff() {
      this.$router.push('/addStaff');
    },
    getAllStaff() {
      StaffService.getAllStaff().then((response) => {
        this.staff = response.data;
      })
    },
    deleteStaff(id) {
      StaffService.deleteStaff(id);
      alert('Staff deleted');
      this.getAllStaff();
    },
    updateStaff(staff) {
      this.$router.push({
        name: "UpdateStaff",
        params: {
          id: staff.id,
          staffID: staff.staffID,
          firstName: staff.firstName,
          lastName: staff.lastName,
          dob: staff.dob,
          gender: staff.gender,
          email: staff.email,
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
import axios from "axios";

const ENDPOINT_STAFF_URL='http://localhost:8080/staff';


class StaffService {
    getAllStaff() {
        return axios.get(ENDPOINT_STAFF_URL);
    }
    addStaff(id, staffID, firstName, lastName, dob, gender, email) {
        return axios.post(ENDPOINT_STAFF_URL, {id, staffID, firstName, lastName, dob, gender, email});
    }
    deleteStaff(id) {
        return axios.delete(ENDPOINT_STAFF_URL + "/" + id);
    }
    updateStaff(id, staffID, firstName, lastName, dob, gender, email) {
        return axios.put(ENDPOINT_STAFF_URL+ "/" + id, {id, staffID, firstName, lastName, dob, gender, email});
    }
}

export default new StaffService();
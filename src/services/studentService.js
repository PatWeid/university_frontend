import axios from "axios";

const ENDPOINT_STUDENTS_URL='http://localhost:8080/students';


class StudentService {
    getAllStudents() {
        return axios.get(ENDPOINT_STUDENTS_URL);
    }
    addStudent(id, firstName, lastName, dob, joiningDate, gender, department, email) {
        return axios.post(ENDPOINT_STUDENTS_URL, {id, firstName, lastName, dob, joiningDate, gender, department, email});
    }
    deleteStudent(id) {
        return axios.delete(ENDPOINT_STUDENTS_URL + "/" + id);
    }
}

export default new StudentService();
import axios from "axios";

const ENDPOINT_STUDENTS_URL='http://localhost:8080/students';


class StudentService {
    getAllStudents() {
        return axios.get(ENDPOINT_STUDENTS_URL);
    }
}

export default new StudentService();
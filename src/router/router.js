import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login";
import ManageData from "@/views/ManageData";
import ManageStudents from "@/views/ManageStudents";
import AddStudent from "@/views/AddStudent";
import UpdateStudent from "@/views/UpdateStudent";
import ManageStaff from "@/views/ManageStaff";
import AddStaff from "@/views/AddStaff";
import UpdateStaff from "@/views/UpdateStaff";
import StaffPage from "@/views/StaffPage";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/manageData",
        name: "ManageData",
        component: ManageData,
    },
    {
        path: "/manageStudents",
        name: "ManageStudents",
        component: ManageStudents,
    },
    {
        path: "/addStudent",
        name: "AddStudent",
        component: AddStudent,
    },
    {
        path: "/updateStudent",
        name: "UpdateStudent",
        component: UpdateStudent,
        props: true,
    },
    {
        path: "/manageStaff",
        name: "ManageStaff",
        component: ManageStaff,
    },
    {
        path: "/addStaff",
        name: "AddStaff",
        component: AddStaff,
    },
    {
        path: "/updateStaff",
        name: "UpdateStaff",
        component: UpdateStaff,
        props: true,
    },
    {
        path: "/staffPage",
        name: "staffPage",
        component: StaffPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
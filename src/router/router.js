import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login";
import ManageData from "@/views/ManageData";
import ManageStudents from "@/views/ManageStudents";
import AddStudent from "@/views/AddStudent";
import UpdateStudent from "@/views/UpdateStudent";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
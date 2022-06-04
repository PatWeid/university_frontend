import { createWebHistory, createRouter } from "vue-router";
import AllStudents from "@/views/AllStudents.vue";
import Login from "@/views/Login";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/allStudents",
        name: "AllStudents",
        component: AllStudents,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
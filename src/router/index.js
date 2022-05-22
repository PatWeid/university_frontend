import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AllStudents from "@/views/AllStudents.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/allStudents",
        name: "AllStudents",
        component: AllStudents,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
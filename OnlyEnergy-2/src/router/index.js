import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/livingroom", name: "Living Room", component: () => import("@/views/LivingRoom.vue") },
    { path: "/kitchen", name: "Kitchen", component: () => import("@/views/Kitchen.vue") },
    { path: "/bedroom", name: "Bedroom", component: () => import("@/views/Bedroom.vue") },
    { path: "/bathroom", name: "Bathroom", component: () => import("@/views/Bathroom.vue") },
    { path: "/office", name: "Office", component: () => import("@/views/Office.vue") },
    { path: "/documentation", name: "Documentation", component: () => import("@/views/Documentation.vue") },
    { path: "/help", name: "Help", component: () => import("@/views/Help.vue") },
    { path: "/profile", name: "Profile", component: () => import("@/views/Profile.vue") },
    { path: "/register", name: "Register", component: () => import("@/views/Register.vue") },
    { path: "/shopping-cart", name: "Shopping-Cart", component: () => import("@/views/ShoppingCart.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
       return { top: 0 }
    }
 })
 
 export default router;
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import Index from "@/layout/index.vue";
import Article from "@/views/article/index.vue";
import Tag from "@/views/tag/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Index,
        children: [
            {
                path: "",
                component: Home
            },
            {
                path: "/article/:id",
                component: Article,
                props: true
            },
            {
                path: "/tags/:name",
                component: Tag,
                props: true
            }
        ]
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

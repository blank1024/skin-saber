import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import Index from "@/layout/index.vue";
import Tag from "@/views/tag/index.vue";
import Blog from "@/views/blog/index.vue";
import Tags from "@/views/tags/index.vue";
import Archives from "@/views/archives/index.vue";
import DateFilter from '@/views/date/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Index,
        children: [
            {
                path: "",
                component: Home,
            },
            {
                path: "/article/:id",
                component: Blog,
                props: true,
            },
            {
                path: "/tags/:name",
                component: Tag,
                props: true,
            },
            {
                path: "/tags",
                component: Tags,
            },
            {
                path: "/archives",
                component: Archives,
            },
            {
                path: "/archive/:year/:month",
                component: DateFilter,
                props: true
            },
        ],
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

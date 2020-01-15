<template lang="pug">
    nav.navbar
        div.navbar_container.navbar_container_web
            router-link(to="/").brand Jawnwa's blog
            div.nav-list
                ul
                    li(v-for="(item, index) in nav" :key="index")
                        router-link(:to="item.to") {{ item.title }}
</template>

<script>
export default {
    data() {
        return {
            nav: [
                {
                    title: "首页",
                    to: "/"
                },
                {
                    title: "标签",
                    to: "/tag"
                },
                {
                    title: "存档",
                    to: "/archives"
                },
                {
                    title: "关于",
                    to: "/about"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    height: 62px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    .navbar_container {
        color: #fff;
        height: 100%;
        max-width: 1440px;
        margin: auto;
        padding: 0 20px;
        @include vc;
        justify-content: space-between;
        .brand {
            font-weight: bold;
        }
    }
}

.nav-list {
    ul {
        display: flex;
        list-style-type: none;
        li {
            a {
                font-weight: bold;
                text-decoration: none;
                display: block;
                padding: 20px;
                color: #fff;
            }
        }
    }
}
</style>
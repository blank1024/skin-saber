<!--
 * @description: 页面的主体
 * @since: 2019-11-24 21:37:34
 * @Author: jawnwa22
 * @LastEditors  : jawnwa22
 * @LastEditTime : 2020-01-14 23:22:08
 -->
<template lang="pug">
    div.v-application
        navbar.v-navbar
        header-banner.v-header
        main.v-content
            div.v-content__wrap
                div.container-fluid
                    div.container-left
                        router-view
                    div.container-right
                        side-bar
        v-footer.v-footer
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HeaderBanner from "@/components/Header.vue";
import VFooter from "@/components/Footer.vue";
import SideBar from "@/components/Sidebar.vue";
export default {
    components: {
        Navbar,
        HeaderBanner,
        VFooter,
        SideBar
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.v-application {
    // max-width: 1280px;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .v-content {
        flex: 1 0 auto;
        margin: 0 0 216px;
    }
    .v-content__wrap {
        padding: 0px;
        margin: 48px auto 0;
        max-width: 1280px;
    }
    .container-fluid {
        display: flex;
        .container-left {
            flex: 1 1 auto;
            padding: 0 16px;
        }
        .container-right {
            flex: 0 0 340px;
            padding: 0 16px;
            margin-left: 30px;
        }
    }
    .v-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
</style>
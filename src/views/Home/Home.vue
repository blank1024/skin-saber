<!--
 * @description: 博客首页
 * @since: 2019-11-24 20:44:51
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-12-03 23:50:54
 -->

<template lang="pug">
    div.home-page
        ArticleEnter
        div.pagination
            router-link.pagination__item.pagination--left(to="/") Prev
            div.spacer
            router-link.pagination__item.pagination--right(to="/") Next
</template>

<script>
import ArticleEnter from "./components/ArticleEnter.vue";
export default {
    components: {
        ArticleEnter
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.pagination {
    @include vc;
    padding: 24px 0;
    .pagination__item {
        line-height: 1.1;
        display: block;
        padding: 8px 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        &:hover {
            background: #f0f0f0;
        }
    }
}
</style>
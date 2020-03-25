<!--
 * @description: 博客首页
 * @since: 2019-11-24 20:44:51
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2020-03-25 11:00:20
 -->

<template lang="pug">
    div.home-page
        ArticleEnter(:article_list="article_list")
        div.pagination
            router-link.pagination__item.pagination--left(to="/" v-if="showPre") Prev
            div.spacer
            router-link.pagination__item.pagination--right(to="/" v-if="showNext") Next
</template>

<script>
import ArticleEnter from "@/components/article-enter";
export default {
    components: {
        ArticleEnter
    },
    data() {
        return {
            article_list: [],
            total: 0,
            page_size: 0,
            page_num: 0
        };
    }, 
    mounted() {
        this.getArticleList();
    },
    methods: {
        getArticleList() {
            this.$api.article.getArticleList().then( res => {
                this.article_list = res.result;
                this.total = res.total;
                this.page_size = res.page_size;
                this.page_num = res.page_num;
            })
        }
    },
    computed: {
        showNext() {
            return this.page_num * this.page_size < this.total;
        },
        showPre() {
            return this.page_num > 1;
        }
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
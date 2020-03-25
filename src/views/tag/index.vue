<!--
 * @Description: 搜索标签页面
 * @Date: 2020-03-24 19:29:48
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2020-03-25 11:45:30
 -->
<template lang="pug">
    div.tag-page
        h1.tag-title {{ name }} 标签
        article-enter(:article_list="article_list")
</template>

<script>
import ArticleEnter from "@/components/article-enter";
export default {
    components: {
        ArticleEnter
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            article_list: []
        };
    },
    mounted() {
        this.getArticleByTag();
    },
    methods: {
        getArticleByTag() {
            this.$api.tag.getArticleByTag({ tag_name: this.name }).then(res => {
                this.article_list = res.result;
            });
        }
    },
    watch: {
        '$route'(to, from) {
            this.getArticleByTag();
        }
    }
};
</script>

<style lang="scss" scoped>
.tag-title {
    font-size: 22px;
    margin-bottom: 24px;
}
</style>
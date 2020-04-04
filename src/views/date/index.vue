<!--
 * @Description: 
 * @Date: 2020-04-04 15:24:37
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2020-04-04 16:21:26
 -->
<template lang="pug">
    div.date-filter-page
        h1.date-title {{ year }} 年 {{ month }} 月 - 共 {{ total }} 篇文章
        article-enter(:article_list="article_list")
        
</template>

<script>
import ArticleEnter from '@/components/article-enter/index';
export default {
    components: {
        ArticleEnter
    },
    props: {
        year: {
            required: true
        },
        month: {
            required: true
        }
    },
    data() {
        return {
            article_list: [],
            total: null,
        }
    },
    mounted() {
        this.getBlogByDate();
    },
    methods: {
        getBlogByDate() {
            this.$api.article.getBlogByDate({year: this.year, month: this.month}).then( res => {
                this.article_list = res.result;
                this.total = res.total
            })
        }
    }
}
</script>
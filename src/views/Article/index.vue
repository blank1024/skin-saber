<template lang="pug">
    div.article
        h1.solo_h1 {{ article.title }}
        div.article__content(v-html="article.content" v-highlight)
</template>

<script>
export default {
    props: {
        id: {
            type: String
        }
    },
    data() {
        return {
            article: {}
        };
    },
    mounted() {
        this.getArticle();
    },
    methods: {
        getArticle() {
            this.$api.article.getArticle(this.id).then(res => {
                this.article = res;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.solo_h1 {
    padding-bottom: 0.3em;
    font-size: 1.7em;
    border-bottom: 1px solid #eee;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
}
.article__content {
    p {
        line-height: 1.5;
    }
}
</style>
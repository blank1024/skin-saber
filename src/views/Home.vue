<template lang="pug">
    article.article
        div.article__info
            div.article__info--left
                router-link(to="/").author
                    img.author__avatar(src="~@/assets/images/blogger_avatar.jpeg")
                    span.author__name jawnwa22
                span.split in
                span.tags
                    router-link(to="/") 1
                    router-link(to="/") 1
            div.article__info--right
                span.createTime 2018-08-22
        div.article__intro
        div.article__visit
</template>

<script>
export default {
    components: {}
};
</script>

<style lang="scss" scoped>
.article {
}
.article__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .article__info--left {
        @include vc;
    }
    .author {
        @include vc;
        color: #333;
    }
    .author__avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
    .author__name {
        margin-left: 10px;
        flex: auto;
    }
    .split {
        padding: 0 8px;
        flex: auto;
    }
    .tags {
        color: #333;
        a {
            color: inherit;
        }
    }
}
</style>

<template lang="pug">
    div
        article.article(v-for="item in article_list" :key="item._id")
            div.article__info
                div.article__info--left
                    router-link(to="/").author
                        img.author__avatar(src="~@/assets/images/blogger_avatar.jpeg")
                        span.author__name jawnwa22
                    span.split in
                    span.tags
                        router-link(to="/" v-for="tag in item.tag" :key="tag._id") {{ tag.name }}
                div.article__info--right
                    //- span.createTime {{ item.createdAt | formatTime }}
                    span.create-time {{ item.createdAt | parseTime( '{y}-{m}-{d} {h}:{i}') }}
            div.article__intro
                div.title
                    router-link(:to="{path:`/article/${item.id}`}") {{ item.title }}
                div.abstract(v-html="item.content")
            div.article__visit
                div.spacer
                router-link(:to="{path:`/article/${item.id}`}") 阅读全文

</template>

<script>
import { parseTime } from "@/utils";
import { formatTime } from "@/utils";
export default {
    props: {
        article_list: {
            type: Array,
            default: () => []
        }
    },
    components: {},
    data() {
        return {
            // article_list: []
        }
    },
    mounted() {
       
    },
    methods: {
         jumpToArticle(id) {
            this.$router.push(`/article/${id}`);
        }
    }
};
</script>

<style lang="scss" scoped>
.article {
    padding-bottom: 48px;
    border-bottom: 1px solid #e5e5e5;
}

.article + .article {
    margin-top: 48px;
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
.article__intro {
    word-break: break-word;
    .title {
        color: #404040;
        font-size: 24px;
        font-weight: bold;
        line-height: 33px;
        margin: 18px 0 10px;
        word-break: break-all;
    }
    .abstract {
        color: #818181;
    }
}
.article__visit {
    display: flex;

    margin-top: 16px;
    color: #333;
    font-size: 14px;
}
</style>

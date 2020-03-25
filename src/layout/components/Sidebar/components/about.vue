<template lang="pug">
    side-item(title="关于博主")
        div.user
            img.blogger-avatar(src="~@/assets/images/blogger_avatar.jpeg")
            div.user-info
                div.item
                    router-link(to="/") 55
                        span.text 文章
                div.item
                    router-link(to="/") 222
                        span.text 评论
                div.item 60000
                        span.text 浏览
                div.item 1
                        span.text 当前浏览
</template>

<script>
import SideItem from "./Item.vue";
export default {
    components: {
        SideItem
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    justify-content: space-between;
    .blogger-avatar {
        height: 80px;
        width: 80px;
        border-radius: 5px;
        display: block;
    }
    .user-info {
        .item {
            font-size: 14px;
            color: #aaa;
            a {
                color: black;
                text-decoration: none;
                &:hover {
                    color: #d6555f !important;
                }
            }
            .text {
                color: #aaa;
                margin-left: 4px;
            }
        }
    }
}
</style>
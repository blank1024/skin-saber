<template lang="pug">
    aside
        section.sidebar_container
            div.header 
                span 关于博主
            main.content.user
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

<style lang="scss" scoped>
.sidebar_container {
    flex: 0 0 340px;
    margin-left: 30px;
    .header {
        border-bottom: 1px solid rgba(0, 0, 0, 0.0785);
        span {
            display: table;
            position: relative;
            font-size: 18px;
            color: rbga(0, 0, 0, 0.8);
            padding: 0 0 13px;
            font-weight: bold;
            &:after {
                content: "";
                position: absolute;
                bottom: -1px;
                left: 0;
                right: 0;
                height: 1px;
                background: #2f2f2d;
            }
        }
    }
    .content {
        margin-top: 24px;
    }
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
}
</style>
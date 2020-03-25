<template lang="pug">
    section.sidebar_container
        div.header
            span {{ title }}
        main.content 
            slot
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "title"
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar_container {
    flex: 0 0 340px;
    &:not(:first-child) {
        .header {
            padding-top: 40px;
        }
    }

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
    
}
</style>
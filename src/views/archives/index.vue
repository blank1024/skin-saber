<!--
 * @Description: 
 * @Date: 2020-03-31 00:11:05
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2020-03-31 00:43:57
 -->
<template lang="pug">
    div.archive-page
        h1.archive-title 存档 - 共 {{ total }} 篇文章
        div.archive-content
            router-link.item(
                v-for="(item, index) in archives"
                :key="index"
                :to="`/archive/${item.year}/${item.month}`"
            ) {{item.year}} 年 {{item.month}}月 ({{item.count}})
                
</template>

<script>
export default {
    data() {
        return {
            archives: [],
            total: 0
        };
    },
    mounted() {
        this.getArchive();
    },
    methods: {
        getArchive() {
            this.$api.article.getArchive().then(res => {
                this.archives = res.result;
                this.total = res.total;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.archive-title {
    font-size: 22px;
    margin-bottom: 24px;
}

.archive-content {
    .item {
        display: inline-block;
        width: 30%;
        margin-right: 2%;
        margin-bottom: 2%;
        height: 100px;
        padding: 12px;
        border-radius: 2px;
        transition: all 0.4s;
        transform: translateZ(0);
        color: rgba(0, 0, 0, 0.6);
        border: 1px solid #ececec;
        vertical-align: top;
        box-sizing: border-box;
        z-index: 1;
        font-size: 14px;
        &:hover {
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
            border-color: currentColor;
        }
    }
}
</style>
<!--
 * @Description: 标签墙
 * @Date: 2020-03-29 12:31:28
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2020-03-29 13:35:29
 -->
<template lang="pug">
    div.tags-page
        h1.tag-title 共 {{tags.length}} 标签
        div.tags
            router-link(
                class="item"
                v-for="tag in tags"
                :key="tag.id"
                :to="`/tags/${tag.name}`"
            ) {{ tag.name }}（{{tag.count}}）
</template>

<script>
export default {
    data() {
        return {
            tags: []
        };
    },
    mounted() {
        this.getTags();
    },
    methods: {
        getTags() {
            this.$api.tag.getTags().then(res => {
                this.tags = res.result;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.tag-title {
    font-size: 22px;
    margin-bottom: 24px;
}

.item {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    display: inline-block;
    padding: 5px 10px;
    line-height: 22px;
    border-radius: 2px;
    margin-bottom: 6px;
    margin-right: 6px;
    border: 1px solid #ececec;
    transition: all .4s;
    &:hover {
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
        border-color: currentColor;
    }
}
</style>
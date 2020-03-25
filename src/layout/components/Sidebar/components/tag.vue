<template lang="pug">
    side-item(title="标签")
        div.tags
            router-link(
                v-for="tag in tag_list"
                :key="tag._id"
                :to="`/tags/${tag.name}`"
                class="item"
            ) {{ tag.name }}
</template>

<script>
import SideItem from "./Item.vue";
export default {
    components: {
        SideItem
    },
    data() {
        return {
            tag_list: []
        };
    },
    mounted() {
        this.getTagList();
    },
    methods: {
        getTagList() {
            this.$api.tag.getTagList().then(res => {
                this.tag_list = res.result;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
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
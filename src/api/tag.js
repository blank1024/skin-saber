/**
 * @Description: 标签API
 * @Date: 2020-01-16 00:23:14
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2020-03-25 11:10:53
 */

import axios from "@/plugins/axios";

const tag = {
    getTagList({
        page_num,
        page_size
    } = {}) {
        return axios.get("/tag/all", {
            params: {
                page_num,
                page_size
            }
        })
    },
    /**
     * @description: 通过标签名获取文章列表
     * @param {type} 
     * @return: 
     */
    getArticleByTag({
        page_num,
        page_size,
        tag_name
    } = {}) {
        return axios.get(`/tags/${tag_name}`, {
            params: {
                page_num,
                page_size
            }
        })
    }
}

export default tag;
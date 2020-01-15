/**
 * @Description: 标签API
 * @Date: 2020-01-16 00:23:14
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2020-01-16 00:37:18
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
    }
}

export default tag;
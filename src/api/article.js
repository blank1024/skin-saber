import axios from "@/plugins/axios";

const article = {
    getArticleList({page_num = 1, page_size = 7} = {}) {
        return axios.get("/article/list", {
            params: {
                page_num,
                page_size
            }
        })
    }
}

export default article;
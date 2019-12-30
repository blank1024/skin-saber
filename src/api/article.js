import axios from "@/plugins/axios";

const article = {
    getArticleList({page_num = 1, page_size = 7} = {}) {
        return axios.get("/article/list", {
            params: {
                page_num,
                page_size
            }
        })
    },
    getArticle(id) {
        return axios.get(`/article/${id}`);
    }
}

export default article;
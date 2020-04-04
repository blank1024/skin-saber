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
    },
    getArchive() {
        return axios.get('/article/archives');
    },
    getBlogByDate({ year, month, page_num, page_size }) {
        return axios.get(`/article/archive/${year}/${month}`, {
            params: {
                page_num,
                page_size
            }
        });
    }
}

export default article;
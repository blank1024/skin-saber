"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL: process.env.VUE_APP_BASEURL || process.env.apiUrl || "",
    timeout: 60 * 1000 // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        let code = response.data.code;
        switch (code) {
            case 0:
                if (response.data.data) {
                    return response.data.data;
                }
                return response;
            default:
                break;
        }
        return Promise.reject();
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default _axios;

import axios from "axios";
import store from "@/store";
import { API_BASE_URL } from "@/utils/constrant";

const httpClient = axios.create({
    // baseURL: process.env.API_BASE_URL,
    baseURL: API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=utf-8"
    }
});
httpClient.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const loadFunction = config => {
    store.commit("display/setLoading", true);
    return config;
};

const finishFunction = response => {
    store.commit("display/setLoading", false);
    return response;
};

const errorFunction = error => {
    store.commit("display/setLoading", false);
    return Promise.reject(error);
};

httpClient.interceptors.request.use(loadFunction);
httpClient.interceptors.response.use(finishFunction, errorFunction);

export default httpClient;

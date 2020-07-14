import axios from "axios";
import { API_BASE_URL } from "./constrant";

const httpClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=utf-8"
    }
});

export default httpClient;

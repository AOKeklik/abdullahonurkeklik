import axios from "axios"
import { API } from "./config"


const axiosClient = axios.create({
    baseURL: API,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
})
axiosClient.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return config;
})

export {axios, axiosClient}
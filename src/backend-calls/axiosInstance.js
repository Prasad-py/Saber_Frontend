import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: "http://localhost:8080/",
    headers: {
        Authorization: ""
    }
})

export const axiosAuthInstance = axios.create ({
    baseURL: "http://localhost:8080/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Credentials": "*",
        'Access-Control-Allow-Origin': '*'
    }
})


export default axiosInstance
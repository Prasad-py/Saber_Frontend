import axiosInstance, {axiosAuthInstance} from './axiosInstance';

export const login = async (email, password) => {
    const data = {
        "email": email,
        "password": password 
    }
    try {
        const res = await axiosInstance ({
            url: "/api/login",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}

export const verifyToken = async () => {
    try {
        const res = await axiosAuthInstance ({
            url: "/api/verifyToken",
            method:"get",
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}

export const signup = async (name, email, password, confirmPassword) => {
    const data = {
        "email": email,
        "name": name,
        "confirmPassword": confirmPassword,
        "password": password 
    }
    try {
        const res = await axiosInstance ({
            url: "/api/signup",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}

export const verifyEmail = async (email, otp) => {
    const data = {
        email: email,
        otp: otp
    }
    try {
        const res = await axiosAuthInstance ({
            url: "/api/verifyEmail",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}

export const logOut = async () => {
    try {
        const res = await axiosAuthInstance ({
            url: "/api/logout",
            method:"post"
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}
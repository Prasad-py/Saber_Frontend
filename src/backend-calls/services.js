import axiosInstance, {axiosAuthInstance} from './axiosInstance';

export const emailGen = async (prevEmail, bulletPoints, isSales, maxLength, useSeo, tone) => {
    const data = {
        prev_email: prevEmail,
        bullet_points: bulletPoints,
        is_sales_email: isSales,
        max_length: maxLength,
        use_SEO: useSeo,
        tone: tone
    }
    try {
        const res = await axiosAuthInstance ({
            url: "/api/email-gen",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return "Some Error Occurred"
    }
}

export const blogArticle = async (writeUpType, title, description, keywords, maxLength, useSeo, tone, url1, url2, url3) => {
    const data = {
        writeup_type: writeUpType,
        title: title,
        description: description,
        keywords: keywords,
        max_length: maxLength,
        use_SEO: useSeo,
        tone: tone,
        url1: url1,
        url2: url2,
        url3: url3
    }
    try {
        const res = await axiosAuthInstance ({
            url: "/api/blog-article",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return "Some Error Occurred"
    }
}

export const tweetGen = async (title) => {
    const data = {
        tweetIdeas: title
    }
    try {
        const res = await axiosAuthInstance ({
            url: "/api/tweet-ideas",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return "Some Error Occurred"
    }
}

export const coldEmail = async (companyName, coldEmails) => {
    const data = {
        companyName: companyName,
        coldEmails: coldEmails,
    }
    try {
        const res = await axiosAuthInstance ({
            url: "/api/cold-emails",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return "Some Error Occurred"
    }
}

export const socialAd = async (socialMedia) => {
    const data = {
        socialMedia: socialMedia
    }
    try {
        const res = await axiosAuthInstance ({
            url: "/api/social-media",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}

export const codeGen = async (purpose, language) => {
    const data = {
        "purpose": purpose,
        "language": language
    }
    try {
        const res = await axiosAuthInstance ({
            url: "/api/code-gen",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}

export const askMeAnything = async (text) => {
    const data = {
        text
    }
    try {
        const res = await axiosAuthInstance ({
            url: "/api/ask-me-anything",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return "Some Error Occurred"
    }
}

export const paymentSuccessRedirect = async(session_id) => {
    try {
        const res = await axiosAuthInstance ({
            url: "/api/paymentSuccessRedirect",
            method:"post",
            data: {
                "session_id": session_id
            }
        })
        return res.data;
        
    } catch (error) {
        return "Some Error Occurred"
    }
}
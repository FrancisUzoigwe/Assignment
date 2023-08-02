import axios from "axios"


const Url: string = "http://localhost:3200/api/v1"

export const registerAuthor = async (data: any) => {
    try {
        const config: {} = {
            "content-type": "multipart/form-data"
        }
        return await axios.post(`${Url}/register-authors`, data, config).then((res: any) => {
             return data.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const signinAuthor = async (data: any) => {
    try {
        return await axios.post(`${Url}/signin-authors`, data).then((res: any) => {
            return data.data
        })
    } catch (error) {
        console.log(error)
    }
}
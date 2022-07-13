import axios from "axios"
import jwt_decode from "jwt-decode";
import apiUrl from "./Context/constance"

const refreshToken = async () => {
    try {
        const res = await axios.post(`/v1/auth/refresh`, {
            withCredentials: true
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

const createAxios = (user, dispatch, stateSuccess) => {
    const newInstance = axios.create()
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date()
            const decodedToken = jwt_decode(user?.accessToken)
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken()
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken
                }
                dispatch(stateSuccess(refreshUser))
                config.headers['token'] = `Bearer ${data.accessToken}`
            }
            return config
        },
        (err) => Promise.reject(err))
    return newInstance
}

export default createAxios

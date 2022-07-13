import axios from 'axios'
import apiUrl from '../Context/constance'
import {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed
} from '../Redux/authSlice'

import {
    getAllUserStart,
    getAllUserSuccess,
    getAllUserFailed,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailed
} from '../Redux/usersSlice'

const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(`/v1/auth/login`, user)
        dispatch(loginSuccess(res.data))
        navigate("/home")
    } catch (error) {
        dispatch(loginFailed())
    }
}

const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post(`/v1/auth/register`, user)
        dispatch(registerSuccess())
        navigate("/login")
    } catch (error) {
        dispatch(registerFailed())
    }
}

const getAllUser = async (dispatch, accessToken, id) => {
    dispatch(getAllUserStart())
    try {
        const res = await axios.get(`/v1/user/${id}`, {
            headers: { token: `Bearer ${accessToken}` }
        })
        dispatch(getAllUserSuccess(res.data))
    } catch (error) {
        dispatch(getAllUserFailed())
    }
}

const deleteUser = async (dispatch, accessToken, id, axiosJwt) => {
    dispatch(deleteUserStart())
    try {
        const res = await axiosJwt.delete(`/v1/user/${id}`, {
            headers: { 
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(deleteUserSuccess(res.data))
    } catch (err) {
        dispatch(deleteUserFailed(err.response.data))
    }
}

const logoutUser = async (dispatch, id, navigate, accessToken, axiosJwt) => {
    dispatch(logoutStart())
    try {
        await axiosJwt.post(`/v1/auth/logout`, id, {
            headers: { token: `Bearer ${accessToken}`}
        })
        dispatch(logoutSuccess())
        navigate("/login")
    } catch (error) {
        dispatch(logoutFailed(error))
    }
}

export { loginUser, registerUser, getAllUser, deleteUser, logoutUser }

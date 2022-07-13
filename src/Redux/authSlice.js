import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: undefined,
            isFeching: true,
            error: false,
        },
        register:{
            isFeching: false,
            error: false,
            success: false,
        }
    },
    reducers: {
        // Login
        loginStart: (state) => {
            state.login.isFeching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFeching = false
            state.login.error = false
            state.login.currentUser = action.payload
        },
        loginFailed: (state) => {
            state.login.isFeching = false
            state.login.error = true
        },

        //Logout
        logoutStart: (state) => {
            state.login.isFeching = true
        },
        logoutSuccess: (state) => {
            state.login.isFeching = false
            state.login.error = false
            state.login.currentUser = null
        },
        logoutFailed: (state) => {
            state.login.isFeching = false
            state.login.error = true
        },

        // Register
        registerStart: (state) => {
            state.register.isFeching = true
        },
        registerSuccess: (state) => {
            state.register.isFeching = false
            state.register.error = false
            state.register.success = true
        },
        registerFailed: (state) => {
            state.register.isFeching = false
            state.register.error = true
            state.register.success = false
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
} = authSlice.actions

export default authSlice.reducer

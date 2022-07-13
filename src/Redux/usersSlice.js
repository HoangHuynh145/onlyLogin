import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'user',
    initialState: {
        users: {
            allUser: null,
            isFeching: false,
            error: false
        },
        messages: ''
    },
    reducers: {
        // Get User
        getAllUserStart: (state) => {
            state.users.isFeching = true
        },
        getAllUserSuccess: (state, action) => {
            state.users.isFeching = false
            state.users.error = false
            state.users.allUser = action.payload
        },
        getAllUserFailed: (state) => {
            state.users.isFeching = false
            state.users.error = true
        },

        // Delete user 
        deleteUserStart: (state) => {
            state.users.isFeching = true
        }, 
        deleteUserSuccess: (state, action) => {
            state.users.isFeching = false
            state.users.error = false
            state.messages = action.payload
        },
        deleteUserFailed: (state, action) => {
            state.users.isFeching = false
            state.users.error = true
            state.messages = action.payload
        }
    }
})

export const {
    getAllUserStart,
    getAllUserSuccess,
    getAllUserFailed,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailed
} = usersSlice.actions
export default usersSlice.reducer

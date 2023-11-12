import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    email: "",
    fullname: "",
    token: "",
    username: "",
    id: "",

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action.payload.user)
            //    state.user =action.payload.data
            state.token = action.payload.token
            state.id = action.payload.user.id
            state.username = action.payload.user.username
            state.fullname = action.payload.user.fullname
            state.email = action.payload.user.email

        },
        logintoken: (state, action) => {
            console.log(action.payload)
            //    state.user =action.payload.data
            state.token = action.payload.token
            state.id = action.payload.id
            state.username = action.payload.username
            state.fullname = action.payload.fullname
            state.email = action.payload.email

        },
        logoutRedux: (state, action) => {
            state._id = ""
            state.token = ''
            state.username = ''
            state.email = ''
            state.fullname = ''
            Cookies.remove('token')
        },
    }
})

export const { loginRedux, logoutRedux, logintoken } = userSlice.actions


export default userSlice.reducer
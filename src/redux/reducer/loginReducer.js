import { createSlice } from "@reduxjs/toolkit"

export const loginReducer = createSlice({
    name: "signIn",
    initialState: {
        connected : false,
        token : ""
    },
    reducers : {
        getLoggedIn : (state, action) => {
            state.connected = true 
            state.token = action.payload
            localStorage.setItem("token", action.payload)
            localStorage.setItem("date", new Date())
        },
        getLoggedOut : (state) => {
            state.connected = false
            state.token = ""
            state.date = ""
            localStorage.removeItem("token")
            localStorage.removeItem("date")
            localStorage.removeItem("firstName")
        },
        stayLogged : (state) => {
            state.connected = true
            state.token = localStorage.getItem("token")
            state.date = localStorage.setItem("date", new Date())
        }
    }
})

export const {getLoggedIn, getLoggedOut, stayLogged } = loginReducer.actions
export default loginReducer.reducer
import { createSlice } from "@reduxjs/toolkit"

export const userReducer = createSlice({
    name: "profile",
    initialState: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        createdAt: "",
        updatedAt: ""
    },
    reducers : {
        getDataProfile : (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
            localStorage.setItem("firstName", action.payload.firstName)
        },
        updateDataProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.updatedAt = action.payload.updatedAt
            localStorage.setItem("firstName", action.payload.firstName)
        },
        deleteDataProfile : (state) => {
            console.log(state);
            state.id = ""
            state.email = ""
            state.firstName = ""
            state.lastName = ""
            state.createdAt = ""
            state.updatedAt = ""
            localStorage.removeItem("firstName")
        }
    }
})
export const {getDataProfile, updateDataProfile, deleteDataProfile } = userReducer.actions
export default userReducer.reducer 
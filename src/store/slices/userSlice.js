import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null, 
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        setUser(state, { payload }) {
            console.log(payload);
            return {
                ...state, 
                email: payload.email,
                token: payload.token,
                id: payload.id
            }
        }, 
        removeUser(state) {
            return {
                ...state, 
                email: null, 
                token: null, 
                id: null 
            }
        }, 
    }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer
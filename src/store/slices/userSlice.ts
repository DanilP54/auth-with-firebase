import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null, 
    idToken: null,
    refreshToken: null,
    expiresIn: null,
    localId: null
}

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        setUser(state, { payload }) {
            return {
                ...state, 
                email: payload.email,
                idToken: payload.idToken,
                refreshToken: payload.refreshToken,
                expiresIn: payload.expiresIn,
                localId: payload.localId
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
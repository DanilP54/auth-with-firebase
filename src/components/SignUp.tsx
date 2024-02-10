import React from "react";
import Form from "./Form"
import axios from "axios"
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

const API_KEY = 'AIzaSyBdbItP8k8mmgJ42C_NiEaOvMrfpReaaC0'




const SignUp = () => {

    const dispatch = useAppDispatch()
    let error = ''


    const signUp = async (email: string, password: string) => {
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                email,
                password,
                returnSecureToken: true,
            })
            

            dispatch(setUser({
                email: response.data.email,
                localId: response.data.localId,
                idToken: response.data.idToken,
                refreshToken: response.data.refreshToken,
                expiresIn: response.data.expiresIn
            }))

        } catch (err) {
            switch (err.response.data.error.message) {
                case 'INVALID_EMAIL':
                    error = err.response.data.error.message
                    break
                case 'OPERATION_NOT_ALLOWED':
                    error = err.response.data.error.message
                    break
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    error = err.response.data.error.message
                    break
            }

        }
    }


    return (
        <>
            <Form mode="Sign Up" handleClick={signUp} />
        </>


    )
}

export default SignUp;
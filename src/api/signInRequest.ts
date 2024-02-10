import { useAppDispatch } from "../hooks/redux-hooks"
import { setUser } from "../store/slices/userSlice"

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
const dispatch = useAppDispatch()

export const signInRequest = async (email: string, password: string) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })

        const data = await response.json()

        if(!response.ok) {
            throw data
        }

        dispatch(setUser({
            email: data.email,
            localId: data.localId,
            idToken: data.idToken,
            refreshToken: data.refreshToken,
            expiresIn: data.expiresIn
        }))
    } catch(responseError) {
        switch (responseError.message) {
            case 'INVALID_EMAIL':
                alert(responseError.message)
                break;
            case 'EMAIL_NOT_FOUND':
                alert(responseError.message)
                break;
            case 'INVALID_PASSWORD':
                alert(responseError.message)
                break;
            case 'USER_DISABLED':
                alert(responseError.message)
                break;
            default:
                error = 'Unknow error'
        }
    }
}
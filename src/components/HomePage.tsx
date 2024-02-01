import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom"
import { removeUser } from "../store/slices/userSlice"
import { useAppDispatch } from "../hooks/redux-hooks"

const HomePage = () => {
    const dispatch = useAppDispatch()
    const {isAuth, email, token, id} = useAuth()

    return isAuth 
        ? (
            <div>
                <h1>Welcome</h1>
                <button onClick={() => dispatch(removeUser())}>Log out {email}</button>
            </div>
        )
        : (
            <Navigate to='/login' />
        )
}

export default HomePage
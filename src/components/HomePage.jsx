import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom"
import { removeUser } from "../store/slices/userSlice"

const HomePage = () => {
    const dispatch = useDispatch()
    const {isAuth, email, token, id} = useAuth()

    
    // useEffect(() => {
    //     navigate('/login')
    // }, [])
    return isAuth 
        ? (
            <div>
                <p>Ваша почта: {email}</p>
                <p>Ваша почта: {token}</p>
                <p>Ваша почта: {id}</p>
                <button onClick={() => dispatch(removeUser())}>Log out</button>
            </div>
        )
        : (
            <Navigate to='/login' />
        )
}

export default HomePage
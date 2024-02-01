import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form"
import { useDispatch } from "react-redux"
import { setUser } from "../store/slices/userSlice"



const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid,
                }))
                navigate('/')
            })
            .catch(() => {
                alert('Неправильный пароль или почта')
            }) 

    }
    return (
        <div>
            <h1>Login</h1>
            <Form title='Sign In' handleClick={handleLogin} />
            <p>Or <Link to='/register'>Register</Link></p>
        </div>
    )
}

export default LoginPage
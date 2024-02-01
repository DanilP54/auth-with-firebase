import { Link, useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form"
import { useDispatch } from "react-redux"
import { setUser } from "../store/slices/userSlice";


const RegisterPage = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res)
                return res
                
            })
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                }))
                navigate('/')
            })
            .catch(console.error)
    }
    return (
        <div>
            <h1>
                Register
            </h1>
            <Form title='Sign Up' handleClick={handleRegister} />
            <p>Already have an account?<Link to='/login'>Sign in</Link></p>
        </div>
    )
}

export default RegisterPage
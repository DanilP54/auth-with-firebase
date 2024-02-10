import React, { useEffect } from "react"
import Form from "./Form"
import { useAuthFirebase } from "../hooks/useAuthFirebase"
import { useNavigate } from "react-router-dom"
import { setUser } from "../store/slices/userSlice"
import { useAppDispatch } from "../hooks/redux-hooks"
import myGif from "../assets/images/gifka.gif"
import SignIn from "./SignIn"
import { Link } from "react-router-dom"



export const DEFAULT_MODE: 'Sign In' = 'Sign In'
export const REGISTER_MODE: 'Sign Up' = 'Sign Up'
export type Mode = typeof REGISTER_MODE | typeof DEFAULT_MODE



const LoginPage = () => {
    
    let [mode, setMode] = React.useState<Mode>(DEFAULT_MODE)
    let [error, setError] = React.useState(false)
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    return (
        <div className='w-[500px] h-[500px] flex flex-col backdrop-blur-2xl p-8 rounded-sm overflow-hidden relative z-10'>
            <img src={myGif} alt="gif" className='absolute top-0 w-[500px] h-[500px] z-0 left-0 blur-3xl opacity-30'/>
            <h1 className='font-Holtwood text-3xl text-center text-yellow-800'>Sign In</h1>
            <p className='font-Holtwood text-lg text-center text-yellow-800'>if you want to see the meme</p>
            <SignIn />
            <span className='text-center font-Blinker text-black opacity-80 text-base mt-3'>
                        Or <Link to='/register'>Sign Up</Link>   
                    </span>
        </div>
    )
}

export default LoginPage;
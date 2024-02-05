import React from "react"
import Form from "./Form"
import { useAuthFirebase } from "../hooks/useAuthFirebase"
import { useNavigate } from "react-router-dom"
import { setUser } from "../store/slices/userSlice"
import { useAppDispatch } from "../hooks/redux-hooks"
import ThemeProviderComponents from "../theme-provider/ThemeProviderComponent"


export const DEFAULT_MODE: 'Sign In' = 'Sign In'
export const REGISTER_MODE: 'Sign Up' = 'Sign Up'
export type Mode = typeof REGISTER_MODE | typeof DEFAULT_MODE

const FormContainer = () => {
    
    let [mode, setMode] = React.useState<Mode>(DEFAULT_MODE)
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleClick = (email: string, password: string, mode: Mode) => {
        useAuthFirebase(email, password, mode)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                }))
                navigate('/')
            })
            .catch(error => {
                console.log(error.code);

            })
    }
    
    return (
        <div className='w-[500px] h-[500px] flex flex-col backdrop-blur-2xl p-8 rounded-sm overflow-hidden'>
            
            <h1 className='font-Holtwood text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500'>{mode}</h1>
            <Form mode={mode} handleClick={handleClick} />
            {
                mode === DEFAULT_MODE
                    
                    ? <span className='text-center font-Blinker text-black opacity-80 text-base mt-3'>
                        Or&nbsp; 
                        <span 
                            onClick={() => setMode(mode === DEFAULT_MODE ? REGISTER_MODE : DEFAULT_MODE)}
                            className='hover:cursor-pointer hover:underline'
                            >&nbsp;{REGISTER_MODE}
                        </span>
                    </span>
                    
                    : <span className='text-center font-Blinker text-black opacity-80 text-base mt-3'>
                        Already have account?&nbsp; 
                        <span 
                            onClick={() => setMode(mode === DEFAULT_MODE ? REGISTER_MODE : DEFAULT_MODE)}
                            className='hover:cursor-pointer hover:underline'
                            >&nbsp;{DEFAULT_MODE}
                        </span>
                    </span>
            }

        </div>
    )
}

export default FormContainer
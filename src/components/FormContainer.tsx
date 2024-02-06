import React from "react"
import Form from "./Form"
import { useAuthFirebase } from "../hooks/useAuthFirebase"
import { useNavigate } from "react-router-dom"
import { setUser } from "../store/slices/userSlice"
import { useAppDispatch } from "../hooks/redux-hooks"
import myGif from "../assets/images/gifka.gif"


export const DEFAULT_MODE: 'Sign In' = 'Sign In'
export const REGISTER_MODE: 'Sign Up' = 'Sign Up'
export type Mode = typeof REGISTER_MODE | typeof DEFAULT_MODE

const FormContainer = () => {
    
    let [mode, setMode] = React.useState<Mode>(DEFAULT_MODE)
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleClick = (email: string, password: string, mode: Mode, setLoading: (arg: boolean) => void) => {
        useAuthFirebase(email, password, mode)
            .then(({ user }) => {
                setLoading(false)
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                }))
                navigate('/')
            })
            .catch(error => {
                setLoading(false)
                console.log(error.code);

            })
    }
    
    return (
        <div className='w-[500px] h-[500px] flex flex-col backdrop-blur-2xl p-8 rounded-sm overflow-hidden relative z-10'>
            <img src={myGif} alt="gif" className='absolute top-0 w-[500px] h-[500px] z-0 left-0 blur-3xl opacity-30'/>
            <h1 className='font-Holtwood text-3xl text-center text-yellow-800'>{mode}</h1>
            <p className='font-Holtwood text-lg text-center text-yellow-800'>if you want to see the meme</p>
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
import React, { useState } from "react"
import {Spiner} from "./spiner/Spiner";
import {Mode} from "./LoginPage"
// import { useForm, SubmitHandler } from "react-hook-form"

interface FormProps  {
    mode: 'Sign In' | 'Sign Up'
    handleClick: (email: string, password: string) => void
}
type StateType = {
    email: string,
    password: string
}


const Form: React.FC<FormProps> = ({ mode, handleClick }) => {
    
    // const [isLoading, setLoading] = useState(false)
    const [state, setState] = useState<StateType>({
        email: '',
        password: ''
    })
    const [error,setError] = useState('')
    const [showType, setShowType] = useState('password')
 
    function generatePassword() {
        
        const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        let value = '';

        for (let i = 0; i < 8; i++) {
            const charTypes = [rand(48, 57), rand(65, 90), rand(97, 122)];
            const randomCharCode = charTypes[rand(0, 2)];
            value += String.fromCharCode(randomCharCode);
        }

        function rand(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (pattern.test(value)) {
            setShowType('text')
            setState({
                ...state, 
                password: value
            })
        }
    }
    const handleSubmit = () => {
        handleClick(state.email, state.password)
    }
    
    function changeState(e: React.InvalidEvent<HTMLInputElement>) {
        setState({
            ...state,
            [e.target.type]: e.target.value
        })
    }
    
    
    
    return (
        <>
            <form className='mt-20 flex flex-col gap-9'>
                <div
                    className='group relative h-10 w-full after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[1px] after:opacity-80 after:w-full'>
                    <input
                        required={true}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        id='input-email'
                        type='email'
                        name={'email'}
                        placeholder='Email'
                        value={state.email}
                        className='bg-transparent outline-none w-full h-full border-none border-b-black placeholder:text-sm placeholder:text-gray-900 placeholder:opacity-80'
                        onChange={(e) => changeState(e)}
                        autoComplete='off'
                    />
                    <label htmlFor='input-email'
                           className='absolute -top-5  left-0 font-Blinker font-bold opacity-80 transition-[top] duration-200'>Email</label>
                    {/*{*/}
                    {/*    <span className='absolute -top-[60px] font-Blinker rounded-sm font-bold text-yellow-900 bg-red-900 p-1 left-1/2 transform -translate-x-1/2'>Invalid message or password</span>*/}
                    {/*}*/}
                </div>
                <div
                    className='group relative h-10 w-full after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[1px] after:border-black after:opacity-80 after:w-full'>
                    <input
                        required={true}
                        minLength={6}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        id='input-password'
                        type={showType}
                        name={showType}
                        value={state.password}
                        placeholder='Password'
                        className='bg-transparent outline-none w-2/3 h-full placeholder:text-sm placeholder:text-gray-900 placeholder:opacity-80'
                        onChange={(e) => changeState(e)}
                        autoComplete='off'
                    />
                    <label htmlFor='input-password'
                           className='absolute -top-5 left-0 font-Blinker font-bold opacity-80'>Password</label>
                    <button type='button' onClick={generatePassword} className='cursor-pointer font-Blinker absolute top-2 right-0 hover:underline'>Generate password?
                    </button>
                </div>
                <button
                    type='button'
                    className='h-11 border-2 border-black font-Blinker font-bold text-sm shadow-lg shadow-blue-500/10  bg-orange-700 opacity-70  hover:bg-orange-900 transition duration-300'
                    onClick={handleSubmit}
                >
                    {/* {
                        isLoading ? <Spiner/>
                            : mode.toUpperCase()
                    } */}
                    {mode.toUpperCase()}
                </button>

            </form>
            <div>

            </div>
        </>
    )
}


export default Form
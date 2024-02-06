import React, { FC, useState } from "react"

import { Input, Button, Typography } from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form"





interface FormProps {
    mode: 'Sign In' | 'Sign Up'
    handleClick: (email: string, password: string, mode: 'Sign In' | 'Sign Up') => void
}

type StateType<T> = {
    email: T,
    password: T
}


const Form: FC<FormProps> = ({ mode, handleClick }) => {
    
    const [isLoading, setLoading] = useState(false)
    const [state, setState] = useState<StateType<string>>({
        email: '',
        password: ''
    })


    const handleSubmit = () => {
        handleClick(state.email, state.password, mode)
    }


    function changeState(e: React.InvalidEvent<HTMLInputElement>) {
        setState({
            ...state,
            [e.target.type]: e.target.value
        })
    }
    return (
        <form  className='mt-20 flex flex-col gap-9'>
            <div
                className='group relative h-10 w-full after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[1px] after:opacity-80 after:w-full'>
                <input
                    required
                    id='input-email'
                    type='email'
                    name={'email'}
                    placeholder='Email'
                    value={state.email}
                    className='bg-transparent outline-none w-full h-full border-none border-b-black placeholder:text-sm placeholder:text-gray-900 placeholder:opacity-80'
                    onChange={(e) => changeState(e)}
                    autoComplete='off'
                />
                <label htmlFor='input-email' className='absolute -top-5  left-0 font-Blinker font-bold opacity-80 transition-[top] duration-200'>Email</label>
            </div>
            <div
                className='group relative h-10 w-full after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[1px] after:border-black after:opacity-80 after:w-full'>
                <input
                    required
                    id='input-password'
                    type='password'
                    name='password'
                    value={state.password}
                    placeholder='Password'
                    className='bg-transparent outline-none w-full h-full placeholder:text-sm placeholder:text-gray-900 placeholder:opacity-80'
                    onChange={(e) => changeState(e)}
                    autoComplete='off'
                />
                <label htmlFor='input-password'
                       className='absolute -top-5 left-0 font-Blinker font-bold opacity-80'>Password</label>
            </div>
            <button
                type='button'
                className='h-11 border border-black font-Blinker font-bold text-sm shadow-lg shadow-blue-500/10  bg-orange-700 opacity-70  hover:bg-orange-900 transition duration-300'
                onClick={handleSubmit}
            >{mode.toLocaleUpperCase()}</button>
        </form>
    )
}


export default Form
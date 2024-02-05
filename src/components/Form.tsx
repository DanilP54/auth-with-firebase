import { FC, useState } from "react"
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
    const {register,handleSubmit,formState: { errors }} = useForm({mode: 'onSubmit'})

    const onSubmit = (data) => {
        handleClick(state.email, state.password, mode)    
    }

    function changeState(e: React.InvalidEvent<HTMLInputElement>) {
        setState({
            ...state,
            [e.target.type]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-20 flex flex-col gap-9' noValidate>

            <div className='relative h-10 w-full after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:border after:border-black after:opacity-50 after:w-full'>
                <label htmlFor='input-email' className='absolute -top-5 font-Blinker font-bold opacity-80'>Email</label>
                <input
                    id='input-email'
                    type='email'
                    value={state.email}
                    className='bg-transparent outline-none w-full h-full'
                    onChange={(e) => changeState(e)}
                    autoComplete='off'
                />
            </div>
            <div
                className='relative h-10 w-full after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:border after:border-black after:opacity-50 after:w-full'>
                <label htmlFor='input-password' className='absolute -top-5 font-Blinker font-bold opacity-80'>Password</label>
                <input
                    id='input-password'
                    type='password'
                    value={state.password}
                    className='bg-transparent outline-none w-full h-full'
                    onChange={(e) => changeState(e)}
                    autoComplete='off'
                />
            </div>
            <button
                className='h-11 border border-black font-Blinker font-bold text-sm shadow-lg shadow-blue-500/10'
            >{mode.toLocaleUpperCase()}</button>
        </form>
    )
}


export default Form
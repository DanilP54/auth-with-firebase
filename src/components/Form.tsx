import { FC, useState } from "react"

interface FormProps {
    title: string
    handleClick: (email: string, password: string) => void
}

type StateType<T> = {
    email: T,
    password: T
}

const Form: FC<FormProps> = ({title, handleClick}) => {
    
    const [state, setState] = useState<StateType<string>>({
        email: '',
        password: ''
    })
    function changeState(e: React.InvalidEvent<HTMLInputElement>) {
         setState({
            ...state,
            [e.target.type]: e.target.value
        })
    }
    return (
        <div>
            <input 
                type="email" 
                value={state.email}
                onChange={changeState}
                placeholder="email"    
            />
            <input 
                type="password" 
                value={state.password}
                onChange={changeState}
                placeholder="password"    
            />
            <button onClick={() => handleClick(state.email, state.password)}>
                {title}                
            </button>
        </div>
    )
}


export default Form
import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom"
import { removeUser } from "../store/slices/userSlice"
import { useAppDispatch } from "../hooks/redux-hooks"
import { Button } from "@material-tailwind/react"
import myGif from '../assets/images/gifka.gif'


const HomePage = () => {
    const dispatch = useAppDispatch()
    const {isAuth, email, token, id} = useAuth()

    return (
        <div>
            <h1 className='font-Holtwood mb-2 text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500'>Welcome</h1>
            <div className='w-[500px] h-[500px] flex flex-col backdrop-blur-2xl p-3 rounded-sm overflow-hidden'>

                <div className="w-full h-full">
                    <img className='w-full h-full' src={myGif} alt="gif"/>
                </div>

            </div>
            <button
                className='h-11 w-full mt-2 bg-amber-700 border border-black font-Blinker font-medium text-sm bg-gradient-to-r from-pink-500 to-yellow-500'
                onClick={() => dispatch(removeUser())}
            >LOG OUT</button>
            {/*<Button*/}
            {/*    onClick={() => dispatch(removeUser())}*/}
            {/*    variant="outlined"*/}
            {/*    className='rounded-none mt-auto border-black text-black'*/}
            {/*    placeholder={''}*/}
            {/*>Log out putrodan@gmail.com {email}*/}
            {/*</Button>*/}
        </div>
    )

}

export default HomePage
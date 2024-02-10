import SignUp from "./SignUp"
import { Link } from "react-router-dom"
import myGif from '../assets/images/gifka.gif'

const RegisterPage = () => {
    return (
        <div>
            <div className='w-[500px] h-[500px] flex flex-col backdrop-blur-2xl p-8 rounded-sm overflow-hidden relative z-10'>
                <img src={myGif} alt="gif" className='absolute top-0 w-[500px] h-[500px] z-0 left-0 blur-3xl opacity-30' />
                <h1 className='font-Holtwood text-3xl text-center text-yellow-800'>Sign Up</h1>
                <p className='font-Holtwood text-lg text-center text-yellow-800'>if you want to see the meme</p>
                <SignUp />
                <span className='text-center font-Blinker text-black opacity-80 text-base mt-3'>
                    Already have an account? <Link to='/login'>Sign In</Link>
                </span>
            </div>
        </div>
    )
}

export default RegisterPage
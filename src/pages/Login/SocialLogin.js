import React, { useContext } from 'react'
import { AuthProvider } from '../../Context/AuthContext/AuthContext'

export const SocialLogin = () => {
    const { googleLogin } = useContext(AuthProvider)
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(res => console.log(res))
    }
    return (
        <div>
            <button className=' w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
        </div>
    )
}

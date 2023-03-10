import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthProvider } from '../../../Context/AuthContext/AuthContext'
import './../../../index.css'
export const Header = () => {
    const { user, signout } = useContext(AuthProvider);
    const menueItems = <>
        <li><Link to='/' className='btn'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link to='/appoinment'>Appoinment</Link></li>
        <li><Link>Contact us</Link></li>
        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link onClick={signout}>Logout</Link></li>
            </> : <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menueItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menueItems}
                </ul>
            </div>
            <label htmlFor="my_deshboard" tabIndex={2} className="btn btn-ghost lg:hidden text-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    )
}

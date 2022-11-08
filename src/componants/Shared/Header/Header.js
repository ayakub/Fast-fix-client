import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo.png'
import { AuthContex } from '../../Contex/AuthProvidor';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const signOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    const navBar = <>
        <li>

            <Link to='/' className='text-2xl font-semibold text-gray-700'>Home</Link>
        </li>
        <li tabIndex={0}>
            <Link to='/blog' className='text-2xl font-semibold text-gray-700'>Blog</Link>

        </li>

        {user?.email ?
            <li>
                <Link
                    className='text-2xl font-semibold text-gray-700'>
                    <button onClick={signOut}>Logout</button>
                </Link>
            </li>
            :
            <li>
                <Link to='/login' className='text-2xl font-semibold text-gray-700'>Login</Link>
            </li>


        }

    </>
    return (
        <div className="navbar mt-7 bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navBar}

                    </ul>
                </div>
                <Link to='/' className='flex items-center'><img style={{ width: '60px' }} src={logo} alt="" /> <h2 className='ml-2 text-2xl font-bold text-gray-700'>MOBILE REPAIR</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navBar}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;
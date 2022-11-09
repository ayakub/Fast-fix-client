import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../../assests/login.jpg'
import { AuthContex } from '../../Contex/AuthProvidor';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContex);
    const googleProvidor = new GoogleAuthProvider()
    const location = useLocation()
    useTitle('Login')

    // navigate
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvidor)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-20">
            <form onSubmit={handleLogin} className="hero-content flex-col lg:flex-row w-4/5 ">
                <div className="text-center lg:text-left">

                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-semibold">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name='password'
                                placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>Have a Account    <Link to='/register' className="label-text-alt link link-hover">register</Link></p>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>

                            {/* google signIn */}
                            <div className='flex justify-center'>
                                <button onClick={handleGoogleSignIn}
                                    className="btn btn-wide mt-5 "><FaGoogle className='mr-3 text-2xl'></FaGoogle>
                                    Google Sign In
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;
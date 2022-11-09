import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assests/login.jpg'
import { AuthContex } from '../../Contex/AuthProvidor';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    useTitle('register')
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContex);
    const googleProvidor = new GoogleAuthProvider()

    const handleSignUp = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                handleUpdateUserProfile(name, photoURL);
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

            })
            .then(err => {
                console.error(err);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-20">
            <form onSubmit={handleSignUp} className="hero-content flex-col lg:flex-row w-4/5 ">
                <div className="text-center lg:text-left">

                    <img src={image} alt="" />
                </div>

                <div
                    className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-semibold">Register now!</h1>

                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
                        </div>

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
                                <p>Have a Account    <Link to='/login' className="label-text-alt link link-hover">Login</Link></p>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
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

            {/* google signIn */}


        </div>
    );
};

export default Register;
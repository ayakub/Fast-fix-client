import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assests/login.jpg'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-20">
            <div className="hero-content flex-col lg:flex-row w-4/5 ">
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
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>Create New Account<Link to='/register' className="label-text-alt link link-hover ml-3">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
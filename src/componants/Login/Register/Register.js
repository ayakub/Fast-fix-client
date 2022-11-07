import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assests/login.jpg'

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-20">
            <div className="hero-content flex-col lg:flex-row w-4/5 ">
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
                            <input type="text" name='name' placeholder="photoURL" className="input input-bordered" />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
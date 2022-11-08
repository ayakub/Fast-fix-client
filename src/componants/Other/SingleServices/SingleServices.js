import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const SingleServices = () => {
    const singleData = useLoaderData()
    const { img, name, description, rating, price } = singleData

    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="card text-start  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name}</h2>
                    <p>{description}</p>
                    <div className='flex items-center'>
                        <p className='text-orange-600 mt-3 font-semibold text-start'> Price: $ {price}</p>

                        <p className='mt-3 font-semibold text-start flex'>

                            <span
                                className='flex text-orange-400'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>

                            <span className='ml-3'>{rating}</span></p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to='/'>
                            <button className="btn btn-primary">Back Home</button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleServices;
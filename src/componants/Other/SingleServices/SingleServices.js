import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvidor';

const SingleServices = () => {
    const singleData = useLoaderData()
    const { _id, img, name, description, rating, price } = singleData
    const { user } = useContext(AuthContex);



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
                    <div className="card-actions flex justify-between">
                        <Link to='/'>
                            <button className="btn btn-primary">Back Home</button>
                        </Link>
                        <Link to={`/checkOut/${_id}`}>
                            <button className="btn btn-primary">add review</button>
                        </Link>
                    </div>
                </div>
            </div>


            <div>

            </div>


        </div>
    );
};

export default SingleServices;
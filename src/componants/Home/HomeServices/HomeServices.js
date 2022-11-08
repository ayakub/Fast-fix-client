import React from 'react';
import { FaStar } from 'react-icons/fa';

const HomeServices = ({ services }) => {
    const { img, name, description, rating, price } = services
    return (
        <div className="card text-start  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name}</h2>
                <p >
                    {
                        description?.length > 100 ? description.slice(0, 100) : description
                    }
                </p>
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
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;
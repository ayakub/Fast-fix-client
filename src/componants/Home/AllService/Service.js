import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {

    const { _id, img, name, description, rating, price } = service
    return (



        <div className="card text-start  bg-base-100 shadow-xl">
            <PhotoProvider>

                <PhotoView src={img}>
                    <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title"> {name}</h2>
                <p >
                    {
                        description?.length > 100 ? description.slice(0, 100) : description
                    }
                    <span>...</span>
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
                    <Link to={`/single/${_id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
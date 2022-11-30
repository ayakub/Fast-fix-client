import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContex } from '../../Contex/AuthProvidor';
import ReviewServices from './ReviewServices';

const SingleServices = () => {
    useTitle('Services-details')
    const singleData = useLoaderData()
    const { _id, img, name, description, rating, price } = singleData
    const { user } = useContext(AuthContex);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://mobile-servicing-server-ayakub.vercel.app/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="card text-start  bg-base-100 shadow-xl">
                <PhotoProvider>

                    <PhotoView src={img}>
                        <figure><img src={img} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
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
                <h3 className='my-10 text-orange-600 font-semibold text-4xl'>Total Review : {reviews.length}</h3>


                {
                    <div className=" ">
                        <table className="table w-6/7 mx-5">
                            <thead>
                                <tr>

                                    <th>Cutomer Details</th>
                                    <th>Service Details</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    reviews?.map(review => <ReviewServices
                                        key={review._id}
                                        review={review}
                                    ></ReviewServices>)
                                }

                            </tbody>



                        </table>
                    </div>
                }



            </div>


        </div>
    );
};

export default SingleServices;
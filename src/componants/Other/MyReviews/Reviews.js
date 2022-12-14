import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = ({ singleReview, handleDelete }) => {

    const { customer, email, serviceName, message, _id } = singleReview;
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">

                    <div className=" w-12 h-12 mr-10">

                        <Link to={`/update/${_id}`}><button className='btn btn-warning'>Update</button></Link>
                    </div>
                    <div className=" w-12 h-12 ">

                        <button onClick={() => handleDelete(_id)} className='btn btn-error'>X</button>
                    </div>
                    <div className=''>
                        <div className="font-bold">{serviceName}</div>

                    </div>
                </div>
            </td>
            <td className='hidden md:block lg:block'>
                <p className="  font-semibold ">
                    My Review : <span className='text-2xl text-red-500'>{message}</span>
                </p> <br />

            </td>
        </tr>
    );
};

export default Reviews;
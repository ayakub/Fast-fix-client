import React, { useContext } from 'react';
import { AuthContex } from '../../Contex/AuthProvidor';

const ReviewServices = ({ review }) => {
    const { customer, email, serviceName, message } = review;
    const { user } = useContext(AuthContex)
    console.log(review);
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="mask mask-squircle w-12 h-12 ">
                        <img src={user?.photoURL} alt="" />
                    </div>
                    <div className=''>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td className='hidden md:block lg:block'>
                <br />
                <span className="badge badge-ghost font-semibold ">

                    <span className='text-red-600 font-semibold'>serviceName : </span>
                    {serviceName}</span> <br />
                <span><span className='text-red-600 font-semibold'>customer review :</span> {message}</span>
            </td>
        </tr>
    );
};

export default ReviewServices;
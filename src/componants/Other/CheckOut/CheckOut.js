import { success } from 'daisyui/src/colors';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { AuthContex } from '../../Contex/AuthProvidor';

const CheckOut = () => {
    const { user } = useContext(AuthContex);
    const service = useLoaderData()
    const { _id, name, price } = service


    const handleReviews = event => {
        event.preventDefault();
        const form = event.target;
        const reviewerName = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        console.log(reviewerName, email, message)



        const order = {
            service: _id,
            serviceName: name,
            price,
            customer: reviewerName,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    swal("review added");
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <form onSubmit={handleReviews} className="hero-content flex-col lg:flex-row-">
                <h3 className='pt-10 text-3xl font-semibold mb-5 text-orange-600'>Service Name : {name}</h3>

                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' defaultValue={user?.email} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">message</span>
                            </label>
                            <textarea name="message" placeholder='message' id="" cols="10" rows="5" required></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Review</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {

    const updatedData = useLoaderData();
    const { customer, message, _id } = updatedData;

    const [review, setReview] = useState(updatedData);

    const handleUpdateReview = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/myreviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user updated')
                    console.log(data);
                }

            })

    }


    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...review }
        newUser[field] = value;
        setReview(newUser);
    }

    return (
        <div className='w-5/4 mb-16'>
            <h3>Updated Your review</h3>
            <form onSubmit={handleUpdateReview}>
                <input onChange={handleInputChange} style={{ width: '300px' }} type="text" defaultValue={customer} name="name" placeholder="Type here" className="input input-bordered w-full my-10" /><br />

                <textarea onChange={handleInputChange} style={{ width: '300px' }} cols='20'
                    defaultValue={message}
                    name='message'

                    className="textarea textarea-accent" placeholder="Bio"></textarea><br />

                <button style={{ width: '300px' }} type='submit' className="btn btn-active btn-primary mt-5">Button</button>
            </form>
        </div >
    );
};

export default UpdateReview;
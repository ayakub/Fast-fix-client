import React, { useState } from 'react';
import swal from 'sweetalert';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('AddService')
    const [service, setService] = useState([])
    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const allform = { name, img, price, rating, description }
        console.log(allform)

        fetch('http://localhost:5000/services/all', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allform)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newUsers = [...service, data];
                setService(newUsers);
                swal({
                    title: "Service",
                    text: "Added Successfully",
                    icon: "success",
                    button: "ok",
                });
                form.reset()
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='flex justify-center my-10'>

            <form onSubmit={handleAddService} className='grid grid-cols-1'>

                <h3 className='text-4xl text-orange-600 font-semibold mb-5'>Add a new service</h3>

                <input type="text" placeholder="name" name='name' className="input input-bordered w-full max-w-sm mb-5" required />

                <input type="text" placeholder="service image" name='img' className="input input-bordered w-full max-w-xs  mb-5" required />

                <input type="text" placeholder="price" name='price' className="input input-bordered w-full max-w-xs mb-5" required />

                <input type="text" name='rating' placeholder="rating" className="input input-bordered w-full max-w-xs mb-5" required />

                <textarea className="textarea textarea-primary mb-5"
                    name='description' placeholder="description" required></textarea>

                <input type='submit' className="btn btn-primary" value="Add service" />

            </form>
        </div>
    );
};

export default AddService;
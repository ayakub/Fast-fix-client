import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Service from './Service';

const AllService = () => {
    useTitle('Services')
    const allService = useLoaderData()
    return (
        <div className='mt-5'>
            <h2 className='text-orange-600 mt-7 text-5xl font-semibold'>Our Services</h2>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10'>
                {
                    allService.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AllService;
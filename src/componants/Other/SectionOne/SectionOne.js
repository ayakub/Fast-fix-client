import React from 'react';
import { FaLaptop, FaMobile, FaSellcast, FaTablet } from 'react-icons/fa';
import imge from '../../../assests/chose.jpg'
import logo from '../../../assests/quality.png'

const SectionOne = () => {
    return (
        <>
            <h3 className='text-5xl font-semibold text-orange-600 mt-5'>My Repair </h3>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10'>

                <div className='mb-5'>
                    <div className='flex items-center ml-3 '>
                        <FaMobile className='text-6xl text-orange-600'></FaMobile>
                        <h3 className='text-3xl'>Mobile Phones</h3>

                    </div>
                    <p className='text-2xl w-3/5 ml-12 mt-3 text-start'>We are only 1 hour time servicing Mobile phone</p>
                </div>

                <div className='mb-5'>
                    <div className='flex items-center ml-3'>
                        <FaTablet className='text-6xl text-orange-600'></FaTablet>
                        <h3 className='text-3xl ml-3 '>Tablet Phones</h3>
                    </div>
                    <p className='text-2xl w-3/5 ml-10 mt-3'>We are only 1 hour time servicing Tablet phone</p>
                </div>

                <div>
                    <div className='flex items-cente'>
                        <FaLaptop className='text-6xl text-orange-600'></FaLaptop>
                        <h3 className='text-3xl ml-3'>Laptop</h3>
                    </div>
                    <p className='text-2xl w-3/5 ml-12 mt-3 text-start'>We are only 1 hour time servicing Mobile phone</p>
                </div>
            </div>

            <h3 className='text-5xl font-semibold text-orange-600 text-center'>WHY CHOSE US</h3>
            <div className='w-8/12 mx-auto grid justify-between grid-cols-1 md:grid-cols-2 mb-20'>
                <div className='mb-15 flex   mt-10 mr-5'>
                    <div className=''>
                        <img src={imge} alt="" />
                    </div>
                </div>

                <div className=' mt-20'>
                    <h3 className=' text-4xl font-semibold mt-10 flex items-center ml-5 mb-10'><img style={{ width: '80px' }} src={logo} alt="" /> Quality Gureenty</h3>
                    <p>A quality guarantee is an assurance of quality and customer satisfaction issued by a company and offered primarily to paying customers who have purchased products or services from the company. </p>
                </div>


            </div >
        </>
    );
};

export default SectionOne;
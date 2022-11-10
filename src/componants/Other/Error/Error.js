import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../assests/error.webp'

const Error = () => {
    return (
        <div className=' '>
            <div className='flex justify-center'>
                <img src={error} alt="" /> <br />
            </div>
            <div>
                <Link to='/'><button className="btn btn-success">Success</button></Link>
            </div>
        </div>
    );
};

export default Error;
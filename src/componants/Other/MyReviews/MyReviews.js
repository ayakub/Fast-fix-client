import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import useTitle from '../../../hooks/useTitle';
import { AuthContex } from '../../Contex/AuthProvidor';
import Reviews from './Reviews';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContex)
    const [myReview, setMyReview] = useState();

    useTitle('my Review')


    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            }
            )
            .then(data => {
                setMyReview(data);
            })
    }, [user?.email, logOut])

    // handle delete

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, delete your review');
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        swal("review deleted successfully");
                        const remaining = myReview.filter(odr => odr._id !== id);
                        setMyReview(remaining);
                    }
                })
        }

    }

    return (
        <div>
            <h3 className='my-10 text-orange-600 font-semibold text-4xl'>My Reviews : {myReview?.length}</h3>


            <div>
                {
                    <div className=" flex justify-center">
                        <table className="table  mx-5">
                            <thead>
                                <tr>

                                    <th>Service Name</th>
                                    <th className='hidden md:block lg:block'>My review</th>

                                </tr>
                            </thead>
                            <tbody>


                                {
                                    myReview?.map(singleReview => <Reviews
                                        key={singleReview._id}
                                        singleReview={singleReview}
                                        handleDelete={handleDelete}
                                    ></Reviews>)
                                }

                                {/* no review */}

                                <div className='flex justify-center items-center my-20 text-4xl font-semibold text-red-600'>
                                    {
                                        myReview?.length === 0 ? 'No review added' : ''
                                    }
                                </div>

                            </tbody>



                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyReviews;
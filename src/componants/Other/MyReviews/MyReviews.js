import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Contex/AuthProvidor';

const MyReviews = () => {
    const { user } = useContext(AuthContex)
    const [myReview, setMyReview] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user?.email])
    return (
        <div>
            <h3>My Reviews : {myReview?.length}</h3>

            <div>
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

                                }

                            </tbody>



                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyReviews;
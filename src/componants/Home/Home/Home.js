import { useLoaderData } from 'react-router-dom';
import image from '../../../assests/servicing.jpg'
import HomeServices from '../HomeServices/HomeServices';
import { Link } from 'react-router-dom';

const Home = () => {
    const servicingData = useLoaderData()

    return (
        <div>
            <div >
                <img className='w-full' src={image} alt="" />
            </div>
            <h2 className='text-orange-600 mt-7 text-5xl font-semibold'>Our Services</h2>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10'>
                {
                    servicingData.map(services => <HomeServices
                        key={services._id}
                        services={services}
                    ></HomeServices>)
                }
            </div>
            <div>

                {/* see all button */}

                <Link to='/allService'>
                    <button className="btn border-0 bg-orange-600 mb-5">See All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
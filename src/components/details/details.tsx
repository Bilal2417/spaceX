"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addDetails } from '../../store/rocketSlice';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import "./details.css";
import ReduxProvider from '../reduxProvider/reduxProvider';


interface Rocket {
    id: string;
    name: string;
    description: string;
    flickr_images: string[];
}

const Details: React.FC = () => {
    return (
        <ReduxProvider>
            <Detail />
        </ReduxProvider>
    );
}

const Detail: React.FC = () => {
    const route = useRouter();
    const dispatch = useDispatch();
    const [rocketDetails, setRocketDetails] = useState<Rocket[]>([]);

    useEffect(() => {
        const fetchRockets = async () => {
            try {
                const response = await axios.get<Rocket[]>("https://api.spacexdata.com/v4/rockets");
                console.log(response.data);
                setRocketDetails(response.data);
            } catch (error) {
                console.error("Error fetching rocket details:", error);
            }
        };

        fetchRockets();
    }, []);

    return (
        <div className='main-block'>
            {rocketDetails.map((rocket) => (
                <div className="card" key={rocket.id}>
                    <img className="card-img-top" src={rocket.flickr_images[1]} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{rocket.name}</h5>
                        <p className="card-text">{rocket.description}</p>
                        <button 
                            onClick={() => {
                                dispatch(addDetails(rocket));
                                route.push("/rocketDetail");
                            }} 
                            className="btn btn-primary"
                        >
                            View More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Details;

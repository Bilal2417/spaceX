"use client";
import ReduxProvider from "../../components/reduxProvider/reduxProvider";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import "./rocket.css";

interface Rocket {
    name: string;
    cost_per_launch: number;
    mass: {
        kg: number;
    };
    height: {
        feet: number;
    };
    diameter: {
        feet: number;
    };
    first_flight: string;
    active: boolean;
    description: string;
    flickr_images: string[];
    wikipedia: string;
}

export default function Rocket() {
    return (
        <ReduxProvider>
            <RocketDetails />
        </ReduxProvider>
    );
}

function RocketDetails() {
    const route = useRouter();
    const rocket = useSelector((store: any) => store.rocketSlice.details) ;

    let cost: number | undefined;
    let weight: number | undefined;

    if (rocket) {
        cost = rocket.cost_per_launch / 1000000;
        weight = rocket.mass.kg / 1000;
    }

    return (
        <>
            {rocket ? (
                <div className="main">
                    <h3 className="main-heading">{rocket.name}</h3>
                    <div className="img-block">
                        <img className="rocket_img" src={rocket.flickr_images[0]} alt={`${rocket.name} Image`} />
                    </div>
                    <div className="text-block">
                        <div className="specs">
                            <h3 className="specs-head">Height</h3>
                            <p className="specs-text">{rocket.height.feet} Feet</p>
                        </div>
                        <div className="specs">
                            <h3 className="specs-head">Diameter</h3>
                            <p className="specs-text">{rocket.diameter.feet} Feet</p>
                        </div>
                        <div className="specs">
                            <h3 className="specs-head">Mass</h3>
                            <p className="specs-text">{weight} Tonne</p>
                        </div>
                        <div className="specs">
                            <h3 className="specs-head">First Flight</h3>
                            <p className="specs-text">{rocket.first_flight}</p>
                        </div>
                        <div className="specs">
                            <h3 className="specs-head">Active</h3>
                            <p className="specs-text">{rocket.active ? "Yes" : "No"}</p>
                        </div>
                        <div className="specs">
                            <h3 className="specs-head">Cost/Launch</h3>
                            <p className="specs-text">${cost} Million</p>
                        </div>
                    </div>
                    <div className="desc-block">
                        <p className="description">{rocket.description}</p>
                    </div>
                    <a href={rocket.wikipedia} className="wiki-btn">Learn more on Wikipedia</a>
                </div>
            ) : (
                route.push("/")
            )}
        </>
    );
}

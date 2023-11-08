import React from 'react';

import ListOFService from "../components/ListOFService.jsx";
import CarService from "../components/carService.jsx";
import HomeServiceBooking from "../components/HomeServiceBooking.jsx";
import ServiceMoto from "../components/ServiceMoto.jsx";


const Service = () => {
    return (
        <div>
            <ListOFService/>
            <CarService/>
            <hr/>
            <HomeServiceBooking/>
            <ServiceMoto/>
        </div>
    );
};

export default Service;
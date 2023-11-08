import React, {useEffect, useRef} from 'react';

const CarService = () => {
    let color=useRef();

    useEffect(() => {      //useEffect is used to avoid error on console that says
                                   //carService.jsx:8 Uncaught TypeError: Cannot read properties of undefined (reading 'style')
            color.current.style.color = "green";
    }, []);
    return (
        <div>
            <p>If you are a car owner in Bangladesh, you know how important it is to find a reliable
                and trustworthy service center for your vehicle. Renowned car service centers in Bangladesh not
                only provide excellent service but also ensure that your vehicle is maintained and repaired
                to the highest standards.This is where our <span ref={color}>service center</span> shines.
            </p>

        </div>
    );
};

export default CarService;
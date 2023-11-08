import React from 'react';
import {Link} from "react-router-dom";

const AboutFour=()=> {
    return (
        <div>
            <h3>Contact Us</h3>
            <p>
                Feel free to reach out to us if you have any questions or need assistance.
            </p>
            <Link to={'/contact'}><button className={'.button'}>Contact us</button></Link>
        </div>
    );
}

export default AboutFour;

import React from 'react';
import {Link} from "react-router-dom";

const ContactDownload = () => {
    return (
        <div style={{backgroundColor:"#808080"}}>
            <h3>Download <Link to={'#'}>our app</Link> from google play store.</h3>

            <p>For any query Email us at <b>example@gmail.com</b> .</p>
        </div>
    );
};

export default ContactDownload;
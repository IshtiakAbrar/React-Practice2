import React from 'react';
import ContactForm from "../components/ContactForm.jsx";
import CreateAccount from "../components/CreateAccount.jsx";
import Address from "../components/address.jsx";
import ContactDownload from "../components/ContactDownload.jsx";

const Contact = () => {
    return (
        <div>
            <ContactForm/>
            <CreateAccount/>
            <Address/>
            <ContactDownload/>
        </div>
    );
};

export default Contact;
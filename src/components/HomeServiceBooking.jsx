import React, { useState } from 'react';

const HomeServiceBooking=()=> {
    const [serviceType, setServiceType] = useState('Plumbing');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');

    const handleServiceTypeChange = (event) => {
        setServiceType(event.target.value);
    };

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Here, we can perform actions like sending the booking information to a server or displaying a confirmation message.
        console.log('Booking submitted:', {
            serviceType,
            fullName,
            phoneNumber,
            address,
            date,
        });
    };

    return (
        <div>
            <h2>Book Home Service</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Service Type:</label>
                    <select value={serviceType} onChange={handleServiceTypeChange}>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Carpentry">Carpentry</option>
                    </select>
                </div><br/>
                <div>
                    <label>Full Name:</label>
                    <input type="text" value={fullName} onChange={handleFullNameChange} />
                </div><br/>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </div><br/>
                <div>
                    <label>Address:</label>
                    <textarea value={address} onChange={handleAddressChange}></textarea>
                </div><br/>
                <div>
                    <label>Preferred Date:</label>
                    <input type="date" value={date} onChange={handleDateChange} />
                </div><br/>
                <div>
                    <button type="submit">Book Now</button>
                </div>
            </form>
        </div>
    );
}

export default HomeServiceBooking;

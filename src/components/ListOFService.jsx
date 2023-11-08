import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ListOfService = () => {
    let car=["oil change","Engine checkup","Overhaul","Scanning"];
    let home=["clothes wash","dish wash","floor wash","interior clean"];

    let [service,setService]=useState('car');
    return (
            <div>
                <h2>Please select a service!</h2>

                <div style={{display:'flex', maxWidth:'15rem', backgroundColor:"#FFC0CB", justifyContent:"space-around"}}>
                    <span><input type={"radio"}
                           value={'car'}
                           name={'option'}
                           checked={service === 'car'}
                           onChange={()=>setService("car")}
                    />
                    Car Service</span>

                    <span>
                    <input type={"radio"}
                           value={'home'}
                           name={'option'}
                           checked={service === 'home'}
                           onChange={()=>setService("home")}
                    />
                    Home Service</span>
                </div>


                {service==='car'?(
                    <div>
                        <p>Our car service includes.............</p>
                        {/*loops to iterate services*/}
                        <ul>
                            {car.map((service,i) => {
                                return (<li key={i}>{service}</li>)
                            })
                            }
                        </ul>
                        <Link to={'/contact'}><button>Contact us</button></Link>

                    </div>
                    )
                    :
                    (
                        <div>

                            <p>Our home service includes.............</p>
                            {/* loops to iterate services*/}
                            <ul>
                                {home.map((service,i) => {
                                    return (<li key={i}>{service}</li>)
                                })
                                }
                            </ul>
                            <Link to={'/contact'}><button>Contact us</button></Link>

                        </div>
                    ) }
            </div>
                    )
};

export default ListOfService;
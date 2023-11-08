import React, {useState} from 'react';

const AboutTeam=()=> {
    let [arr,setArr]=useState(['Rafique','Shafique','karim','Rahim']);


    return (
        <div>
            <h3>Our Team</h3>
            <p>
                Meet the talented individuals who make our projects come to life.
                <ul>
                {arr.map((item,i)=>{
                    return <li key={i}>{item}</li>
                })}
                </ul>
            </p>
        </div>
    );
}

export default AboutTeam;

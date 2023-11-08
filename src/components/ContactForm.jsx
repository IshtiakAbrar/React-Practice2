import React, { useState} from 'react';
// updates the people object on a button click using useState
const ContactForm = () => {

        let [people,setPeople] = useState({
            name : "",
            phone: "",
            address : ""
        })
        let [localState,setLocalState]=useState(people); // creates an instance of people as a temporary state

        const changeLocalState= (key,value)=>{          // input field changes are done in the temp object localState
            setLocalState(prevLocalState=>({
                ...prevLocalState,
                [key]:value
            }));
        }

        const onSubmit=()=>{
            setPeople(localState);
            alert("success")
        }
        return (
            <div>
                <p>Give your contact info, we shall contact you!</p>
                <p>Name : {people.name} <br/>
                    Age: {people.phone} <br/>
                    Address: {people.address}<br/>
                </p>
                <label>Name </label>
                <input onChange={(e)=>changeLocalState('name',e.target.value)}
                       type="text" value={localState.name} />
                <label>Age </label>
                <input onChange={(e)=>changeLocalState('phone',e.target.value)}
                       type="text" value={localState.phone} />
                <label>Address </label>
                <input onChange={(e)=>changeLocalState('address',e.target.value)}
                       type="text" value={localState.address}/>

                <button onClick={onSubmit}>Submit</button>
            </div>
        );
    };

export default ContactForm;
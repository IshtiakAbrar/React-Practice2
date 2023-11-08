import React, {useState, useEffect, useRef} from 'react';
// list adding input field with useEffect
const AddItemHome=()=> {
    const [myArray, setMyArray] = useState([]);
    let a ='';
    let blank=useRef(); // used to blank the input field after click

    useEffect(() => {
        console.log('myArray has changed:', myArray);
    }, [myArray]);


    return (
        <div>
            {/* Render the array here */}
            <ul>
                {myArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input ref={blank} type={"text"} onChange={(e)=>{a=e.target.value}}/>
            <button onClick={() =>{ setMyArray([...myArray, a]); blank.current.value=""}}>Add Item</button>
        </div>
    );
}

export default AddItemHome;

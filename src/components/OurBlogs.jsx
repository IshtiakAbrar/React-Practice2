import React, {useState} from 'react';

const OurBlogs = () => {
    let [newR,setNewR]=useState({
        clientName:"",
        feedback:""
    })

    let [review,setReview]=useState([
        {clientName:"Alice",
            feedback:"very good work"},
        {clientName:"Bob",
            feedback:"amazing experience"},
        {clientName:"Cypher",
            feedback:"They are very professional"}
    ]);
    const newReview=(key,value)=>{
        setNewR(newR=>({...newR, [key]:value}))


    }
    const submit=()=>{
        setReview(review=>([...review,newR]))
    }
    return (
        <div>
            <p>Our customer review......</p>

                {/*loops to iterate services*/}
            <ul style={{listStyle:"none"}}>
                {review.map((item,i) => {
                    return (
                        <li key={i}>{item.clientName} : {item.feedback}<br/></li>
                        )
                    })
                }
            </ul>

            <h2> Please give your feedback!</h2>
            <label>Name</label>
            <input type={"text"} onChange={(e)=>
                newReview("clientName",e.target.value)}/>
            <label>      Feedback</label>
            <input type={"text"} onChange={(e)=>
                newReview("feedback",e.target.value)}/>
            <br/><br/>

            <button onClick={submit} className={"button"}>Submit</button>
        </div>
    )
};

export default OurBlogs;
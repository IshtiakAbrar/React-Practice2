import React, {useState} from 'react';

const CreateAccount = () => {
    let [show,setShow]=useState(false);
    let [user,setUser]=useState(
        {
            email:"",
            firstName:"",
            lastName:"",
            mobile:"",
            password:""
        }
    )
    const userInfo=(key,value)=>{
        setUser(user=>({
            ...user,
            [key]:value
        }))
    }
    let [data,setData]=useState(user);
    const submit= ()=>{
        setData(user);
        setShow(true)
    }

    return (

        <div>
            <div style={{backgroundColor:"#FAEBD7"}}>
            <h2> Want to save your info in our database for future use?</h2>
            <label>Email</label><br/>
            <input onChange={(e)=>userInfo('email',e.target.value)} placeholder={'Email'}/>
            <br/>
            <label>firstName</label><br/>
            <input onChange={(e)=>userInfo('firstName',e.target.value)} placeholder={'firstName'}/>
            <br/>
            <label>lastName</label><br/>
            <input onChange={(e)=>userInfo('lastName',e.target.value)} placeholder={'lastName'}/>
            <br/>
            <label>mobile</label><br/>
            <input onChange={(e)=>userInfo('mobile',e.target.value)} placeholder={'mobile'}/>
            <br/>
            <label>password</label><br/>
            <input onChange={(e)=>userInfo('password',e.target.value)} placeholder={'password'}/>
            <br/>
            <br/></div>

            {show===true?( <p>{Object.keys(data)[0]} : {data.email}<br/>
                {Object.keys(data)[1]} : {data.firstName}<br/>
                {Object.keys(data)[2]} : {data.lastName}<br/>
                {Object.keys(data)[3]} : {data.mobile}<br/>
                {Object.keys(data)[4]} : {data.password}<br/>
            </p>):("")}

            <button onClick={()=>submit()}>Submit</button>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}







        </div>
    );
};

export default CreateAccount;
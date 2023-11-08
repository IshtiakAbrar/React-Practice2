import React, {useEffect, useState} from 'react';

const ReportAgent = () => {
    let [allReport,setAllReport]=useState([
        {agentName:"a1",
            report:"rude"},
        {agentName:"a2",
            report:"bad"},
        {agentName:"a3",
            report:"misbehave"}
    ]);

    let [newRep,setNewRep]=useState({
        agentName:"",
        report:""
    })
    const newReport=(key,value)=>{
        setNewRep(newRep=>({...newRep, [key]:value}));

    }
    useEffect(() => {       //used to see the updated state in console
        console.log(allReport);
    }, [allReport]);
    const submit=async()=>{
        await setAllReport(allReport=>([...allReport,newRep]));

        console.log(allReport);

    }
    return (
        <div>

            {/*} <ul style={{listStyle:"none"}}>
                {allReport.map((item,i) => {
                    return (
                        <li key={i}>{item.agentName} : {item.report}<br/></li>
                    )
                })
                }
            </ul> */}

            <h2> Report an agent?</h2>
            <label>Name</label>
            <input type={"text"} onChange={(e)=>
                newReport("agentName",e.target.value)}/>
            <label>      report</label>
            <input type={"text"} onChange={(e)=>
                newReport("report",e.target.value)}/>
            <br/><br/>

            <button onClick={submit} className={"button"}>Submit</button>
        </div>
    );
};

export default ReportAgent;
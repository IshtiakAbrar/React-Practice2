import React, {useEffect, useRef, useState} from 'react';
const ProjectApproach=()=> {
    let dom= useRef();
    let [count,setCount]=useState(0)

    useEffect(() => {
        if (count %2===0){
            dom.current.src="https://www.jeffrobin.com/uploads/3/7/6/3/37633225/mini-project-copy_orig.jpg";
        }
        else {
            dom.current.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYyXj6XtmZ3_OUSB6YHwqaxMiZsBG_7XdZEA&usqp=CAU";
        }
    }, [count]);

    return (
        <div>


            <img ref={dom} src={''} alt={"img"} width="300" height="200"/>
            <button onClick={()=>{setCount(count+1)}} className={"button"}>Change image</button>
        </div>
    );
}

export default ProjectApproach;

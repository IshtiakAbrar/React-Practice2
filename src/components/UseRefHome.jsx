import React, {useEffect, useRef, useState} from 'react';

// changes dom using useRef
const UseRefHome = () => {
    let dom=useRef();
    let [num,setNum]=useState(1)

    const change=()=>{
        dom.current.style.color="#A52A2A"
        setNum(num+1);
    }

    useEffect(() => {
        if (num%2===0){
            dom.current.innerText="Bingo!"
        }
        else{
            dom.current.innerText="\n"
        }
    }, [num]);


    return (
        <div>
            <h2 ref={dom}></h2>
            <button onClick={change} className={'button'}>Ref hook</button>
        </div>
    );
};

export default UseRefHome;
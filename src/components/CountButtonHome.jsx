import React, {useState} from 'react';
import "../assets/css/CountButton.css"

//counts number of a button click
const CountButtonHome = () => {
    let [count,setCount]=useState(0);
    const myFun=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={myFun} className={'button'}>Count</button>
            {(()=>{
                if (count %2===0){
                    return(
                        <div className="odd-even-container">
                            <h2 className="clickCount">even click <span>{count}</span></h2>
                        </div>
                    )
                }
                else{
                    return(
                        <div className="odd-even-container">
                            <h2 className="clickCount">odd click <span>{count}</span></h2>
                        </div>
                    )
                }
            })()}
        </div>
    );
};

export default CountButtonHome;
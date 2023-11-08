import React from 'react';

const RateBlog = () => {
    return (
        <div>
            <h2 style={{color:"darkblue", display:"flex", justifyContent:'center'}}>Rate us!</h2><br/>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div><input type={"radio"}
                   value={'1'}
                   name={'option'}

            />
            1 Star</div>

            <div><input type={"radio"}
                   value={'2'}
                   name={'option'}

            />
            2 Star</div>

            <div><input type={"radio"}
                   value={'3'}
                   name={'option'}

            />
            3 Star</div>

            <div><input type={"radio"}
                   value={'4'}
                   name={'option'}

            />
            4 Star</div>

            <div><input type={"radio"}
                   value={'5'}
                   name={'option'}

            />
            5 Star</div>

        </div>

        </div>
    );
};

export default RateBlog;
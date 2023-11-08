import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

const BlogLast = () => {
    let dom=useRef();
    useEffect(() => {
        dom.current.innerHTML="<button>Go to home</button>"
    }, []);
    return (
        <div>
            <Link to={'/'}><h3 ref={dom}></h3></Link>

        </div>
    );
};

export default BlogLast;
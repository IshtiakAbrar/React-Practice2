import React from 'react';
import UseRefHome from "../components/UseRefHome.jsx";
import CountButtonHome from "../components/CountButtonHome.jsx";
import AddItemHome from "../components/AddItemHome.jsx";
import LastHome from "../components/LastHome.jsx";

const Home = () => {
    return (
        <div>
            <UseRefHome/>
            <hr/>
            <CountButtonHome/>
            <hr/>
            <AddItemHome/>
            <hr/>
            <LastHome/>
        </div>
    );
};

export default Home;
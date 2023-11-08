import React from 'react';
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/project"} element={<Project/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/blog"} element={<Blog/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"/service"} element={<Service/>}/>
                </Routes>

            </BrowserRouter>

        </div>
    );
};

export default App;
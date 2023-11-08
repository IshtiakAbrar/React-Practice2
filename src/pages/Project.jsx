import React from 'react';
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import ProjectTwo from "../components/ProjectTwo.jsx";
import ProjectGoals from "../components/ProjectGoals.jsx";
import ProjectApproach from "../components/ProjectApproach.jsx";

const Project = () => {
    return (
        <div>
            <FeaturedProjects/>
            <hr/>
            <ProjectTwo/><hr/>
            <ProjectGoals/><hr/>
            <ProjectApproach/><hr/>


        </div>
    );
};

export default Project;
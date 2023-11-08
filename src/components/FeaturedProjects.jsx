import React from 'react';

const FeaturedProjects=()=> {
    const projectsData = [
        {
            title: 'Project 1',
            description: 'Description for Project 1.',
            imageUrl: 'Text for Project 1',
        },
        {
            title: 'Project 2',
            description: 'Description for Project 2.',
            imageUrl: 'Text for Project 2',
        },
        {
            title: 'Project 3',
            description: 'Description for Project 3.',
            imageUrl: 'Text for Project 3',
        },
    ];


    return (
        <div>
            <h3>Featured Projects</h3>

                {projectsData.map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>{project.imageUrl}</p>
                    </div>
                ))}
        </div>
    );
}

export default FeaturedProjects;

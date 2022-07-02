import React from 'react';
import { ProjectTemplate } from '.';
import VD from "../public/VectorDesign.svg";
import { useStateContext } from '../context/StateContext';

const Projects = ({ projects }) => {
    const { projectsSection } = useStateContext();

    return (
        <div ref={projectsSection}>
            <div className="heading">
                <div className="center-content">
                    <div className="titles">PROJECTS</div>
                    <div className="sub-titles">check out my projects.</div>
                </div>
                <div className="crop-heading">
                    <VD className="vector"/>
                </div>
            </div>

            <div className="project-info">                
                {projects.map((project, i) => (
                    <ProjectTemplate
                        key={i}
                        index={i}
                        project={project}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects

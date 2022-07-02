import React from 'react';
import { urlFor } from '../lib/client';

const colours = [
    "#F72585",
    "#4CC9F0",
    "#3A0CA3"
];

const ProjectTemplate = ({ index, project }) => {
    return (index % 2) ?
        (
            <div className="project-container">
                <div
                    className="project-image-container"
                    style={{
                        background: colours[index % 3]
                    }}
                >
                    <div className="project-image">
                        <img
                            style={{ width: "30vw", cursor: "pointer" }}
                            src={urlFor(project.image)}
                            alt={project.name}
                            onClick={() => window.open(project.link)}
                        />
                    </div>
                </div>

                <div
                    className="project-title"
                    style={{
                        color: colours[index % 3]
                    }}
                >
                    <div
                        style={{
                            width: "40vw",
                            display: "grid",
                            justifyContent: "center"
                        }}
                    >
                        <div
                            onClick={() => window.open(project.link)}
                            style={{ cursor: "pointer" }}
                        >
                            {project.name}
                        </div>
                        <div className="project-status">
                            {project.status}
                        </div>
                    </div>
                </div>
            </div>
        )
        :
        (
            <div className="project-container">
                <div
                    className="project-title"
                    style={{
                        color: colours[index % 3]
                    }}
                >
                    <div
                        style={{
                            width: "40vw",
                            display: "grid",
                            justifyContent: "center"
                        }}
                    >
                        <div
                            onClick={() => window.open(project.link)}
                            style={{ cursor: "pointer" }}
                        >
                            {project.name}
                        </div>
                        <div className="project-status">
                            {project.status}
                        </div>
                    </div>
                </div>

                <div
                    className="project-image-container"
                    style={{
                        background: colours[index % 3]
                    }}
                >
                    <div className="project-image">
                        <img
                            style={{ width: "30vw", cursor: "pointer" }}
                            src={urlFor(project.image)}
                            alt={project.name}
                            onClick={() => window.open(project.link)}
                        />
                    </div>
                </div>
            </div>
        )
}

export default ProjectTemplate

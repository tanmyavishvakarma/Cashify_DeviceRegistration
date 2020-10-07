import React from 'react'
import ProjectSummary from'./Projectsummary'
const Projectlist=({projects})=>{
    return(    
        <div className="project-list section">
            {projects && projects.map(project =>{
                return(
                    <ProjectSummary project={project}   key={project.serialno}></ProjectSummary>
                )
            })}
        </div>
    );
}
export default Projectlist
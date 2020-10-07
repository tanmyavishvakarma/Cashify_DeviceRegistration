import React from 'react'

const ProjectSummary=({project})=>{
    return( 
        
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.serialno}</span>
            <p>Posted by admin</p>
            <p className="gray-text">2 january  </p>
        </div>
    </div>
    )
}
export default ProjectSummary
import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - { id }</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum temporibus sit placeat ut quis exercitationem porro consectetur quae magni ullam enim laboriosam assumenda corporis, facere debitis neque! Possimus, libero.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the net ninjo</div>
          <div>2nd of sept, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

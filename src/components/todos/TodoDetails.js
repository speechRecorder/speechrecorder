import React from 'react'

const TodoDetails = (props) => {
  const {id} = props.match.params
  return (
    <div className="container section audio-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Audio Details todo id- {id}</span>
            <p>Some Info in audio details</p>
        </div>
        <div className="card-action listen-4 grey-text">
          <div>Posted by TL Squad</div>
          <div>Mar 13</div>
        </div>
      </div>
    </div>
  )
}

export default TodoDetails
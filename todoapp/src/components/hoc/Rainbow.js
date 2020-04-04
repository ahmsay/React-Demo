import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow']
  const randomColor = colors[Math.floor(Math.random() * colors.length - 1)]
  const className = randomColor + '-text'
  return (props) => {
    return (
      <div className={ className }>
        <WrappedComponent { ...props }/>
      </div>
    )
  }
}

export default Rainbow

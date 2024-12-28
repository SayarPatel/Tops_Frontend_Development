import React from 'react'

const Greetings = (props) => {
  return (
    <div>
      <h2 className='head'>Hello,{props.myname}</h2>
    </div>
  )
}

export default Greetings

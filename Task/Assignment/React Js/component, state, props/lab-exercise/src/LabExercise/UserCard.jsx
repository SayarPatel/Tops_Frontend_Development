import React from 'react'
import './usercard.css';


const UserCard = (props) => {
  return (
    <div>
      <div className='container'>
        <div className='nest-container'>
          <div>
              <div className='bg-img'></div>
          </div>
          <div>
              <p><strong>FULL NAME:</strong> {props.myname}</p>
              <p><strong>AGE:</strong> {props.myage}</p>
              <p><strong>ADDRESS:</strong> {props.mylocation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard

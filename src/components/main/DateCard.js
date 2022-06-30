import React from 'react'
import './MainStyles.css'

function DateCard(props) {
  return (
    <div className='date-card-container'>
        {props.day}
        <div className='top-date-card'>{props.month} {props.row} </div>
    </div>
  )
}

export default DateCard
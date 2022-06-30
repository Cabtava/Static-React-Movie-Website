import React from 'react'
import { GoDeviceCameraVideo } from 'react-icons/go'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import './NavbarStyles.css'

function Navbar() {
  return (
    <header>
        <div className="header_logo-div">
            <GoDeviceCameraVideo size={25}/>
            <h2>ulti<span>flex</span></h2>
        </div>

        <nav className='header_middle-nav'>
            <ul className='header_middle_nav-ul'>
                <div>
                    <li>Main</li>
                    <div className='active'></div>
                </div>
                <li>Schedules</li>
                <li>Tickets</li>
                <li>News</li>
                <li>Contact</li> 
            </ul>
        </nav> 

        <div className="profile">
            <p>Mr.John Doe </p>
            <img src={require('../../assets/person.jpg')} alt="Person_Picture" />
            <MdOutlineKeyboardArrowDown />
        </div>

        <div className="header_logout-div">
            <p>Sign Out</p>
        </div>
    
    </header>
  )
}

export default Navbar
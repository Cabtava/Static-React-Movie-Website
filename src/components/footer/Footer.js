import React from 'react'
import { GoDeviceCameraVideo } from 'react-icons/go'
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr'
import './FooterStyles.css'

function Footer() {
  return (
    <footer>
        <div className='footer-container'>

                    <div className="footer_logo-div">
                            <div className='logo-div'>
                            <GoDeviceCameraVideo size={25}/>
                            <h2>ulti<span>flex</span></h2>
                            </div>
                            <div>
                                <p>&copy; 2001-2017, SIA Multiflex</p>
                            </div>
                    </div>

                    <div className="middle-list-div">
                        <li className='active-m'>Main</li>
                        <li>Schedules</li>
                        <li>Tickets</li>
                        <li>News</li>
                        <li>Contact</li> 
                    </div>    

                    <div className="icons">
                        <div className="icon-div">
                            <GrFacebookOption />
                        </div>

                        <div className="icon-div">
                            <GrTwitter />
                        </div>

                        <div className="icon-div">
                            <GrInstagram />
                        </div>
                    </div>
        </div>
    </footer>
  )
}

export default Footer
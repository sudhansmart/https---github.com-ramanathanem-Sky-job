import React from 'react'
import Footerlogo from "../assets/Images/skylarklogo.png"
import '../Style/Footer.css'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faHeart, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import fb from '../assets/Images/facebook.png'
import wa from '../assets/Images/whatsapp.png'
import insta from '../assets/Images/social.png'
import linked from '../assets/Images/linkedin.png'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export const Footer = ({setAdmin}) => {

  const navigate = useNavigate();

  const handleadmin = ()=>{
    setAdmin(true);
    navigate('/adminlog')
  }
  return (
 <div className='footer-main p-4'>
    <div className='footer-main1 p-4'>
      <div className='footer-logo'>
      <img className='logosky mb-3' src={Footerlogo}/>
      <p className='logo-text'>Empowering professionals and advancing careers <br/>Your portal to senior-level opportunities</p>
      </div>
      <div className='links'>
      <NavLink className="footerlink"  to="/"> Home
           </NavLink>
           <NavLink className="footerlink"  to="/jobs"> Job
           </NavLink>
           <NavLink className="footerlink"  to="/contact"> Contact
           </NavLink>
      </div>
      <div className='part-3 text-center'>
         <h4 className='footer-word mb-3' >Mid & Senior Level Hiring</h4>
         <Button className='footer-button mb-4' style={{color:"black"}}>Register Now <FontAwesomeIcon className='rightarrow' icon={faChevronRight} /><FontAwesomeIcon  className='rightarrow' icon={faChevronRight} /></Button>
         <div className='follow'>
             <p className='text-light'>Follow us on</p>
             <div className='d-flex justify-content-center'>
                 <img className='follow-logo' src={fb}/>
                 <img className='follow-logo' src={wa}/>
                 <img className='follow-logo' src={insta}/>
                 <img className='follow-logo' src={linked}/>
               
             </div>
         </div>
      </div>

    </div>
    <hr style={{color:"white"}}/>
    <div className='d-flex justify-content-evenly'>
        <p className='text-light'>Copyright <FontAwesomeIcon icon={faCopyright}/> 2024 Skylark Hr Solutions Pvt Ltd</p>
        <div>
        <NavLink className="footerlink1"  to="/"> Privacy Policy
           </NavLink>
            <span> |</span>
           <NavLink className="footerlink1"  to="/jobs"> Terms and Conditions
           </NavLink>
           </div>
    </div>
    <p className='footer-text'>Developed by <FontAwesomeIcon style={{color:"#DA5656"}} icon={faHeart}/> Skylark Digi Solutions</p>
    </div>
 
  )
}

import React from 'react'
import "../Style/Clients.css"
import infosys from "../assets/Images/infosys.png"
import Accenture from "../assets/Images/Accenture.png"
import Wipro from "../assets/Images/Wipro.png"
import survey from "../assets/Images/survey.png"
const Clients = () => {
  return (
    <div className='overallbox'>
 <div className='d-flex justify-content-between align-content-center'>


 <div className='line'></div>  
<p className='clientheading text-center'> Our Awesome Clients </p>
<div className='line'></div> 
</div>
<hr/>
<marquee > 
<div className="clients d-flex justify-content-evenly">
  <img className='clientlogo' src={infosys} alt='infosys-logo'/>
  <img className='clientlogo' src={Accenture} alt='Accenture-logo'/>
  <img className='clientlogo' src={Wipro} alt='Wipro-logo'/>
  <img className='clientlogo' src={survey} alt='survey-logo'/>
 </div></marquee>
    </div>
  )
}

export default Clients
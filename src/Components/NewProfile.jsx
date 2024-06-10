import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/newProfile.css';
import userimage from '../assets/Images/userdum.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase, faBuilding, faEnvelope,faMoneyBill, faPhone ,faCalendarDays} from '@fortawesome/free-solid-svg-icons';
function NewProfile({data,handleDownload}) {
      


  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
     <div className='newprofilebody'>
        {data.map((candidate, index) => (
            
       
      <div className="container emp-profile" key={index}>
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={userimage} alt="user-profile" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{candidate.name}</h5>
                <h6>{candidate.role}</h6>
                <p className='company'>{candidate.currentCompany}</p>
                <p className='company'>{candidate.location}</p>
                <p className="proile-rating">Profile Match : <span> NA</span></p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} 
                      id="home-tab" 
                      onClick={() => handleTabClick('home')} 
                      role="tab" 
                      aria-controls="home" 
                      aria-selected={activeTab === 'home'}
                    >
                      About
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-md-2">
                         <span className='download' onClick={() => handleDownload(candidate._id)}> <FontAwesomeIcon icon={faDownload}/> Download</span>
                     </div>
          </div>
          <div className="row">
            <div className="col-md-4">
             
                <p className='skilltittle'>SKILLS</p>
                <div className="profile-work">
                {candidate.keySkills.map((skill, index) => ( 
                  <li className='skill' key={index}>{skill}</li>
                ))}
                </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <p><FontAwesomeIcon icon={faEnvelope} style={{color:"#f04235"}}/> <a href={`mailto:${candidate.email}`}>{candidate.email}</a></p>
                    </div>
                    <div className="col-md-6">
                      <p><FontAwesomeIcon icon={faBriefcase} style={{color:"#515162"}} /> {candidate.experience} Years</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p><FontAwesomeIcon icon={faPhone} style={{color:"#36a854"}}/> {candidate.phonenumber}</p>
                    </div>
                    <div className="col-md-6">
                      <p><FontAwesomeIcon icon={faMoneyBill} style={{color:"#147d53"}}/> {candidate.currentctc} LPA</p>
                    </div>
                  </div>
                  <div className="row">
                    
                    <div className="col-md-6">
                      <p><FontAwesomeIcon icon={faBuilding} style={{color:"grey"}}/> {candidate.industry}</p>
                    </div>
                    <div className="col-md-6">
                      <p><FontAwesomeIcon icon={faCalendarDays} style={{color:"violet"}} /> {candidate.noticeperiod} Days</p>
                    </div>
                  </div>
                </div>
                {/* <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Resume</label>
                    </div>
                    
                  </div>                
                  <div className="row">
                    <div className="col-md-6">
                      <label>Application Status</label>
                    </div>
                    <div className="col-md-6">
                      <p>Nil</p>
                    </div>
                  </div>
                  
               </div> */}
              </div>
            </div>
          </div>
        </form>
      </div> ))}
    </div>
  );
}

export default NewProfile;

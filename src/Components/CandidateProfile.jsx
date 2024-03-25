import React, { useState, useEffect } from 'react';
import '../Style/CandidateProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import ProfileDetails from './ProfileDetails';
import axios from 'axios';

const CandidateProfile = () => {
  const [authId, setAuthId] = useState(localStorage.getItem('authId'));
  const [modalShow, setModalShow] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [ showProfile,setShowProfile] = useState (false)
  const [languages, setLanguages] = useState([
    { id: 1, name: 'English', proficiency: 'Advanced', read: false, write: false, speak: true },
    { id: 2, name: 'French', proficiency: 'Intermediate', read: true, write: false, speak: true },
    { id: 3, name: 'Spanish', proficiency: 'Beginner', read: false, write: false, speak: false }
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/profile/specificprofile/${authId}`);
      setProfileData([response.data]);
      console.log("fetch :",response.data);
      console.log("profile :",profileData)
    } catch (error) {
      console.log("Error occurred while fetching profile data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [authId]);

  const handleEditProfile = () => {
    setModalShow(true);
    setShowProfile(true);
  };

  const handleCheckboxChange = (languageId, skill) => {
    setLanguages(languages.map(language => {
      if (language.id === languageId) {
        return { ...language, [skill]: !language[skill] };
      }
      return language;
    }));
  };

  const handleCloseModal = () => {
    setModalShow(false);
    fetchData();
  };


  return (
    <>
    <div className='p-5' >
    {profileData.map((data, index) => (
        <div key={index} >
          <div className='profile-info p-5'>
            <h5 className='profile-name'>{data.name.toUpperCase()} <i className="bi bi-pencil-fill edit-profile" onClick={handleEditProfile}></i></h5>
            <h5 className='profile-role'>{data.role}</h5>
            <hr />
            <div className="row">
              <div className="col">
                <p className='profile-contact'><i className="bi bi-geo-alt-fill" style={{ fontSize: '14px', color: '#717b9e' }}></i> {data.location}</p>
                <p className='profile-contact'><i className="bi bi-suitcase-lg-fill profile-explogo"></i> {data.experience} Years</p>
                <p className='profile-contact'><i className="bi bi-currency-rupee"></i> {data.currentctc} LPA</p>
              </div>
              <div className="col">
                <p className='profile-contact'><i className="bi bi-telephone-fill "></i> {data.phonenumber}  </p>
                <p className='profile-contact'><i className="bi bi-envelope-arrow-up-fill"></i> {data.email} </p>
                <p className='profile-contact'><FontAwesomeIcon icon={faCalendarDay} /> {data.noticeperiod} Days</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    <div className='upload-cv mt-3 p-5'>
 
           <div className=''>
               <p className='profile-resume'>Resume</p><hr/>
               <p className='profile-pdf'>Ramanathan.pdf</p>
               <p className='profile-pdfdate'>Uploaded on Jan 11, 2024</p>
      
              <span className='cv-icon text-primary' ><FontAwesomeIcon icon={faDownload} /> </span> 
              <span className='cv-icon text-danger'> <i className="bi bi-trash3-fill"></i>  </span> 
          <div className='upload-profilecv mt-3 p-4 text-center'>
                    <span className='btn btn-outline-primary pro-cv '>Upload CV</span>
                     <p className='format mt-3'>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
          </div>
      </div>
</div>
         

               <div className='profile mt-3 p-4 '>
                     <p className='profile-resume'>Profile summary <i className="bi bi-pencil-fill edit-profile"></i></p><hr/>
                     <p className='profile-summary '>I have completed MCA in Adhiyamaan college of Engineering from Hosur in 2023. 
                                                       As a freasher I am eager to work with people from different backgrounds and dreams.
                                                         My key skill on android, javascript, Css3,Bootstrap Redux, api,Github and html5. 
                                                        I am looking for a Job in Front-end developer role on React JS as 
                                                        I have done some projects on this.</p>
                </div>


         <div className='keyskill mt-3 p-3'>
                 <p className='profile-key p-3'>Key Skill <i className="bi bi-pencil-fill edit-profile"></i></p><hr/>
            <div className='profile p-2 '>
                    <span className='profile-jobskill me-2 p-2'>React js</span>
                    <span className='profile-jobskill me-2 p-2'>Bootstrap</span>
                    <span className='profile-jobskill me-2 p-2'>Javascript</span>
                    <span className='profile-jobskill me-2 p-2'>HTML5</span>
                    <span className='profile-jobskill me-2 p-2'>CSS3</span>
                    <span className='profile-jobskill me-2 p-2'>Redux</span>
                    <span className='profile-jobskill me-2 p-2'>API</span>
                    <span className='profile-jobskill me-2 p-2'>Node.js</span>
            </div>
         </div>


         
             <div className='edu p-4 mt-3'>
                    <div className='d-flex justify-content-between'>
                           <p className='profile-keys p-1'>Education <i className="bi bi-pencil-fill edit-profile"></i></p>
                           <p className='write-education'>Add Education</p>
                     </div><hr/>
                    <div className='profile p-1 '>
                          <p className='degree-education'>MCA Computers</p>
                          <p className='edc-clg'>Adhiyamaan College of Engineering, Hosur</p>
                          <p className='edc-clg'>2021-2023 Full Time</p>
                   </div>
          <div className='profile p-1 '>
                          <p className='degree-education'>BCA</p>
                          <p className='edc-clg'>Government Arts college, paramakudi</p>
                          <p className='edc-clg'>2018-2021 Full Time</p>
          </div>
          <div className='profile p-1 '>
                               <p className='degree-education'>12th </p>
                               <p className='edc-clg'>SNV Government Higher Secondary school</p>
                               <p className='edc-clg'>2016-2018 Full Time</p>
              </div>
          </div>
<div>

</div>

<div className='personal p-4 mt-3'>
                               <p className='personal-details'>Personal details <i className="bi bi-pencil-fill edit-profile"></i></p>
                  <div className="row">
                      <div className="col">
                    <p className='personal-dob'>Date of birth</p>
                    <p className='dob-candidate'>12.05.2001</p>
                    <p className='personal-dob'>Gender</p>
                    <p className='dob-candidate'>Male</p>
                  </div>
                  <div className="col">
                  <p className='personal-dob'>Location</p>
                    <p className='dob-candidate'>Chennai</p>
                    <p className='personal-dob'>Job Role</p>
                    <p className='dob-candidate'>React js Developer</p>
                    
                  </div>

</div>
</div>
<div>
</div>


 
    <div className='profile-table mt-3 p-3'>
    <p className='profile-key p-3'>Languages Known<i className="bi bi-pencil-fill edit-profile"></i></p><hr/>
    <table className='w-100'>
      <thead   className='text-center'>
        <tr >
          <th></th>
          <th>Proficiency</th>
          <th>Read</th>
          <th>Write</th>
          <th>Speak</th>
        </tr>
      </thead>
      <tbody className='text-center'> 
        {languages.map(language => (
          <tr key={language.id}>
            <td>{language.name}</td>
            <td>{language.proficiency}</td>
            <td><input type="checkbox" checked={language.read} onChange={() => handleCheckboxChange(language.id, 'read')} /></td>
            <td><input type="checkbox" checked={language.write} onChange={() => handleCheckboxChange(language.id, 'write')} /></td>
            <td><input type="checkbox" checked={language.speak} onChange={() => handleCheckboxChange(language.id, 'speak')} /></td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
</div>
<Modal
            show={modalShow}
            size='lg'
            bg="Secondary"
            onHide={handleCloseModal}
            backdrop="static"
            keyboard={false}>
          <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {showProfile? <ProfileDetails handleCloseModal={handleCloseModal}/>:" "}
        </Modal.Body>
          </Modal>
       
</>
  )
}

export default CandidateProfile
import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row,FloatingLabel } from 'react-bootstrap';
import '../Style/candidate.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faBuilding, faDownload,faEnvelope,faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';

import FilterCandidate from './FilterCandidate';


// Stop Changes

function ShowProfiles() {
  const [jobData, setJobData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
 
    const { jobid } = useParams();
    const [data, setData] = useState([]);
//  Search logic here
useEffect(() => {
  fetchData();

}, []);

const fetchData = async () => {
  try {

    const response = await axios.get(`https://jobportal-backend-yi43.onrender.com/profile/allprofiles`);
    setData(response.data)
    setJobData(response.data);
    setOriginalData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const [filter, setFilter] = useState({
  jobtitle:'',
  skills: '',
  minyear: '',
  maxyear: '',
  category: '',
  currentCompany: '',
  location: '',
  gender: '',
  noticeperiod: '',
  name: '',
  mail: '',
  phonenumber: ''
});

const handleOnChange = (e) => {
  // fetchData();
  const { name, value } = e.target;
  setFilter(prevFilter => ({
    ...prevFilter,
    [name]: value,
  }));
};


const filterJobData = () => {
    
  let filteredJobs = [...jobData];
  console.log("search console :",filteredJobs)
  console.log("search trigger :",filter.skills)


  // Apply Jobtitle term filter
  if (filter.jobtitle) {
    filteredJobs = filteredJobs.filter(user =>
      user.role && user.role.toLowerCase().includes(filter.jobtitle.toLowerCase())
          // console.log("key:", user.role,filter.jobtitle)
   
    ); 
  }

  // Apply search term filter
  if (filter.skills) {
    const searchTerm = filter.skills.toLowerCase();
    filteredJobs = filteredJobs.filter(job =>
      job.keySkills && job.keySkills.some(skill => skill.toLowerCase().includes(searchTerm))
    );
  }
  

  // Apply experience filter
  if (filter.minyear || filter.maxyear) {
    filteredJobs = filteredJobs.filter(job => {
      const minExperience = parseInt(filter.minyear) || 0;
      const maxExperience = parseInt(filter.maxyear) || Infinity;
      return job.experience >= minExperience && job.experience <= maxExperience;
    });
  }
  
  // Apply category filter
  if (filter.category) {
    filteredJobs = filteredJobs.filter(job =>
      job.industry && job.industry.toLowerCase().includes(filter.category.toLowerCase())
    );
  }
   // Apply Name filter
   if (filter.currentCompany) {
    filteredJobs = filteredJobs.filter(job =>
      job.currentCompany && job.currentCompany.toLowerCase().includes(filter.currentCompany.toLowerCase())
    );
  }
  // Apply Location filter
  if (filter.location) {
    filteredJobs = filteredJobs.filter(job =>
      job.location && job.location.toLowerCase().includes(filter.location.toLowerCase())
     
    );
  }

  // Apply Gender filter
  if (filter.gender) {
    filteredJobs = filteredJobs.filter(job =>
      job.gender && job.gender.toLowerCase() === filter.gender.toLowerCase()
    );
  }

  // Apply Notice Period filter
  // if (filter.noticeperiod) {
  //   filteredJobs = filteredJobs.filter(job =>
  //     job.noticeperiod && job.noticeperiod === parseInt(filter.noticeperiod)
  //   );
  // }
  if (filter.noticeperiod) {
    const [min, max] = filter.noticeperiod.split('-').map(val => parseInt(val)); 
    filteredJobs = filteredJobs.filter(job => {
    const minExperience = min || 0;
      const maxExperience = max || Infinity;
      return +job.noticeperiod >= minExperience && +job.noticeperiod <= maxExperience && job.noticeperiod <= "immediate";
    });
  }


  // Apply Name filter
  if (filter.name) {
    filteredJobs = filteredJobs.filter(job =>
      job.name && job.name.toLowerCase().includes(filter.name.toLowerCase())
     
    );
  }

  // Apply Email filter
  if (filter.mail) {
    filteredJobs = filteredJobs.filter(job =>
      job.email && job.email.toLowerCase().includes(filter.mail.toLowerCase())
    )
  }

  // Apply Phone Number filter
  if (filter.phonenumber) {
    filteredJobs = filteredJobs.filter(job =>
      job.phonenumber && job.phonenumber === parseInt(filter.phonenumber)
    );
  }

  return filteredJobs;
};

const handleResetFilters = () => {
  setFilter({
    jobtitle:'',
      skills: '',
    minyear: '',
    maxyear: '',
    category: '',
    currentCompany: '',
    location: '',
    gender: '',
    noticeperiod: '',
    name: '',
    mail: '',
    phonenumber: ''
  });
  setData(originalData);
};
 
const handleApplyFilters = () => {
    
  const filteredData = filterJobData();
  setData(filteredData);
  console.log("filter :",filteredData)
};







    const handleDownload = async (candidateId) => {

        try {
          const response = await axios.get(`https://jobportal-backend-yi43.onrender.com/file/download/${candidateId}`, {
            responseType: 'blob',
          });
           console.log("download res : ",response)
          if (response.status === 201) {
            alert("Candidate CV not available. Please upload.");
          } else {
            const blob = new Blob([response.data]);
            const link = document.createElement('a');
      
            // Find the candidate by candidateId
            const findcandidate = data.find(candidate => candidate._id === candidateId);
      
            if (!findcandidate) {
              console.error('Candidate not found');
              return;
            }
      
            const fileName = `${findcandidate.name.replace(/\s+/g, '_')}_CV.pdf`; // Replace whitespace with underscores
      
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        } catch (error) {
          console.error('Error downloading CV:', error);
        }
      };
      
      
      

    const handleApplicant = async (index, value,candidateId) => {
        const newData = [...data];
        newData[index].status = value;
        setData(newData);

        try {
            const response = await axios.put(`https://jobportal-backend-yi43.onrender.com/post/update/${jobid}`, {
                status: value,
                candidateId : candidateId
            });
            if (response.status === 200) {
                console.log("Updated", response.data);
            } else {
                console.error('Update failed:', response.data);
            }
        } catch (error) {
            console.error('An error occurred while updating:', error);
        }
    };
    console.log(data)

    return (
      <>
       <div className='top-section'>
            <Form className='form-section-top' >
                <Row>

                <Form.Group controlId="formFile" as={Col} md="4" >
                      <FloatingLabel  
                  controlId="floatingInput"
                  label="Search Role" 
                >
                  <Form.Control type="text" placeholder="Java Developer"
                   name='jobtitle'
                   value={filter.jobtitle}
                   onChange={handleOnChange} />
                </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="formFile" as={Col} md="4" >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Location"
                  
                >
                  <Form.Control type="text" placeholder="city" 
                  name='location'
                  value={filter.location}
                  onChange={handleOnChange}/>
                </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="formFile" as={Col} md="4" className='d-flex' >
                <Button onClick={handleApplyFilters}><FontAwesomeIcon icon={faMagnifyingGlass}/> Find</Button>
                </Form.Group>
                </Row>
            </Form>
           </div>
        <div className='d-flex p-3'>
          {/* <FilterAdmin setData={setData}/> */}
          <FilterCandidate  
               filter={filter} 
               handleResetFilters={handleResetFilters}  
               handleOnChange={handleOnChange} handleApplyFilters={handleApplyFilters}/>
              {data.length == 0? <p className='text-center w-100 ' style={{fontSize:'30px',fontWeight:"600"}}>No Results Found.</p> : <div  style={{height:"100%",width:"80%"}} >
            {data.map((candidate, index) => (<div className='candidate-main'>
                <div className=' d-flex p-3 justify-content-around align-items-center ' key={index}>
                     <div className='ellipse-9' />
                    <div>
                        <h5 className='candidate-name'>{candidate.name.replace(/\b\w/g,c=>c.toUpperCase())}</h5>
                        <h5 className='candidate-job '>{candidate.role}</h5>
                        <h5 className='candidate-loc mb-2'>{candidate.currentCompany}</h5>
                        <h5 className='candidate-loc mb-2'>{candidate.location}</h5>
                    </div>
                    <div>
                    <p className='experience'>Experience : <span className='years ps-1'> {candidate.experience} years </span> </p>
                    <p className='experience'>CTC : <span className='years ps-1'> {candidate.currentctc} LPA </span> </p>
                    <p className='experience'>Notice Period : <span className='years ps-1'> {candidate.noticeperiod} Days </span> </p>
                    </div>
                    
                </div>
                    <div className='d-flex justify-content-evenly p-3'>
                         
                    <div  className='datae p-5 '>
                          <p ><FontAwesomeIcon icon={faEnvelope}/> Email : {candidate.email}</p>
                          <p><FontAwesomeIcon icon={faBuilding}/> Industry : {candidate.industry}</p>
                          <p><FontAwesomeIcon icon={faPhone}/> Phone Number : {candidate.phonenumber}</p>
                    </div>
                    <div  className='skill1 p-3'>
                        <h5>Skills : </h5>
                        <div className='m-3 '>
                       {candidate.keySkills.map((skill, index) => (
                            <div className="skill-items" key={index}>
                              <span className="skills-text" onClick={() => handleSkillEdit(index)}>{skill.replace(/\b\w/g,c=>c.toUpperCase())}</span>
                             
                           </div>
        ))}
      </div>
                   </div>
                    </div>
                    <div className='d-flex justify-content-center '> 
                    <button className='button-frame mb-3' onClick={() => handleDownload(candidate._id)}>
                         <FontAwesomeIcon className='down-arrow' icon={faArrowAltCircleDown}/>
                       <span className='download-resume'>Download Resume</span>
                    </button>

                    </div>
                </div> 
            ))}
            
            </div>}
        </div>
        </>
    );
}

export default ShowProfiles;

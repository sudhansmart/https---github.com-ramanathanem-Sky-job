import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import "../Style/jobcarddetails.css";
import { Link,useNavigate} from 'react-router-dom';
import FilterUser from './FilterUser';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

function Jobcarddetails() {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handleBackClick = () => {
      navigate(-1); // This navigates to the previous page
    };
   

    
    return (
        <>
        <Button onClick={handleBackClick}  className='backbtn'><FontAwesomeIcon  icon={faLeftLong}/></Button>
        <div className='jobdisplay  '>
            <FilterUser data={data} setData={setData} />
         {data.length == 0? <h6 className='nojob text-center w-100'>No Results Found</h6> :
         <div className='container '>
            <div className='row mb-4 ' >
                {data.map((job) => (
                    <div className='col-md-6 p-2' key={job.serialId}>
                        <div className='card mb-3 p-2' style={{ cursor: "pointer" }} >
                            <div className='card-body'>
                                <h5 id='job-role' className='card-title'>{job.jobtitle}</h5>
                                <p id='job-location' className='card-title'><i className="bi bi-geo-alt"></i> {job.location}</p>
                                <div className='row '>
                                    <p id='job-exp' className='col-md-5 p-1 m-1 '>Experience {job.experience} years</p>
                                    <p id='job-type' className='col-md-5 p-1 m-1'>{job.jobtype} <i className="bi bi-heart"></i></p>
                                </div>
                                <div className='row '>
                                  <p className='job-salary col-md-5  p-1 m-1'>UPTO {job.salary} LPA</p>
                                  </div>
                                <div className='job-require mt-3'>
                                {job.primarySkills && job.primarySkills.split('/').map((skill, index) => (
                                        <p key={index}><i className="bi bi-dot"></i>{skill}</p>
                                    ))}
                                </div>
                                <Link to ={`/jobdetails/${job._id}/${job.category}`}>
                              <div className='link_wrapper'>
                              <button className="button-17"> More info</button>
                              </div>
                              </Link>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>}
        </div>
        </>
    );
}

export default Jobcarddetails;


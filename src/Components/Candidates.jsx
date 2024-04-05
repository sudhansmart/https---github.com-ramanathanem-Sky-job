import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../Style/candidate.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import FilterAdmin from './FilterAdmin';


function Candidates() {
    const { jobid } = useParams();
    const [data, setData] = useState([]);
 


    const handleDownload = async (candidateId) => {
        try {
          const response = await axios.get(`https://jobportal-backend-yi43.onrender.com/file/download/${candidateId}/${jobid}`, {
            responseType: 'blob',
          });
          
          if (response.status === 201) {
            alert("Candidate CV not available. Please upload.");
          } else {
            const blob = new Blob([response.data]);
            const link = document.createElement('a');
      
            // Find the candidate by candidateId
            const findcandidate = data.find(candidate => candidate.candidateId === candidateId);
      
            if (!findcandidate) {
              console.error('Candidate not found');
              return;
            }
      
            const fileName = `${findcandidate.candidateName.replace(/\s+/g, '_')}_CV.pdf`; // Replace whitespace with underscores
      
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
        <div className='d-flex p-3'>
          <FilterAdmin setData={setData}/>
            <Row  className='w-70'>
            {data.map((candidate, index) => (
                <div className='candidate-main d-flex p-3 justify-content-around align-items-center w-80' key={index}>
                    <div>
                        <h5 className='candidate-name mb-3'>{candidate.candidateName}</h5>
                        <h5 className='candidate-job mb-2'>{candidate.jobtitle}</h5>
                        <h5 className='candidate-email mb-2'>Email: <span style={{color:'#35393C'}}>{candidate.candidateEmail}</span></h5>
                        <h5 className='candidate-email mb-2'>Phone: <span style={{color:'#35393C'}}>{candidate.candidatePhone}</span></h5>
                        <h5 className='candidate-email mb-2'>Location: <span style={{color:'#35393C'}}>{candidate.location}</span></h5>
                    </div>
                    <div>
                        <Button  style={{ fontSize: "14px" }} onClick={() => handleDownload(candidate.candidateId)}> <FontAwesomeIcon icon={faDownload} /> Download CV</Button>
                        <Form.Select className='mt-3'
                            // as="select"
                            value={candidate.status}
                            onChange={(e) => handleApplicant(index, e.target.value,candidate._id)}
                        >
                            <option value="New">New</option>
                            <option value="Under review">Under Review</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </Form.Select>
                    </div>
                </div>
               
            ))}
            </Row>
        </div>
    );
}

export default Candidates;

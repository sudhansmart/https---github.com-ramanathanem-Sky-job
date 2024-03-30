import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Form,FloatingLabel,Row,Col ,Button, FormLabel,FormGroup} from 'react-bootstrap'



function Employment() {
    const [authId, setAuthId] = useState(localStorage.getItem('authId'));
  const [education, setEducation] = useState({
    qualification: '',
    collegeName: '',
    startyear: '',
    passedout: '',
    degree: '',
  });

  useEffect(() => {
    
    fetchEducationData();
  }, []); 

  const fetchEducationData = async () => {
    try {
      
      const response = await axios.get(`http://localhost:5000/profile/specificprofile/${authId}`);
      const existingEducation = response.data.education;

     
      setEducation(existingEducation);
    } catch (error) {
      console.error('Error fetching education data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
        const response = await axios.post(`http://localhost:5000/profile/education/${authId}`, education);
       

        if(response.status == 201){
          setEducation({
            qualification: '',
            collegeName: '',
            startyear: '',
            passedout: '',
            degree: '',
          });
          handleCloseModal();

        }

     
    } catch (error) {
      console.error('Error submitting education data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div>
         <Form onSubmit={handleSubmit}>
          {/* <FloatingLabel controlId='qualification' label='Select Education' className='mb-3 mt-4'>
            <Form.Select
              className='form-select'
              aria-label='Default select example'
              onChange={handleChange}
              value={education.qualification}
              name='qualification'
              required
            > 
              <option value='PG'>Master/Post-Graduation</option>
              <option value='UG'>Graduation/Diploma</option>
              <option value='school'>School</option>
            </Form.Select>  
          </FloatingLabel> */}
         
          <p style={{fontWeight:"600"}}>Are you currently employed in this position?</p>

        <FloatingLabel controlId='collegeName' label='Designation' className='mb-3 mt-2'>
          <Form.Control
            type='text'
            placeholder='Enter University/Institute'
            onChange={handleChange}
            value={education.collegeName}
            name='collegeName'
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId='degree' label='Company Name' className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Enter Course'
            onChange={handleChange}
            value={education.degree}
            name='degree'
            required
          />
        </FloatingLabel>

        <Row>
          <Col md='6'>
            <FormLabel>Period</FormLabel>
            <FormGroup  as={Col} md="6" >
                  
                  <input
                      type="date"
                      id="datePicker"
                      name = 'dob'
                      //  value={profile.dob ? profile.dob.split('T')[0] : ''}
                     
                      // onChange={handleOnChange}
                    />
               </FormGroup> 
          </Col>

          <Col md='6'>
          <FormLabel>Worked Till</FormLabel>
          <FormGroup  as={Col} md="6" >
                  
                  <input
                      type="date"
                      id="datePicker"
                      name = 'dob'
                      //  value={profile.dob ? profile.dob.split('T')[0] : ''}
                     
                      // onChange={handleOnChange}
                    />
               </FormGroup> 
          </Col>
        </Row>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Employment
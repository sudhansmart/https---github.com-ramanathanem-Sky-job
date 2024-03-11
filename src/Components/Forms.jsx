import React, { useState } from 'react'
import "../Style/Forms.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export const Forms = () => {
  const [details, setDetails] = useState({
    name: '',
    mobileno: '',
    email: '',
    location: '',
    experience: '',
    currentctc: '',
    relocate: '',
    qualification: '',
    skill: '',
    expectedctc: '',
    gender: '',
    dob: '',
    currentcompany: '',
    noticeperiod: '',
  });
  const [errors, setErrors] = useState({
    mobileno: '',
    email: '',
    server: ''
  });

  const validEmails = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  const validMobileno = (mobileno) => {
    const mobilenoPattern = /^\d{10}$/;
    return mobilenoPattern.test(mobileno);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    const emailIdvalid = validEmails(details.email);
    const mobilelenovalid = validMobileno(details.mobileno);

    setErrors({
      email: emailIdvalid ? '' : 'Please enter a valid email',
      mobileno: mobilelenovalid ? '' : 'Mobileno must be at least 10 numbers',
      server: '',
    });
    if (emailIdvalid && mobilelenovalid) {
      console.log('sumbit successful:', details);
      setDetails({
        name: '',
        email: '',
        mobileno: '',
        location: '',
        experience: '',
        currentctc: '',
        relocate: '',
        qualification: '',
        skill: '',
        expectedctc: '',
        gender: '',
        dob: '',
        currentcompany: '',
        noticeperiod: '',
      })
    }
  }

  const handleSubmitOnChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevFromData) => ({
      ...prevFromData,
      [name]: value,
    }));
  }
  return (

    <div>
      <div className="container mt-4">
      <form  className="form">
        <div className="row">
          <div className="col-sm">
           
              <div className="form-group">
                <input type="text" className="form-control" required name='name'
                  onChange={handleSubmitOnChange} value={details.name}
                />
                <lable for="" className="form-lable">Enter Name</lable>

              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.location} name='location'
                />
                <lable for="" className="form-lable">Enter Location</lable>

              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.experience} name='experience'
                />
                <lable for="" className="form-lable">Enter Experience</lable>

              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.currentctc} name='currentctc' />
                <lable for="" className="form-lable">Enter CurrentCTC</lable>

              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.relocate} name='relocate'
                />
                <lable for="" className="form-lable">Enter  Relocate</lable>
              </div>

         
          </div>
          <div className="col-sm">
          

              <div className="form-group">
                <input type="text" className="form-control" 
                  name='mobileno' value={details.mobileno} onChange={handleSubmitOnChange}
                />
                {errors.mobileno && <p classNameName="error text-danger">{errors.mobileno}</p>}
                <lable for="" className="form-lable">Enter MobileNo</lable>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.qualification} name='qualification'
                />
                <lable for="" className="form-lable">Enter Qualification</lable>

              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.skill} name='skill'
                />
                <lable for="" className="form-lable">Enter skills</lable>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.expectedctc} name='expectedctc'
                />
                <lable for="" className="form-lable">Enter   expectedCTC</lable>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.gender} name='gender'
                />
                <lable for="" className="form-lable">Enter Gender</lable>
              </div>
            
        
          </div>
          <div className="col-sm">
          

              <div className="form-group">
                <input type="text" className="form-control" 
                  name='email' value={details.email}
                  onChange={handleSubmitOnChange}
                />

                {errors.email && <p classNameName="error text-danger">{errors.email}</p>}
                <lable for="" className="form-lable">Enter Email</lable>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.dob} name='dob'
                />
                <lable for="" className="form-lable">Enter  Dob</lable>

              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.currentcompany} name='currentcompany'
                />
                <lable for="" className="form-lable">Enter  CurrentCompany</lable>

              </div>
              <div className="form-group">
                <input type="text" className="form-control" required
                  onChange={handleSubmitOnChange} value={details.noticeperiod} name='noticeperiod'
                />
                <lable for="" className="form-lable">Enter Notice Period</lable>

              </div>
              <Form.Group classNameName="position-relative mb-3">
            <Form.Control
              type="file"
              required
              name="file"
              // onChange={handleChange}
            />
       
          </Form.Group>
          
          </div>
          <div className='text-center'>
            <button type="button" className="btn btn-primary  mt-5" onClick={handleSubmit} >Submit</button>
          </div>
        </div>
        </form>
      </div>

    </div>
  )
}

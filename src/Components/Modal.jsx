import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const  MyVerticallyCenteredModal = (props) => {
  const [jopposting, setJobposting]=useState({
  title:'',
  aboutcompany:'',
  category:'',
  location:'',
  jobtype:'',
  salary:'',
  skill:'',
 deadline:'',
 contact:'',
 Instructions:'',
 Privacy:'',

  })

  const handleSumbits=(e)=>{
    e.preventDefault();
    console.log('sumbit successful:', jopposting);
    setJobposting({
      title:'',
      aboutcompany:'',
      location:'',
      category:'',
  jobtype:'',
  salary:'',
  skill:'',
 deadline:'',
 contact:'',
 Instructions:'',
 Privacy:'',
    })
  }

  const handleOnchanges=(e)=>{
    const {name,value}= e.target;
    setJobposting((prevFromData)=>({
      ...prevFromData,
      [name]:value,
    }));
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

<Modal.Footer>
     
        <Button onClick={props.onHide} style={{color:"black"}}><i class="bi bi-x-lg"></i></Button>
      </Modal.Footer>
      <Modal.Body>
        
        <p className='text-center'>
        
        </p>
        <h5 className='text-center'>Job Posting Form</h5>
       <h6>JobTitle</h6>
       <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Enter Job Title</label>
  <input placeholder='Enter Job Title' className='form-control'
   name='title' onChange={handleOnchanges}
  value={jopposting.title}></input>
</div>
<div class="form-group">
                <select style={{ width: "220px" }} class="form-control form-control-lg mt-1" 
                 name='category' onChange={handleOnchanges}
                 value={jopposting.category}>
                  <option>Category</option>
                  <option>It</option>
                  <option>Bpo</option>
                  <option>sale & Marketing</option>
                  <option>Customer service</option>
                  <option>Account</option>
                  <option>Digital Marketing</option>
                  <option>Health care</option>
                  <option>Manifacturing</option>
                  <option>Skin clinic</option>
                  <option>Human Resource</option>
                  <option>Operation</option>
                  <option>Miscellaneous</option>
                </select>
              </div>
       <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Company Information</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder='Message'
  name='aboutcompany' onChange={handleOnchanges} value={jopposting.aboutcompany}
  ></textarea>

</div>
<div className="mb-3">
<label >Job Location</label>
  <input placeholder='Location' className='form-control'
  name='location' onChange={handleOnchanges} value={jopposting.location}></input>
  </div>
  <div className="mb-3">
<label >JobType</label>
  <input placeholder='Jobtype' className='form-control'
    name='jobtype' onChange={handleOnchanges} value={jopposting.jobtype}></input>
  </div>
  <div className="mb-3">
<label >Salary/Compensation</label>
  <input placeholder='Salary/Compensation' className='form-control'
    name='salary' onChange={handleOnchanges} value={jopposting.salary}></input>
  </div>     
 
  <div className="mb-3">
<label > Skills and Qualifications</label>
  <input placeholder=' Skills and Qualifications' className='form-control'
    name='skill' onChange={handleOnchanges} value={jopposting.skill}></input>
  </div> 
  <div className="mb-3">
<label >   Application Deadline</label>
  <input placeholder='   Application Deadline' className='form-control'
    name='deadline' onChange={handleOnchanges} value={jopposting.deadline}></input>
  </div> 
  <div className="mb-3">
<label > Contact Information</label>
  <input placeholder=' Contact Information' className='form-control'
    name='contact' onChange={handleOnchanges} value={jopposting.contact}></input>
  </div> 
  <div className="mb-3">
<label > Application Instructions</label>
  <input placeholder=' Application Instructions' className='form-control'
    name='Instructions' onChange={handleOnchanges} value={jopposting.Instructions}></input>
  </div> 
  <div className="mb-3">
<label > 
Privacy and Terms</label>
  <input placeholder='
Privacy and Terms' className='form-control'
name='Privacy' onChange={handleOnchanges} value={jopposting.Privacy}></input>
  </div> 



      </Modal.Body>
      <Modal.Footer>
      <Button  onClick={handleSumbits}>Sumbit</Button>
      
      </Modal.Footer>
    </Modal>
  )
}

export default  MyVerticallyCenteredModal

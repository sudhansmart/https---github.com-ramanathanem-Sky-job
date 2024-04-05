import React,{useState,useEffect}from 'react'
import { Button,Col,Form,Row } from 'react-bootstrap'
import axios from 'axios';
function EditForm({ candidateId,handleClose }) {
    const [formDatas, setFormDatas] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        qualification: '',
        clientName: '',
        position: '',
        currentCompany: '',
        overAllExp: '',
        relevantExp: '',
        currentCtc: '',
        expectedCtc: '',
        noticePeriod: '',
        interviewMode: '',
        remarks: '',
        file: null,
      });

      const [selectedProduct, setSelectedProduct] = useState(null);

      const fetchData = async () => {
        try {
          const response = await axios.get(`https://jobportal-backend-yi43.onrender.com/candidate/${candidateId}`);
          setFormDatas(response.data);
          console.log("res :",response.data);
          console.log("sel Products :",selectedProduct);
    
        } catch (error) {
          console.error('Error fetching candidate data:', error.message);
        }
      };
    
    
      useEffect(() => {
        fetchData();
      }, [candidateId]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDatas((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

      const handleEditSave = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', formDatas.name);
        formData.append('email', formDatas.email);
        formData.append('phoneNumber', formDatas.phoneNumber);
        formData.append('location', formDatas.location);
        formData.append('qualification', formDatas.qualification);
        formData.append('clientName', formDatas.clientName);
        formData.append('position', formDatas.position);
        formData.append('currentCompany', formDatas.currentCompany);
        formData.append('overAllExp', formDatas.overAllExp);
        formData.append('relevantExp', formDatas.relevantExp);
        formData.append('currentCtc', formDatas.currentCtc);
        formData.append('expectedCtc', formDatas.expectedCtc);
        formData.append('noticePeriod', formDatas.noticePeriod);
        formData.append('interviewMode', formDatas.interviewMode);
        formData.append('remarks', formDatas.remarks);
        formData.append('file', formDatas.file);
        try {
            console.log("submit :",formData)
           const response = await axios.put(`https://jobportal-backend-yi43.onrender.com/candidate/update/${candidateId}`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
        
              alert('Candidate data updated successfully!'); 
              handleClose()       
        } catch (error) {
            console.error('EDIT API Error:', error);
        }
      }

  return (
    <div>
        <Form onSubmit={handleEditSave}>
        <Row className="mb-3">
<Form.Group as={Col} md="3" controlId="validationFormik01">
  <Form.Label>Name</Form.Label>
  <Form.Control
    type="text"
    name="name"
    value={formDatas.name}
    onChange={handleChange}
  />
</Form.Group>
<Form.Group as={Col} md="3" controlId="validationFormik02">
  <Form.Label>Email</Form.Label>
  <Form.Control
    type="email"
    name="email"
    value={formDatas.email}
    onChange={handleChange}

  />
</Form.Group>
<Form.Group as={Col} md="3" controlId="validationFormik03">
  <Form.Label>Mobile No</Form.Label>
  <Form.Control
    type="number"
    name="phoneNumber"
    value={formDatas.phoneNumber}
    onChange={handleChange}
  />
</Form.Group>
<Form.Group as={Col} md="3" controlId="validationFormik04">
  <Form.Label>Location</Form.Label>
  <Form.Control
    type="text"
    placeholder="City"
    name="location"
    value={formDatas.location}
    onChange={handleChange}
  />
</Form.Group>
</Row>
<Row className="mb-3">

<Form.Group as={Col} md="3" controlId="validationFormik05">
  <Form.Label>Qualification</Form.Label>
  <Form.Control
    type="text"
    placeholder=""
    name="qualification"
    value={formDatas.qualification}
    onChange={handleChange}
  />
</Form.Group>
<Form.Group as={Col} md="3" controlId="validationFormik06">
  <Form.Label>Client Name</Form.Label>
  <Form.Control
    type="text"
    placeholder=""
    name="clientName"
    value={formDatas.clientName}
    onChange={handleChange}
  />
</Form.Group>
<Form.Group as={Col} md="3" controlId="validationFormik07">
  <Form.Label>Position</Form.Label>
  <Form.Control
    type="text"
    placeholder=""
    name="position"
    value={formDatas.position}
    onChange={handleChange}
  />
</Form.Group>
<Form.Group as={Col} md="3" controlId="validationFormik08">
  <Form.Label>Current Company</Form.Label>
  <Form.Control
    type="text"
    placeholder=""
    name="currentCompany"
    value={formDatas.currentCompany}
    onChange={handleChange}
  />
</Form.Group>
</Row>
<Row className="mb-3">

<Form.Group as={Col} md="2" controlId="validationFormik09">
 <Form.Label>Over All Experience</Form.Label>
 <Form.Control
   type="text"
   placeholder=""
   name="overAllExp"
   value={formDatas.overAllExp}
   onChange={handleChange}
   onBlur={(e) => {
    const { name, value } = e.target;
    handleChange({ target: { name, value: value.toUpperCase() } });
  }}
 /> 
</Form.Group>
<Form.Group as={Col} md="2" controlId="validationFormik10">
 <Form.Label>Relevant Experience</Form.Label>
 <Form.Control
   type="text"
   placeholder=""
   name="relevantExp"
   value={formDatas.relevantExp}
   onChange={handleChange}
   onBlur={(e) => {
    const { name, value } = e.target;
    handleChange({ target: { name, value: value.toUpperCase() } });
  }}
 />
</Form.Group>
<Form.Group as={Col} md="2" controlId="validationFormik11">
 <Form.Label>Current CTC</Form.Label>
 <Form.Control
   type="text"
   placeholder=""
   name="currentCtc"
   value={formDatas.currentCtc}
   onChange={handleChange}
   onBlur={(e) => {
    const { name, value } = e.target;
    handleChange({ target: { name, value: value.toUpperCase() } });
  }}
 />
</Form.Group>
<Form.Group as={Col} md="2" controlId="validationFormik12">
 <Form.Label>Expected CTC</Form.Label>
 <Form.Control
   type="text"
   placeholder=""
   name="expectedCtc"
   value={formDatas.expectedCtc}
   onChange={handleChange}
   onBlur={(e) => {
    const { name, value } = e.target;
    handleChange({ target: { name, value: value.toUpperCase() } });
  }}
 />

</Form.Group>
<Form.Group as={Col} md="2" controlId="validationFormik13">
 <Form.Label>Notice Period</Form.Label>
 <Form.Control
   type="text"
   placeholder=""
   name="noticePeriod"
   value={formDatas.noticePeriod}
  onChange={handleChange}
 />
</Form.Group>
<Form.Group as={Col} md="2" controlId="validationFormik13">
<Form.Label>Interview Mode</Form.Label>
<Form.Select
value={formDatas.interviewMode || 'Please Select'} // Use the 'value' prop for default value
name='interviewMode'
onChange={handleChange}
aria-label="select Here"
>
<option value="" >Please Select</option>
<option value="Walk-in">Walk-in</option>
<option value="Virtual">Virtual</option>
<option value="Telephonic">Telephonic</option>
</Form.Select>
</Form.Group>
</Row>
<Row>
<Form.Group controlId="formFile" as={Col} md="4" className="mb-3">
<Form.Label>Upload CV</Form.Label>
 
<Form.Control
  type="file"
  onChange={(e) => {
    handleChange(e); // Handle change to update other form fields
    setFormDatas((prevFormData) => ({ ...prevFormData, file: e.target.files[0] }));
  }}
  accept=".pdf, .doc, .docx"
/>
<span style={{color:'red'}}>{formDatas.cvpath}</span>
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>Remarks</Form.Label>
<Form.Control as="textarea"
name="remarks"
value={formDatas.remarks}
onChange={handleChange} rows={2} />
</Form.Group>
</Row>
<div className='d-flex' style={{justifyContent:'space-evenly'}}>
           <Button variant="secondary"  onClick={()=>handleClose()}  >Close</Button>
           <Button type="submit">Save Changes</Button>
          </div>

        </Form>

    </div>
  )
}

export default EditForm;
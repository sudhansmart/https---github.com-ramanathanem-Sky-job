import React from 'react'

function CvUpload() {
  return (
    <div>
          <Form>
          <Form.Group controlId="formFile" as={Col} md="4" className="mb-3">
            <Form.Label>Upload CV</Form.Label>
              <Form.Control type="file" 
              onChange={(e) => setFieldValue('file', e.target.files[0])}
              accept=".pdf, .doc, .docx" 
              ref={fileInputRef} className='mt-3'/>
      </Form.Group>
          </Form>

    </div>
  )
}

export default CvUpload
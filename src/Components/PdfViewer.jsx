import React, { useState } from 'react';

function PdfViewer() {
  const [pdfId, setPdfId] = useState('65eebf61db2efcd2ba2e939f');


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

 

  return (
    <div className='d-flex justify-content-center'>
      {pdfId && (
        <iframe
          src={`http://103.38.50.64/nodejs/file/pdfs/${pdfId}`}
          width= '300'
           height='400'
          title="PDF"
        ></iframe>
      )}
     
    
    </div>
  );
}

export default PdfViewer;

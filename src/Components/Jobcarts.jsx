import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/Jobcarts.css'
export const Jobcarts = () => {
    const Data = [
        { id: 1, domain:'IT', position:'Oracle GCP', exp:'6 Years Experience i',location:'chennai',Ctc:'Upto 24LPA',type:"Full Time"},
        { id: 2,  domain:'IT', position:'Python Alteryx', exp:'5 years Experience ',location:'chennai',Ctc:'Upto 19LPA',type:"Full Time"},
        { id: 3,  domain:'BPO', position:'401K Senior Analyst', exp:'5 years Experience',location:'Bangalore',Ctc:'Upto 15LPA',type:"Full Time"},
        { id: 4,  domain:'Human Resource', position:'HR Operations', exp:'6 Years Experience',location:'chennai',Ctc:'Upto 12LPA',type:"Full Time"},
        { id: 5, domain:'Sale & Marketing', position:'SOLUTION ARCHITECT', exp:'3 Years Experience ',location:'chennai',Ctc:'Upto 35LPA',type:"Full Time"},
        { id: 6, domain:'Digital Marketing', position:'Content Writer', exp:'3 Years Experience',location:'chennai',Ctc:'Upto 6LPA',type:"Full Time"},
        { id: 7, domain:'Digital Marketing ', position:'Digital Marketing Specialist', exp:'3 Years Experience',location:'chennai',Ctc:'Upto 6LPA',type:"Full Time"},
        { id: 8,  domain:'Account', position:'Finance Manager', exp:'8+ Experience Banking in Domain',location:'chennai',Ctc:'Upto 15LPA',type:"Full Time"},
      
      ];
  return (
    <div className='overallbox'> 
          <h2 id='hiring'>Top Hiring Companies!! </h2>
    <div className='bg-color-job '>
         <div >
      
        <div className='container mt-4 p-3' >
        <div className='row mb-4 ' >
        {Data.map((data,index) => (
         
            <div className='trail col-md-3' key={index}  >
             
             <div className='job-border m-2 p-2'>
             
             <div className='d-flex justify-content-end '>
                       
                       <p className='text-center view-job p-2'>View Job</p>
                         </div>
              <div className='d-flex justify-content-center'>
                
                 <p className='text-center it-domains m-0'>{data.domain.replace(/\b\w/g,c=>c.toLocaleUpperCase())}</p>
               </div>
                    <hr/>
             
                    <h5 className='text-center data-position'>{data.position.replace(/\b\w/g,c=>c.toLocaleUpperCase())}</h5>
                    <p className='text-center data-exp'>{data.exp}</p>
                    <div className='d-flex justify-content-around'>
                    <p className='text-center data-location-type'><i className="bi bi-geo-alt-fill" style={{color:"red"}}></i> {data.location.replace(/\b\w/g,c=>c.toLocaleUpperCase())}</p>
                    <p className='text-center data-location-type'>Job : {data.type.replace(/\b\w/g,c=>c.toLocaleUpperCase())}</p></div> 
                    <p className='text-center jobs-ctc'>{data.Ctc}</p>
                   
                    
            </div>
            </div>
           
               ))}
               
        </div>
      </div>
        </div>
    </div>
    </div>
  )
}

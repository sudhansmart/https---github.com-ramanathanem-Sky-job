import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/Jobcarts.css'
export const Jobcarts = () => {
    const Data = [
        { id: 1, domain:'HR', position:'Sr.HR Opns Manager', exp:'10+ Experience Hr Generalist Rols',location:'chennai',Ctc:'Upto 15LPA',type:"Full Time"},
        { id: 2,  domain:'Bpo', position:'SOLUTION ARCHITECT', exp:'10+ Experience Banking in Domain',location:'chennai',Ctc:'Upto 35LPA',type:"Full Time"},
        { id: 3,  domain:'Account', position:'SOLUTION ARCHITECT', exp:'10+ Experience Banking in Domain',location:'chennai',Ctc:'Upto 35LPA',type:"Full Time"},
        { id: 4, domain:'Sale & Marketing', position:'SOLUTION ARCHITECT', exp:'10+ Experience Banking in Domain',location:'chennai',Ctc:'Upto 35LPA',type:"Full Time"},
        { id: 5, domain:'Customer Service', position:'SOLUTION ARCHITECT', exp:'10+ Experience Banking in Domain',location:'chennai',Ctc:'Upto 35LPA',type:"Full Time"},
        { id: 6, domain:'Customer Service', position:'SOLUTION ARCHITECT', exp:'10+ Experience Banking in Domain',location:'chennai',Ctc:'Upto 35LPA',type:"Full Time"},
        { id: 7,  domain:'IT', position:'SOLUTION ARCHITECT', exp:'10+ Experience Banking in Domain',location:'chennai',Ctc:'Upto 35LPA',type:"Full Time"},
        { id: 8,  domain:'Customer Service', position:'SOLUTION ARCHITECT', exp:'10+ Experience Banking in Domain',location:'chennai',Ctc:'Upto 35LPA',type:"Full Time"},
      
      ];
  return (
    <div className='overallbox'> 
          <h2 id='hiring'>Top Hiring Companies!! </h2>
    <div className='bg-color-job '>
         <div >
      
        <div className='container mt-4 p-3' >
        <div className='row mb-4 ' >
        {Data.map((data) => (
            <div className='col-md-3' key={data.id} >
             
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

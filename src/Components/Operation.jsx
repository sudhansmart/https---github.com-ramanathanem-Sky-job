import React from 'react'

function Operation() {
    const Data=[
        {id:1, category :'Category: Software Development', role:'Role: React Js Front end developer',location:'Chennai' ,description:'Job Description: You will be responsible for creating and implementing web-based user interfaces using React.js, HTML, and CSS. You will work closely with architects and back-end developers to create world-class, user-friendly, responsive applications.'},
        {id:2, category :'Category: Software Development', role:'Role: Python developer', location:'Location: Pune'},
        {id:3, category :'Category: Software Development', role:'Role: .Net Full Stack Developer', location:'Location: Bangalore'},
        {id:4, category :'Category: Software Development', role:'Role: Flutter Developer',location:'Location: Mumbai'},
    ];
  return (
    <div className='container mt-5'>
        <div className='row mb-4 ' id='icon'>
          {Data.map((data) => (
            <div className='col-md-3' key={data.id}>
              <div className='card mb-3' style={{cursor:"pointer"}} >
                <div className='card-body'>
                  <h5 id='jobsfont'  style={{fontSize:"17px"}} className='card-title'>{data.category}</h5>
                  <h5 id='jobsfont'  style={{fontSize:"17px"}} className='card-title'>{data.role}</h5>
                  <h5 id='jobsfont'  style={{fontSize:"17px"}} className='card-title'>{data.location}</h5>
                  <h5 id='jobsfont'  style={{fontSize:"17px"}} className='card-title'>{data.description}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
   </div>
  )
}

export default Operation
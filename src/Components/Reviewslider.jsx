import React from 'react'
import '../Style/Reviewslider.css'
function Reviewslider() {
  const reviews = [
    {
      id:1,
      name:"david amos",
      content : "One of the best consultancy center to have well skilled HR's and recruiter. Recently I got the opportunity to get an amazing job, however I didn't join due to my personal issues. But I would say Shalini is one of the best recruiter you will ever meet, she follows up everyday and gives appropriate updates. She just not want to fill up candidates based on the client's requirements but also understands our requirements and needs. Thank you Shalini for the hardwork you did!!! A special thanks to Khalid for his extended support. Thanks team Skylark!!! Keep doing the same."
    },
    {
      id:2,
      name:"Vin diesel",
      content : "One of the best consultancy center to have well skilled HR's and recruiter. Recently I got the opportunity to get an amazing job, however I didn't join due to my personal issues. But I would say Shalini is one of the best recruiter you will ever meet, she follows up everyday and gives appropriate updates. She just not want to fill up candidates based on the client's requirements but also understands our requirements and needs. Thank you Shalini for the hardwork you did!!! A special thanks to Khalid for his extended support. Thanks team Skylark!!! Keep doing the same."
    },
    {
      id:3,
      name:"faul Walker",
      content : "One of the best consultancy center to have well skilled HR's and recruiter. Recently I got the opportunity to get an amazing job, however I didn't join due to my personal issues. But I would say Shalini is one of the best recruiter you will ever meet, she follows up everyday and gives appropriate updates. She just not want to fill up candidates based on the client's requirements but also understands our requirements and needs. Thank you Shalini for the hardwork you did!!! A special thanks to Khalid for his extended support. Thanks team Skylark!!! Keep doing the same."
    }
  ]
   
  return (
    <div className='p-4'>
    <h5 className='testtitle text-center'>Testimonials</h5>
    <div className='testmain mb-5'>
    {
      
     reviews.map((data) => (
      <div key={data.id} className="contents col-sm-3">
       
          <div className="test-body">
            <div className="item">
              {/* <img className='mb-2' src="https://livedemo00.template-help.com/wt_prod-10943/images/testimonials-1-120x120.jpg" /> */}
              <div className='imagedata mb-3'><p className='reviewername'>{data.name.charAt(0).replace(/\b\w/g,c=>c.toLocaleUpperCase())}</p></div>
              <div className="reviewname mb-4">{data.name.replace(/\b\w/g,c=>c.toLocaleUpperCase())}</div>
              <p>{data.content}</p>
            </div>
        </div>
       
      </div>
    ))
    
    }
     </div>
    {/* <div class="test-body">
        <div class="item">
            <img src="https://livedemo00.template-help.com/wt_prod-10943/images/testimonials-1-120x120.jpg"/>
            <div class="name">David Amos</div>
           
           
            <p>One of the best consultancy center to have well skilled HR's and recruiter. Recently I got the opportunity to get an amazing job, however I didn't join due to my personal issues. But I would say Shalini is one of the best recruiter you will ever meet, she follows up everyday and gives appropriate updates. She just not want to fill up candidates based on the client's requirements but also understands our requirements and needs. Thank you Shalini for the hardwork you did!!! A special thanks to Khalid for his extended support. Thanks team Skylark!!! Keep doing the same.</p>
        </div>
        </div> */}
        </div>
  )
}

export default Reviewslider

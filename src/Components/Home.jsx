import React from 'react'
import "../Style/Home.css"
import { Footer } from './Footer'
import JobsCategory from './JobsCategory'
import Card from './Card'
import { Jobcarts } from './Jobcarts'
import Clients from './Clients'
import ReviewSlider from './ReviewSlider'


export const Home = ({setAdmin}) => {
  return (
    <>
    <div className='image'>
      <div className='headersec'>
      <h1 className='hearderword'>Gateway for Mid & Senior <br/> level hiring</h1>
      <p className='hearderwords'>Opening Doors to Your Dream Job,Together</p>
      </div>
        
    </div>
    

     <Jobcarts/>
    <JobsCategory/>
    {/* <Card/> */}
    <Clients/>
    <ReviewSlider/>


<Footer setAdmin={setAdmin}/>
    </>
  )
}


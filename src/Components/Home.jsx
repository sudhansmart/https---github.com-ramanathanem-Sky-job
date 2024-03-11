import React from 'react'
import "../Style/Home.css"
import { Link } from 'react-router-dom'
import { Resume } from './Resume'
import { Footer } from './Footer'
import Reviewslider from './Reviewslider'
import JobsCategory from './JobsCategory'

export const Home = () => {
  return (
    <div>
    <div className='image text-center'>
        <div className='image-overlay '>
          <div className='p-4'>
            <p className='txt'id='jobsfont'>We are Hiring!!!</p>
            <h1 className='text mt-5' id='jobsfont'>The Easiest Way to Get Your New Job</h1>
            <h2 className='text ' id='jobsfont'>We offer 12000 jobs vacation right now</h2>
            <Link to="/forms"><span> <button className='butt' id='jobsfont' style={{fontSize:"15px"}}>Upload Your CV</button> </span> </Link>
            <div className='forms-group btn1 '>
        <button className='btns'><i className='fa fa-search'></i></button>
        <div>
        <input type='text' className='home-search' placeholder='Search something...' id='searchtext'/>
        </div>
        </div>
        </div>
    </div>
    </div>
    <JobsCategory/>
<Resume/>
<Reviewslider/>
<Footer/>
    </div>
  )
}


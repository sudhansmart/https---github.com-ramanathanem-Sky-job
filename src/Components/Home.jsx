import React,{useState,useEffect} from 'react'
import "../Style/Home.css"
import { Footer } from './Footer'
import JobsCategory from './JobsCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import navlogo from "../assets/Images/skylarklogo1.png";
import { Jobcarts } from './Jobcarts'
import Clients from './Clients'
import ReviewSlider from './ReviewSlider'
import axios from 'axios';
import banner from "../assets/Images/hme-img.png"
import { Link} from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import StepFormNew from './StepFormNew'

export const Home = ({setAdmin}) => {
  const [authId, setAuthId] = useState(localStorage.getItem('authId'));
  const [profileData, setProfileData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
     
  const fetchData = async () => {
  
    if(authId){
    
    }
    if (!authId) return;
   
    try {
      const response = await axios.get(`https://www.skylarkjobs.com/nodejs/profile/specificprofile/${authId}`);
      setProfileData([response.data]);
      if (response.data.firstLogin === true) {
        setModalShow(true);
      }
    } catch (error) {
      console.log("Error occurred while fetching profile data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [authId]);
   
  const handleClose = () => {
    setModalShow(false);
  };

  return (
    <>
         <Helmet>
        {/* Basic SEO meta tags */}
        <title>Skylarkjobs.com | Job Portal for Mid & Senior Level Jobs</title>
        <meta name="description" content="Join Skylarkjobs.com, a Job Portal for Mid & Senior Management. Register for exclusive listings. Your support grows our dedicated platform for professionals." />
        <meta name="keywords" content="Job search,
                              job portal,
                              Job listings,
                              senior management jobs,
                              mid-level jobs,
                              senior level jobs,
                              executive search,
                              career opportunities,
                              Job posting,
                              Job vacancies,
                              Job openings" />
        <meta name="author" content="Skylarkjobs" />

        {/* Open Graph meta tags for Facebook */}
        <meta property="og:title" content="Skylarkjobs" />
        <meta property="og:description" content="Join Skylarkjobs.com, a Job Portal for Mid & Senior Management. Register for exclusive listings. Your support grows our dedicated platform for professionals." />
        <meta property="og:image" content={navlogo}/>
        <meta property="og:url" content="https://skylarkjobs.com" />
        <meta property="og:type" content="website" />

        {/* Instagram specific meta tags */}
        <meta property="og:site_name" content="Skykarkjobs" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter card meta tags (optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Skykarkjobs" />
        <meta name="twitter:title" content="Skykarkjobs" />
        <meta name="twitter:description" content="Join Skylarkjobs.com, a Job Portal for Mid & Senior Management. Register for exclusive listings. Your support grows our dedicated platform for professionals." />
        <meta name="twitter:image" content={navlogo}/>
      </Helmet>
       
         <Modal
        fullscreen={true}
        show={modalShow}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton >
        <Modal.Title>Create Profile</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
          <StepFormNew handleClose={handleClose}/>
        </Modal.Body>
      </Modal>

       <div className='image'>
       <div className='headersec'>
        <div className='headerwordsec'>
           <p className='top-headerword' >Welcome to Skylark Jobs</p>
             <h1 className='hearderword'>Gateway for <br/> Mid & Senior level hiring</h1>
             <p className='hearderwords mt-4'>Elevate your career,soar to success</p>
             <Link to="/logs">
               <Button className='footer-button mb-4'  style={{color:"black" }}>Register Now <FontAwesomeIcon className='rightarrow' icon={faChevronRight} /><FontAwesomeIcon  className='rightarrow' icon={faChevronRight} /></Button>
         </Link>
        </div>

        <img src={banner} className='headerimg'/>
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


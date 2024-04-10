import React from 'react'
import {Form} from 'react-bootstrap'
import '../Style/findCandidate.css'
function FilterCandidateNew() {
  return (
    <>
    <div className='flex-row-bb'>
    <div className='rectangle-1c'>
      <div className='flex-row-cf'>
        <div className='frame-1d'>
         
          <span className='filter'>Filter</span>
        </div>
        <div className='vector-1e' />
      </div>
      <div className='rectangle-1f'>
        <span className='key-skills'>KeySkills</span>
      
        <Form.Control type="text" placeholder="" />

        <div className='flex-row-e-21'>
          <span className='experience-22'>
            Experience
            <br />
          </span>
          {/* <div className='rectangle-23' /> */}
        </div>
        <div className='flex-row-fc'>
          <div className='rectangle-24'>
            <span className='min'>Min</span>
            <div className='flex-column-d'>
              <div className='vector-25' />
              <div className='vector-26' />
            </div>
          </div>
          <button className='rectangle-27'>
            <span className='max'>Max</span>
            <div className='flex-column-ac'>
              <div className='vector-28' />
              <div className='vector-29' />
            </div>
          </button>
        </div>
      </div>
      <div className='rectangle-2a'>
        <span className='category'>Category</span>
        <div className='rectangle-2b'>
          <span className='select-one'>Select one</span>
          <div className='vector-2c' />
        </div>
        <span className='experience-2d'>
          Experience
          <br />
        </span>
        <div className='flex-row-b'>
          <div className='rectangle-2e'>
            <span className='min-2f'>Min</span>
            <div className='flex-column'>
              <div className='vector-30' />
              <div className='vector-31' />
            </div>
          </div>
          <button className='rectangle-32'>
            <span className='max-33'>Max</span>
            <div className='flex-column-a'>
              <div className='vector-34' />
              <div className='vector-35' />
            </div>
          </button>
        </div>
      </div>
      <div className='rectangle-36'>
        <span className='location'>Location</span>
        <div className='rectangle-37' />
        <span className='gender'>
          Gender
          <br />
        </span>
        <div className='rectangle-38'>
          <span className='select-one-39'>Select one</span>
          <div className='vector-3a' />
        </div>
      </div>
      <div className='rectangle-3b'>
        <span className='notice-period-3c'>Notice Period</span>
        <div className='rectangle-3d'>
          <div className='flex-column-af'>
            <div className='vector-3e' />
            <div className='vector-3f' />
          </div>
          <div className='rectangle-40' />
        </div>
        <span className='gender-41'>
          Gender
          <br />
        </span>
        <div className='flex-row-b-42'>
          <div className='frame-43'>
            <div className='ellipse-44' />
            <div className='ellipse-45' />
            <span className='male'>Male</span>
          </div>
          <div className='frame-46'>
            <div className='ellipse-47' />
            <div className='ellipse-48' />
            <span className='female'>Female</span>
          </div>
          <div className='frame-49'>
            <div className='ellipse-4a' />
            <div className='ellipse-4b' />
            <span className='others'>Others</span>
          </div>
        </div>
        <span className='find-by-name'>Find by Name</span>
        <div className='frame-4c'>
          <div className='rectangle-4d' />
        </div>
        <span className='find-by-email'>Find by e-mail</span>
        <div className='frame-4e'>
          <div className='rectangle-4f' />
        </div>
        <span className='find-by-phone'>Find by Phone </span>
        <div className='frame-50'>
          <div className='rectangle-51' />
        </div>
      </div>
      <div className='flex-row-a'>
        <button className='button-frame-52'>
          <div className='group' />
          <span className='reset'>Reset</span>
        </button>
        <button className='button-frame-53'>
          <span className='apply-filter'>Apply filter</span>
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default FilterCandidateNew
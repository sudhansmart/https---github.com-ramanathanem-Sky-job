import React from 'react'
import "../Style/findCandidates.css"
import { Form ,FloatingLabel,Row,Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ShowProfiles from './ShowProfiles'
function FindCandidates() {
  return (
    <div>
      

           <div className='content-section'>
                     <div className='search-section p-3'>
                     <ShowProfiles/>
                     </div>
                     
           </div>
    </div>
  )
}

export default FindCandidates
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../Style/filterUser.css';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';  



function FilterCandidate({ filter,handleResetFilters,handleOnChange,handleApplyFilters }) {


  return (
    <>
    <div className='filteruser p-3'>
      <Form>
        <Col xs='auto'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Keyskills</Form.Label>
            <Form.Control
              type='text'
              placeholder='Search'
              className='mr-sm-2'
              name='skills'
              value={filter.skills}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicRange'>
            <Form.Label>Experience</Form.Label>
            <Row>
              <Form.Group className='mb-3' as={Col} md="6" controlId='formBasicRange'>
                <Form.Control
                  type='number'
                  placeholder='Min'
                  className='mr-sm-2'
                  name='minyear'
                  value={filter.minyear}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className='mb-3' as={Col} md="6" controlId='formBasicRange'>
                <Form.Control
                  type='number'
                  placeholder='Max'
                  className='mr-sm-2'
                  name='maxyear'
                  value={filter.maxyear}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Row>
          </Form.Group>
          <Form.Group className='mb-3' as={Col} md="12" controlId="validationFormik04">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name='category'
              onChange={handleOnChange}
              value={filter.category}
              aria-label="select Here"
            >
              <option value="">Please Select</option>
              <option value="IT">IT</option>
              <option value="Bpo">BPO</option>
              <option value="salesMarketing">Sales & Marketing</option>
              <option value="CustomerService">Customer Service</option>
              <option value="Account">Account</option>
              <option value="DigitalMarketing">Digital Marketing</option>
              <option value="Healthcare">Health Care</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Skinclinic">Skin Clinic</option>
              <option value="HumanResource">Human Resource</option>
              <option value="Operation">Operation</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Current Company</Form.Label>
            <Form.Control
              type='text'
            
              className='mr-sm-2'
              name='currentCompany'
              value={filter.currentCompany}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter City'
              className='mr-sm-2'
              name='location'
              value={filter.location}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicRange'>
            <Form.Label>Gender</Form.Label>
            <Form.Select
              name='gender'
              onChange={handleOnChange}
              value={filter.gender}
              aria-label='select Here'
            >
              <option value=''>Select</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Notice Period</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Days'
              className='mr-sm-2'
              name='noticeperiod'
              value={filter.noticeperiod}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Find By Name</Form.Label>
            <Form.Control
              type='text'
             
              className='mr-sm-2'
              name='name'
              value={filter.name}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Find By Email</Form.Label>
            <Form.Control
              type='text'
              placeholder='Email'
              className='mr-sm-2'
              name='mail'
              value={filter.mail}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Find By Phone</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Phone Number'
              className='mr-sm-2'
              name='phonenumber'
              value={filter.phonenumber}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Col>
        <Col className='d-flex justify-content-around '>
          <Button variant="secondary" onClick={handleResetFilters}><FontAwesomeIcon icon={faRotateRight}/> Reset</Button>
          <Button variant="secondary" onClick={handleApplyFilters}>Apply Filters</Button>
        </Col>
      </Form>
    </div>
    </>
  );
}

export default FilterCandidate;

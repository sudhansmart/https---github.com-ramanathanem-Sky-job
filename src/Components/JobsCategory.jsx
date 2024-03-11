import React from 'react';
import It from '../assets/Images/It1.png';
import Bpo from "../assets/Images/bpo1.png"
import sale from "../assets/Images/sale1.png"
import customer1 from "../assets/Images/customer1.png"
import account from "../assets/Images/accounting.png"
import digital from "../assets/Images/digital1.png"
import health from "../assets/Images/medical.png"
import manifacture from "../assets/Images/building.png"
import skin from "../assets/Images/skin1.png"
import hr1 from "../assets/Images/hr2.png"
import operation from "../assets/Images/operation1.png"
import ms2 from "../assets//Images/ms3.png"
import { Link } from 'react-router-dom';
import "../Style/Jobrole.css"
function JobsCategory() {
  const Data = [
    { id: 1, name: 'IT', img: It,path:"/It" },
    { id: 2, name: 'Bpo', img: Bpo ,path:"/Bpo"},
    { id: 3, name: 'Sale & Marketing', img: sale ,path:"/Sale" },
    { id: 4, name: 'Customer service', img: customer1 ,path:"/Cs"},
    { id: 5, name: 'Account', img: account,path:"/Account" },
    { id: 6, name: 'Digital Marketing', img: digital, path:"/Digital" },
    { id: 7, name: 'Health care', img: health ,path:"/Health"},
    { id: 8, name: 'Manifacturing', img: manifacture ,path:"/Manifcutre" },
    { id: 9, name: 'Skin clinic', img: skin ,path:"/Skin" },
    { id: 10, name: 'Human Resource', img: hr1 ,path:"/Hr"},
    { id: 11, name: 'Operation', img: operation , path:"/Operation" },
    { id: 12, name: 'Miscellaneous', img: ms2 ,path:"/Ms" },
  ];
 
  return (
    <div>
      <h1 className='text-center mt-5' id='jobsfont' >
        BROWSE JOBS BY CATEGORY
      </h1>
      <div className='container mt-5 text-center' >
        <div className='row mb-4 ' id='icon'>
          {Data.map((data) => (
            <div className='col-md-3' key={data.id}>
              <div className='card mb-3' style={{cursor:"pointer"}} >
                <div className='card-body'>
                  <h5 id='jobsfont'  style={{fontSize:"17px"}} className='card-title'>{data.name}</h5>
                  <img src={data.img} alt={data.name} />
                </div>
                <Link to={data.path}>
                      <button className='btn btn-outline-secondary mb-2'  id='jobsfont' style={{fontSize:"14px"}}>{data.name}</button>
                    </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobsCategory;

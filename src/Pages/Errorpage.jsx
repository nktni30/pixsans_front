import React from 'react';
import ErrImg from "../assets/images/err.svg";
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row notfound">
            <div className="col-lg-4 mx-auto">
              <img className='img-fluid mx-auto' src={ErrImg} alt="error image"/>
            </div>
            <div className="row">
          <div className='col-sm-8 mx-auto text-center'>
            <Link className='nkt-btn' to={"/"}>Go to Home</Link>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Errorpage;
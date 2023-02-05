import React from "react";
import {FaInstagram, FaBehance, FaFacebookF} from 'react-icons/fa'

{/*Home Page Services */}
export function NktService({img, title, desc}){
    return(
        <div className="col-sm-3 mb-5">
        <div className="card nkt-card">
          <img className="card-img-top nkt-img-serv" src={img}/>
          <div className="card-body">
            <h5 className="card-title text-center nkt-gray">{title}</h5>
            <p className="card-text text-center mt-4 mb-5">{desc}</p>
          </div>
        </div>
      </div>
    )
}

{/* Homepage Team Section */}

export function NktTeam({img, title, desg}){
  return(
      <>
      <div className="col-sm-3">
              <div className="card nkt-card">
                  <div className="card-body">
                      <h5 className="card-title text-center nkt-gray mt-4">{title}</h5>
                      <div className="avatar mt-4 text-center">
                          <img class="profile" src={img} />
                      </div>
                      <p className="card-text text-center mt-4">{desg}</p>
                      <div className="d-flex mb-2 social-bar mx-auto justify-content-around">
                              <a href="#" class="social-link"><FaInstagram/></a>
                              <a href="#" class="social-link"><FaBehance/></a>
                              <a href="#" class="social-link"><FaFacebookF/></a>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

{/*Brand and Identity Services */}

export function BrandServices({img, title}){
  return(
    <div className="col-sm-4 p-4 mb-3">
    <div className="card nkt-card"
    data-aos="fade-up"
    data-aos-duration="3000">
      <div className="serv-card">
    <img className="card-img-top serv-img" src={img}/>
    </div>
        <div className="card-body">
            <h5 className="card-title text-center nkt-gray">{title}</h5>
        </div>
    </div>
</div>
  )
}

{/* Web and UI/UX Services */}

export function WebServices({img, title}){
  return(
    <div className="col-sm-4 p-4 mb-2">
    <div className="card nkt-card"
    data-aos="fade-up"
    data-aos-duration="3000">
    <div className="serv-card">
    <img className="card-img-top serv-img" src={img}/>
    </div>
        <div className="card-body">
            <h5 className="card-title text-center nkt-gray">{title}</h5>
        </div>
    </div>
</div>
  )
}

{/* Social Media Services */}

export function SocialMediaServices({img, title}){
  return(
    <div className="col-sm-4 p-4 mb-2">
    <div className="card nkt-card"
    data-aos="fade-up"
    data-aos-duration="3000">
    <div className="serv-card">
    <img className="card-img-top serv-img" src={img}/>
    </div>
        <div className="card-body">
            <h5 className="card-title text-center nkt-gray">{title}</h5>
        </div>
    </div>
</div>
  )
}


{/* Print Graphics Services */}

export function PrintingServices({img, title}){
  return(
    <div className="col-sm-4 p-4 mb-2">
    <div className="card nkt-card"
    data-aos="fade-up"
    data-aos-duration="3000">
    <div className="serv-card">
    <img className="card-img-top serv-img" src={img}/>
    </div>
        <div className="card-body">
            <h5 className="card-title text-center nkt-gray">{title}</h5>
        </div>
    </div>
</div>
  )
}
import React from "react";
import ServiceBanImg from '../assets/images/service_bg.svg';

const ServiceBanner = () => {
    return (
        <>
            
            <div className="container mt-md-5 mt-5">
                <div className="row">
                    <div className="col-md-7 col-sm-6 ">
                        <div className="row mt-md-5 text-center text-md-start"> 
                                    
                                <h1 className="nkt-teal nkt-banner-font animate__animated animate__fadeInLeft">Our<br /><span className="nkt-orange">Services</span></h1>
                                <p className="nkt-font mt-md-5 mt-1 animate__animated animate__fadeInLeft animate__delay-1s 1s">We provide many serivces for your entrepreneur</p>
                                
                                
                        </div>
                        
                    </div>
                    <div className="col-md-5 order-first order-md-last col-sm-6">
                        <img className="ban-img animate__animated animate__fadeInRight" src={ServiceBanImg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceBanner;

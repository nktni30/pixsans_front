import React from "react";
import { Link } from "react-router-dom";
import BanImg from '../assets/images/banner_img.svg';

const Banner = () => {
    return (
        <>
            <div className="container-fluid bg-nkt">

            </div>
            <div className="container mt-md-5 mt-5">
                <div className="row">
                    <div className="col-md-7 col-sm-6 ">
                        <div className="row mt-md-5 text-center text-md-start"> 
                                    
                                <h1 className="nkt-teal nkt-banner-font" data-aos="fade-right" data-aos-duration="1000">Welcome to Zone<br /> of <span className="nkt-orange">Graphics</span></h1>
                                <p className="nkt-font mt-md-5 mt-1" data-aos="fade-right" data-aos-duration="1500">Its a freelance graphics coummunity for entrepreneur</p>
                                <p className="nkt-font mt-md-4" data-aos="fade-right" data-aos-duration="2000">Our creative graphic designing services includes
                                    outstanding and attention-grabbing visuals for
                                    brochures, banners, flyers, business cards,
                                    e-books, and many more.</p>
                                
                        </div>
                        <div className="row mt-md-5 mt-2">
                            <div className="col-md-12 text-center text-md-start" data-aos="fade-right" data-aos-duration="2000">
                                <Link to={'/Contact'} className="nkt-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 order-first order-md-last col-sm-6" data-aos="fade-left" data-aos-duration="1000">
                        <img className="ban-img" src={BanImg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;

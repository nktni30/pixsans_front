import React from "react";
import Banner from '../Components/Banner';
import Stats from '../assets/images/left_stats.svg';
import Work from '../Components/WorkProcess';
import ContactCard from "../Components/ConatctCard";
import Footer from '../Components/Footer';
import { MainService, TeamCards } from "../utils/Data";
import { NktService, NktTeam } from "../Components/Cards";
import Stuffs from '../assets/images/awesome_stuff.png';

const Home = () => {
    return (
        <>
            <Banner />
            <div className="nkt-10"></div>

            {/* Service Sections */}

            <div className="container">
                <div className="row mt-md-5">
                    <div className="col-lg-6 mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                        <h2 className="nkt-h2 text-center">What We Will do for<br /> Your <span className="nkt-orange">Business</span>  </h2>
                    </div>
                </div>
                <div className="row mt-5 justify-content-between"
                data-aos="fade-up"
                data-aos-duration="3000">
                    {/*Service block*/}
                    {MainService && MainService.map((item) =>
                        <NktService
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                        />
                    )}

                </div>

                {/* /Service Sections */}
                <div className="mt-md-5"></div>

                {/* Make Business Section */}
                <div className="row">
                    <div className="col-sm-6 nkt-left-bg"
                     data-aos="fade-right"
                     data-aos-duration="2000">
                        <img className="img-fluid mt-5 pe-5 pt-5" src={Stats} />
                    </div>

                    <div className="col-sm-6 mt-5"
                    data-aos="fade-left"
                    data-aos-duration="2000">
                        <div className="row text-center text-md-start text-lg-start">
                            <h2 className="nkt-h2">We Make Your <sapn className="nkt-orange">Business</sapn> Reach<br /> More <sapn className="nkt-orange">Customers</sapn></h2>
                            <p className="nkt-font mt-4">Being a pioneer in graphic design,<br/>
                                we creates magnificent designs<br/>
                                that transform the standard<br />
                                of your online business across<br />
                                various platforms</p>
                                </div>

                        <div className="row mt-md-5 mt-3 text-center text-md-start text-lg-start">
                            <div className="col-md-12">
                                <a href="#" className="nkt-btn">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Make Business Section */}

                <div className="nkt-10"></div>

                {/* Our Awesome Stufss */}
                <div className="row">
                    <div className="col-sm-6"
                    data-aos="fade-right"
                    data-aos-duration="2000">
                        <div className="row text-center mt-5 text-md-start text-lg-start">
                        <h2 className="nkt-h2">Our Awesome<br /><sapn className="nkt-orange">Stuffs</sapn></h2>
                        <p className="nkt-font mt-4">Our designers do smart and creative
                            work to convey your business ideas
                            to the audiaence to through impressive
                            <span >graphic design</span></p>
                            </div>  
                        <div className="row mt-md-5 mt-3 text-center text-md-start text-lg-start">
                            <div className="col-sm-12">
                                <a href="#" className="nkt-btn">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 order-first order-md-last nkt-right-bg"
                    data-aos="fade-left"
                    data-aos-duration="2000">
                        <img className="img-fluid nkt-right-img" src={Stuffs}/>
                    </div>
                </div>
                {/* /Our Awesome Stufss */}
                <div className="nkt-10"></div>

                {/* How We Work */}
                
                <Work/>

                {/* How We Work */}

                <div className="mt-5"></div>

                {/* Team Section */}

                {/* <div className="row mt-5">
                    <div className="col-lg-6 mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                        <h2 className="nkt-h2 text-center">Meet Our Creative <br/>
                        <sapn className="nkt-orange">Team</sapn></h2>
                    </div>
                </div>

                <div className="nkt-5"></div>
                
                <div className="row justify-content-between"
                data-aos="fade-up"
                data-aos-duration="3000"> */}
                    {/*Team blocks */}
                    {/* {TeamCards && TeamCards.map((item)=> */}

                    {/* <NktTeam */}
                    {/* // img={item.img} */}
                    {/* // title={item.title} */}
                    {/* // desg={item.desg} */}
                    {/* /> */}
                    {/* )} */}
                {/* </div> */}
                

                <div className="nkt-10"></div>

                <ContactCard/>
                
                <div className="nkt-5"></div>

            </div>
            {/*Footer section */}
            

            <Footer/>










        </>
    )
}

export default Home;

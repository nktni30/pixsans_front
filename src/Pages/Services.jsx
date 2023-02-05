import React from "react";
import ServiceBanner from "../Components/Service_Banner";
import Footer from "../Components/Footer";
import { BrandServices, PrintingServices, SocialMediaServices, WebServices } from "../Components/Cards";
import { BrandingIdentity, PrintDesign, SocialMedia, WebUi } from "../utils/Data";

const Services = () => {
    return (
        <>
<ServiceBanner/>
<div className="nkt-10"></div>
            <div className="container">

                {/*identity Brand */}
                <div className="row mt-5">
                    <div className="col-lg-6 mx-auto">
                        <h2 className="nkt-h2 text-center" 
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        ><sapn className="nkt-orange">Identity </sapn>& <sapn className="nkt-orange">Brand </sapn><br />
                            Design</h2>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    {BrandingIdentity && BrandingIdentity.map((item) =>
                        <BrandServices
                            img={item.img}
                            title={item.title}
                        />
                    )}
                </div>

                {/*Web Ui Design */}
                <div className="row mt-5">
                    <div className="col-lg-6 mx-auto">
                        <h2 className="nkt-h2 text-center"
                        data-aos="fade-up"
                        data-aos-duration="3000"><sapn className="nkt-orange">Web & UI/UX</sapn><br />
                            Design</h2>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    {WebUi && WebUi.map((item) =>
                        <WebServices
                            img={item.img}
                            title={item.title}
                        />
                    )}
                </div>



                {/*Social Media Graphics */}
                <div className="row mt-5">
                    <div className="col-lg-6 mx-auto">
                        <h2 className="nkt-h2 text-center"
                        data-aos="fade-up"
                        data-aos-duration="3000"><sapn className="nkt-orange">Social Media</sapn><br />
                            Graphics</h2>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    {SocialMedia && SocialMedia.map((item) =>
                        <SocialMediaServices
                            img={item.img}
                            title={item.title}
                        />
                    )}
                </div>


                {/* Printing Design */}
                <div className="row mt-5">
                    <div className="col-lg-6 mx-auto">
                        <h2 className="nkt-h2 text-center"
                        data-aos="fade-up"
                        data-aos-duration="3000"><sapn className="nkt-orange">Printing </sapn>
                            Design</h2>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    {PrintDesign && PrintDesign.map((item) =>
                        <PrintingServices
                            img={item.img}
                            title={item.title}
                        />
                    )}
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Services;

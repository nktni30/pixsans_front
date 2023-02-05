import React from "react";
import AboutBanner from "../Components/AboutBanner";
import NktFooter from "../Components/Footer";

const About = () => {
    return (
        <>
        <AboutBanner/>
        <div className="nkt-5"></div>

        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                <h2 className="nkt-h2 text-center">About</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <p className="nkt-font">
                        This is the freelance community.
                    </p>
                </div>
            </div>
        </div>
            <NktFooter/>
        </>
    )
}

export default About;
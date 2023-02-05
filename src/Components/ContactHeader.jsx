import React from "react";
import ContBg from "../assets/images/contact_bg.svg";

const ConatctHeader=()=>{
    return(
        <>
        <div className="container-fluid bg-nkt">

</div>
<div className="container mt-md-5 mt-5">
    <div className="row">
        <div className="col-md-7 col-sm-6 ">
            <div className="row mt-md-5 text-center text-md-start"> 
                        
                    <h1 className="nkt-teal nkt-banner-font animate__animated animate__fadeInLeft"><span className="nkt-orange">Contact</span><br/>Us</h1>
                    <p className="nkt-font mt-md-5 mt-1 animate__animated animate__fadeInLeft animate__delay-1s">Reach us! If you have project in mind.</p>
                    
            </div>
            
        </div>
        <div className="col-md-5 order-first order-md-last col-sm-6">
            <img className="ban-img animate__animated animate__fadeInRight" src={ContBg} />
        </div>
    </div>
</div>
        </>
    )
}

export default ConatctHeader;
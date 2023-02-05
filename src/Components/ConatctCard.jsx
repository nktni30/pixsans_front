import React from "react";
import { Link } from "react-router-dom";


const ContactCard=()=>{
    return(
        <>
        <div className="row mb-5">
            <div className="col-lg-12"
            data-aos="fade-up"
            data-aos-duration="3000">
                    
                    <div className="ct-ban-img p-5">
                    
                        <div className="row">
                            <div className="col-lg-6 text-center text-md-start">
                            <h2 className="nkt-ct-h2 text-white ">Have project in mind?</h2>
                            <p className="nkt-ct-p mt-5">Get in touch with us<br/>We are here for you</p>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-md-end justify-content-center">
                                <Link className="nkt-btn-white" to={"/Contact"}>Contact Us</Link>
                            </div>
                    </div>
                    </div>  
            </div>
        </div>
        </>
    )
}

export default ContactCard;
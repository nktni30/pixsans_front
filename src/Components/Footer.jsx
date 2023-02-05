import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaBehance, FaFacebookF, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useFormik } from "formik";
import { SubscribeSchema } from "../schemas/Schemas";
import Swal from "sweetalert2";

const subsValues = {
    email: "",
}


const NktFooter = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: subsValues,
        validationSchema: SubscribeSchema,
        onSubmit: async (values, action,) => {
            const { email } = values;

            const res = await fetch("/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });

            const data = await res.json();
            if (res.status === 422 || !data) {
                Swal.fire({
                    title: 'Subscription failed',
                    text: 'You are existing Subscriber',
                    position: 'center',
                    icon: 'error',
                    timer: 3000,
                    timerProgressBar: true,
                })
                console.log("Subscription Failed");
            } else {
                Swal.fire({
                    title: 'You have been Subscribed Succesfully',
                    position: 'center',
                    icon: 'success',
                    timer: 3000,
                    timerProgressBar: true,
                    confirmButtonColor: '#4FA3A5'
                })
                console.log("Subscribed Succesfully");
            }

            action.resetForm();
        },
    });


    return (
        <>
            <div className="container-fluid bg-dark-teal">
                <div class="container pb-4">
                    <footer class="row ">
                        <div className="row py-5">
                            <div className="col-sm-6 text-center text-md-left">
                                <h3 className="subs-text">Subscribe to Newsletter</h3>
                            </div>
                            <div className="col-sm-6">
                                <form method="POST" id="subscribe-from">
                                <div className="Subscribe d-flex justify-content-center justify-content-md-end">
                                    <input className="subs-input" placeholder="Enter your E-mail" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" type="email"></input>
                                    <button onClick={handleSubmit} className="subs-btn">SUBSCRIBE</button>  
                                </div>
                                <div className="row text-center">
                                    {errors.email && touched.email ? (<span className="text-err">{errors.email}</span>) : null}
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div class="col-sm-3 mb-3">
                            <h5 className="text-white text-center text-md-start text-lg-start">Resources</h5>
                            <ul class="nav flex-column text-center text-md-start text-lg-start">
                                <li class="nav-item mb-2"><Link to={"/Contact"} class="p-0 footer-link">Pricing</Link></li>
                                <li class="nav-item mb-2"><Link to={"/Service"} class="p-0 footer-link">Service</Link></li>
                                <li class="nav-item mb-2"><Link to={"/Contact"} class="p-0 footer-link">Contact</Link></li>
                            </ul>
                        </div>

                        <div class="col-sm-3 mb-3">
                            <h5 className="text-white text-center text-md-start text-lg-start">Community</h5>
                            <ul class="nav flex-column text-center text-md-start text-lg-start">
                                <li class="nav-item mb-2"><Link to={"/About"} class="p-0 footer-link">About</Link></li>
                                <li class="nav-item mb-2"><Link to={"/Blog"} class="p-0 footer-link">Blog</Link></li>
                                <li class="nav-item mb-2"><Link to={"/Works"} class="p-0 footer-link">Works</Link></li>

                            </ul>
                        </div>

                        <div class="col-sm-3 mb-3">
                            <h5 className="text-white text-center text-md-start text-lg-start">Information</h5>
                            <ul class="nav flex-column text-center text-md-start text-lg-start">
                                <li class="nav-item mb-2"><Link to={"/TnC"} class="p-0 footer-link">Terms and Condition</Link></li>
                                <li class="nav-item mb-2"><Link to={"/PrivacyPolicy"} class="p-0 footer-link">Privacy Policy</Link></li>
                                <li class="nav-item mb-2"><Link to={"/CookiePolicy"} class="p-0 footer-link">Cookie Policy</Link></li>
                            </ul>
                        </div>

                        <div class="col-sm-3 mb-3">
                            <h5 className="text-white text-center text-md-start text-lg-start">Connect with us</h5>
                            <ul class="nav flex-column text-center text-md-start text-lg-start">
                                <li class="nav-item mb-2"><a href="tel:+918709194910" class="p-0 footer-link"><FaPhoneAlt /> +91 8709194910</a></li>
                                <li class="nav-item mb-2"><a href="mailto:info@pixsans.com" class="p-0 footer-link"><FaEnvelope /> info@pixsans.com</a></li>
                                <div class="d-flex mb-2 justify-content-between">
                                    <a href="https://www.instagram.com/pix_sans/" class="footer-icon"><FaInstagram /></a>
                                    <a href="https://www.behance.net/nitishkumar388" class="footer-icon"><FaBehance /></a>
                                    <a href="#" class="footer-icon"><FaYoutube /></a>
                                    <a href="https://www.facebook.com/pixsans22/" class="footer-icon"><FaFacebookF /></a>
                                </div>
                            </ul>
                        </div>

                    </footer>
                </div>
            </div>
            <div className="container-fluid bg-teal pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mx-auto text-center">
                            <p className="">Copyright 2022 <a className="text-footer" href="">pixsans.in</a> | Built by <a className="text-footer" href="">yourbugfixers.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NktFooter;
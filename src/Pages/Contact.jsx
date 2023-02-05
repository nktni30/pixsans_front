import React from "react";
import { useFormik } from "formik";
import ContactHeader from '../Components/ContactHeader';
import Footer from '../Components/Footer';
import { contactMessageScehma } from "../schemas/Schemas";
import Swal from "sweetalert2";



const MapPath = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.8409282924528!2d73.819874002512!3d18.490356328258628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe7bdffd307%3A0x47cfcd40e41e5b67!2sKarve%20Nagar%20Rd%2C%20Dnydeep%20Colony%2C%20Wanawari%2C%20Hingne%20Budrukh%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1666797197398!5m2!1sen!2sin"
]

const initialValues = {
    name: "",
    email: "",
    mobile: "",
    message: ""
}


const Contact = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: contactMessageScehma,
        onSubmit: async (values, action,) => {
            // console.log(
            //     "getting data",
            //     values
            // );
            const { name, email, mobile, message } = values;

            const res = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, mobile, message
                })
            });

            const data = await res.json();
            if (res.status === 422 || !data) {
                Swal.fire({
                    title: 'Message Not Sent',
                    text:'You have already messaged',
                    position: 'center',
                    icon: 'error',
                    timer: 3000,
                    timerProgressBar:true,
                })
                console.log("Message not Sent");
            } else {
                Swal.fire({
                    title: 'Messagae Sent Succesfully',
                    position: 'center',
                    icon: 'success',
                    timer: 3000,
                    timerProgressBar:true,
                    confirmButtonColor: '#FDAE38'
                })
                console.log("Message Sent Succesful");

            }

            action.resetForm();
        },
    });
    console.log(
        errors
    );


    // const [cmessage, contactMessage] = useState({
    //     name: "", email: "", mobile: "", message: ""
    // });

    // let name, value;

    // const handleSubmit = (e) => {
    //     console.log(e);

    //     name = e.target.name;
    //     value = e.target.value;

    //     contactMessage({ ...cmessage, [name]: value });
    // }

    // const SendMessage = async (e) => {
    //     e.preventDefault();
    //     const { name, email, mobile, message } = cmessage;


    //     const res = await fetch("/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name, email, mobile, message
    //         })
    //     });



    //     const data = await res.json();
    //     if (res.status === 422 || !data) {
    //         window.alert("Message not Sent");
    //         console.log("Message not Sent");
    //     } else {
    //         window.alert("Message Sent Succesfully");
    //         console.log("Message Sent Succesfully");

    //     }
    // }

    return (
        <>
            <ContactHeader />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-5 mx-auto">
                        <div className="card contact-card"
                        data-aos="fade-up"
                        data-aos-delay="2000">
                            <div className="card-body">
                                <form method="POST" className="form" id="contact-form">
                                    <div className="row mb-4 text-center">
                                        <h5 className="">Leave a message!</h5>
                                    </div>
                                    <div className="row mb-4">
                                        <input value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" id="name" type="text" placeholder="Your Name" className="nkt-form"></input>
                                        {errors.name && touched.name ? (<span className="text-err">{errors.name}</span>) : null}
                                    </div>
                                    <div className="row mb-4">
                                        <input value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" id="eamil" type="email" placeholder="Email" className="nkt-form"></input>
                                        {errors.email && touched.email ? (<span className="text-err">{errors.email}</span>) : null}
                                    </div>
                                    <div className="row mb-4">
                                        <input value={values.mobile} onChange={handleChange} onBlur={handleBlur} name="mobile" id="mobile" placeholder="Mobile" className="nkt-form"></input>
                                        {errors.mobile && touched.mobile ? (<span className="text-err">{errors.mobile}</span>) : null}
                                    </div>
                                    <div className="row mb-4">
                                        <textarea value={values.message} onChange={handleChange} onBlur={handleBlur} name="message" id="c-message" type="text" placeholder="Your Message" className="nkt-form nkt-txt-area"></textarea>
                                        {errors.message && touched.message ? (<span className="text-err">{errors.message}</span>) : null}
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <button onClick={handleSubmit} type="submit" value="sendQuery" className="nkt-btn-submit">Submit</button>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="nkt-5"></div>
            <div className="container-fluid">
                <div className="row mb-4"
                data-aos="fade-up">
                    <div className="col-lg-8 col-md-8 col-sm-12 mx-auto text-center">
                        <h2 className="nkt-h2 text-center">Locate<span className="nkt-orange"> Us</span> </h2>
                    </div>
                </div>
                <iframe src={MapPath} width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"data-aos="fade-up"
                data-aos-delay="1000"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default Contact;
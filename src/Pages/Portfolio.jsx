import React from "react";
import Footer from "../Components/Footer";


const Works = () => {
    return (
        <>
            <div className="container mb-5">
                <div className="row mt-5">
                    <div className="col-lg-6 mx-auto">
                        <h2 className="nkt-h2 text-center">Our<sapn className="nkt-orange"> Works</sapn></h2>
                    </div>
                </div>

                <div className="nkt-5"></div>

                <h2 className="text-center">Uploading sooon.......</h2>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" />
                                <a href="#!">
                                    <div className="mask" style={{backgroundCcolor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Calculated Date</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text-end">Author Name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            {/*Footer section */}
            

            <Footer/>

        </>
    )
}

export default Works;
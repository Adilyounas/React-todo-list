import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">

                            <div className="row ">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Grow your business with <strong className="brand-name">Dubai Gold Leaker</strong></h1>
                                    <h2 className="my-3"> {props.heading2} </h2>
                                    <dir className="mt-3">
                                        <NavLink to={props.linki} className="btn btn-outline-dark ">{props.page}</NavLink>
                                    </dir>
                                </div>

                                <div className="col-md-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="image" className="img-fluid" />
                                </div>

                            </div>

                            
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;
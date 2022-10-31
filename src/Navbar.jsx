import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    useNavigate,
  } from "react-router-dom";

  import "./App.css"

  function Navbar() {
    // const navigate = useNavigate()
    return (
        <>
        {/* <Router> */}


            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink  end to="/" className="navbar-brand ">Navbar</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                            <NavLink  end className="nav-link " aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  end className="nav-link a" to="/service">Services</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink  end className="nav-link a" to="/contact">Contact Us</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink  end className="nav-link a" to="/about">About Us</NavLink>
                                        </li>
                                        
                                       
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>

                    </div>

                </div>

            </div>
        {/* </Router> */}
        </>
    )
}

export default Navbar;
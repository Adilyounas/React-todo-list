import React from "react";
import { NavLink } from "react-router-dom";


function Card(props) {
    return (
        <>



            <div className="card d-flex text-center " id="cardii">
                <img src={props.apiSrc} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title " id="cardheading">{props.apiTitle}</h5>
                    <p id="cardpara" className="card-text">{props.apiDescription}</p>
                    <NavLink to="#" className="btn btn-primary" id="cardbtn">Go somewhere</NavLink>
                </div>
            </div>


        </>
    )
}

export default Card;
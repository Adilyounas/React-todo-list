import React from "react";
import web from "./imges/i.jpg"
import Common from "./Common"

function About() {
    return (
        <>
           <Common 
            heading2="Welcome to About page"
            imgsrc={web}
            page="Contact Us"
            linki="/contact"
           />
        </>
    )
}

export default About;
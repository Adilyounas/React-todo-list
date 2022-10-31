import React from "react";
import web from "./imges/2.jpg"
import Common from "./Common"

function Home() {
    return (
        <>
           <Common 
            heading2="We are the team of Perfection"
            imgsrc={web}
            page="About Us"
            linki="/about"
           />
        </>
    )
}

export default Home;
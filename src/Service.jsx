import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

function Service() {
    const [api, setApi] = useState([])

    async function myFunction() {
        const unsplash = await fetch("https://api.unsplash.com/search/photos?query=model&client_id=spQGD-CKJaWjgLDmwrG59HO0ecG3BNyIYByiip7DvfU")

        const jsonData = await unsplash.json()
        const unsplashArrayData = await jsonData.results
        // console.log(await unsplashArrayData);
        setApi(await unsplashArrayData)

    }


    useEffect(() => {
        myFunction()
    })


    return (
        <>
            <div className="text-center">
                <h2 id="our">Our Services</h2>
            </div>
            <div className="container-fluid" >
                <div className="row" >
                    <div id="bg" className="col-md-10  d-flex  mx-auto ">

                        {api.map((val) => {
                            return (
                                <>
                                    <Card
                                        apiSrc={val.urls.small}
                                        apiTitle={val.description}
                                        apiDescription={val.alt_description}
                                    />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
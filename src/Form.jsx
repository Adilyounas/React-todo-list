import { useState } from "react";
import React from "react";

function Form() {
    const [Entries, setEntries] = useState([])


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAdress] = useState("")
    const [name, setName] = useState("")
    const [city, setCity] = useState("")


    function mySubmiteFunction(e) {
        e.preventDefault()
        
        if (email && password && address && city && name) {
            const formObj = {
                email,
                password,
                address,
                name,
                city
            }
            setEntries([...Entries, formObj])
            setEmail("")
            setPassword("")
            setAdress("")
            setName("")
            setCity("")
        } else {
            alert("Please fill all fields")
        }

    }


    console.log(Entries);


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto d-flex justify-content-center align-items-center">

                        <form className="row g-3" id="formdiv" onSubmit={mySubmiteFunction}>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) =>
                                    setEmail(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e) =>
                                    setPassword(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e) => setAdress(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Jess Stuart" value={name} onChange={(e) =>
                                    setName(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">Provision / City</label>
                                <input type="text" className="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Form;
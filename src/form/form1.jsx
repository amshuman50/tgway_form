import React from 'react'
// import './form.css';
import InputField from './imput label/input';
const Form1 = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* <link rel="stylesheet" href="style.css" /> */}
                <div className="container">
                    <div className="text">Contact us</div>
                    <form action="#">
                        <div className='input_field'>
                            <InputField
                                label="First Name"
                                type="text"
                                isRequired="required"
                            />
                            <InputField
                                label="Middle Name"
                                type="text"
                            />
                        </div>
                        <div className='input_field'>
                            <InputField
                                label="Last Name"
                                type="text"
                                isRequired="required"
                            />
                            <InputField
                                label="Phone Number"
                                type="number"
                                isRequired="required"
                            />
                        </div>
                        <div className='input_field'>
                            <InputField
                                label="Your Email Address"
                                type="email"
                            />
                            <InputField
                                label="Secondary Email Address"
                                type="email"
                            />
                        </div>
                        <div className='input_field'>
                            <InputField
                                label="Product Name"
                                type="text"
                                isRequired="required"
                            />
                            <InputField
                                label="Type of Product"
                                type="text"
                            />
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea rows={8} cols={80} required defaultValue={"Hello"} />
                                <br />
                                <div className="underline" />
                                <label htmlFor="" >Write your message :</label>
                                <br />
                                <div className="form-row submit-btn">
                                    <div className="input-data" >
                                        <div className="inner" />
                                        <input type="submit" defaultValue="submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Form1

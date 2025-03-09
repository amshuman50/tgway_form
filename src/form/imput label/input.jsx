// import React from 'react'
// 
// const InputField = ({type,label}) => {
//     return (
//         <div>
//             <div className="form-row">
//                 <div className="input-data">
//                     <input type={type} required />
//                     <div className="underline" />
//                     <label htmlFor="">{label}</label>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default InputField


import { useState } from "react";
import '../form.css';

const InputField = ({ type, label, isRequired }) => {
    const [value, setValue] = useState("");

    return (
        <div className="form-row">
            <div className="input-data">
                <input 
                    type={type} 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    data-filled={value !== "" ? "true" : "false"}
                    required={isRequired} // Keeps "required" only for necessary fields
                />
                <div className="underline" />
                <label>{label}</label>
            </div>
        </div>
    );
};

export default InputField;

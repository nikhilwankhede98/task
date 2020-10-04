import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Test = () => {
    const [details,setDetails] = useState([]);
    const [city,setCity] = useState([]);
    const [state,setState] = useState([]);
    const [district,setDistrict] = useState([]);

    axios
        .get("https://api.jsonbin.io/b/5f6f36397243cd7e824413f3")
        .then(res => {
            setDetails(res.data);
        })
        .catch(err =>alert(err));

    console.log(details);    
 
      
    return (
        <div className='Test'>
            <div>
            <h2>Cities</h2>
            {details.map((detail,index) => (
            <div key={index} >{detail.City}</div>
            ))}
            </div>
    
             <div>
            <h2>States</h2>
            {details.map((detail,index) => (
                <div key={index} >{detail.State}</div>
            ))}
            </div>
    
            <div>
            <h2>Districts</h2>
            {details.map((detail,index) => (
                <div key={index} >{detail.District}</div>
            ))}
            </div>
        </div>    
        );    
}    
export default Test
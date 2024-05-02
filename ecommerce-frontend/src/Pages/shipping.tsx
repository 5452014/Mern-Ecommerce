import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping=()=>{
    const navigate=useNavigate()
    const [shippingInfo,setShippingInfo]=useState({
        address:"",
        city:"",
        state:"",
        country:"",
        pinCode:"",
    })
    const changehandler=(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setShippingInfo(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    return(
        <div className="shippping">
              
        <button className="back-btn" onClick={()=>navigate("/cart")}>
      <BiArrowBack />
        </button>

      <form action="">
    <h1>Shipping Address</h1>
    <input 
    required type="text"
    placeholder="Address" 
    name="address"
    value={shippingInfo.address}
    onChange={changehandler}/>
 
    <input 
    required type="text"
    placeholder="City" 
    name="city"
    value={shippingInfo.city}
    onChange={changehandler}/>

       <input 
    required type="text"
    placeholder="State" 
    name="state"
    value={shippingInfo.state}
    onChange={changehandler}/>
 
    <select name="country" required value={shippingInfo.country} onChange={changehandler}>
      <option value="">Choose Country</option>
      <option value="india">India</option>
      <option value="qatar">Qatar</option>
      <option value="riyadh">Riyadh</option>
      <option value="kuwait">Kuwait</option>
    </select>

       <input 
    required type="text"
    placeholder="pin Code" 
    name="pinCode"
    value={shippingInfo.pinCode}
    onChange={changehandler}/>
    <button type="submit"> Pay Now</button>
      </form>
        </div>
    )
}
export default Shipping;
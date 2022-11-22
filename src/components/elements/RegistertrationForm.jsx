import { useState, useEffect } from "react";
import { collection, doc, setDoc, addDoc, serverTimestamp } from "firebase/firestore"; 
import axios from "../../api/axios";
import {auth, db } from "../../firebase";
import {createUserWithEmailAndPassword } from "firebase/auth";

import "../styles/regForm.css";

//import axios from 'axios';

const RegistrationForm = (req, res) => {

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [check, setCheck] = useState(false)
  const [userType, setUserType] = useState('') 

  const handleFormSubmit = async (e)=>{ 
    e.preventDefault();
    const user = { fullName, phoneNumber, address };
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        userType
      )
      await setDoc(doc(db, "farmers", res.user.uid), {    
        data: user,
        timeStamp: serverTimestamp()          
        
      }).then((response)=>{ 
        console.log(response)  
      });
    } catch (error) {
      console.log(error)
    }
  
  }

 const handleChek = ()=>{  
    if(check === false){
      setUserType('farmer');
    }else{
      setUserType(''); 
    }
  }

  return (
    <div className="card card_reg">
      <div className="card-body card_reg-body"> 
        <form onSubmit={handleFormSubmit}> 
          <div className="mb-1">
            <label htmlFor="inputEmail" className="form-label"> 
              Full Name 
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}  
            />
          </div>
          <div className="mb-1">
            <label htmlFor="inputEmail" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPhoneNumber"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="inputEmail" className="form-label">
              Home Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="inputEmail" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                id="farmerAccount"
                value="cheked"
                aria-label="Checkbox for following text input"
                onChange={handleChek}
              />
            </div>
            <label htmlFor="farmerAccount" className="form-label">
              Check here to create account as a farmer
            </label>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

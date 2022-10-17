import { useState, useEffect } from 'react';
import '../styles/regForm.css'

const RegistrationForm = () => {

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false)
 
  const handleSubmit = (e)=>{
    e.preventDefault()

    console.log(fullName, phoneNumber, address, email, password);

    setFullName('')
    setPhoneNumber('')
    setAddress('')
    setEmail('')
    setPassword('')

    setSuccess(true)

  }
    return (
      <div className="card card_reg">
        <div className="card-body card_reg-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label htmlFor="inputEmail" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name='fullName'
                onChange={(e)=>setFullName(e.target.value)}/>
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
                onChange={(e)=>setPhoneNumber(e.target.value)}/>
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
                onChange={(e)=>setAddress(e.target.value)}/>
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
                onChange={(e)=>setEmail(e.target.value)}/>
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
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            
            <div className='d-flex justify-content-end'>
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
  
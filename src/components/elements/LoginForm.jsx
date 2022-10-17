import '../styles/login.css'
import { useRef, useState, useEffect } from "react";

const LoginForm = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [errmsg, setErrmsg] = useState('');

 

  const handleSubmit = (e)=>{
    e.preventDefault()

    console.log(username, password);

    setUsername('')
    setPassword('')

    setSuccess(true)

  }



  return (
    <div className="card card-login">
      <div className="card-body card_login">
        <form className='form-main ' onSubmit={handleSubmit} >
          <div className="mb-1">
            <label htmlFor="inputEmail" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              
            />
          </div>
          
          <div className='d-flex justify-content-end'>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

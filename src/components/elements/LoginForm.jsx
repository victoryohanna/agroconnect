import "../styles/login.css";
import {  useState, } from "react";
import { useDispatch } from "react-redux";
//import axios from "../../api/axios";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
import { authActions } from "../../redux/slice/auth-slice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errmsg, setErrmsg] = useState(false);
  const navigate = useNavigate();

  //const {dispatch} = useContext(AuthContext)
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(authActions.login(user.uid));
        navigate("/dashboard");
      })
      .catch((error) => {
        setErrmsg(true);
      });
  };

  return (
    <div className="card card_login ">
      <div className="card-body login_body">
        <form className="form-main " onSubmit={handleSubmit}>
          {errmsg && (
            <div className="error_section">
              <span>Invalid email or password</span>
            </div>
          )}

          <div className="mb-1">
            <label htmlFor="inputEmail" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn_login">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

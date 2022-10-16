import '../styles/regForm.css'

const RegistrationForm = () => {
    return (
      <div className="card card_reg">
        <div className="card-body card_reg-body">
          <form>
            <div className="mb-1">
              <label htmlFor="inputEmail" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"/>
            </div>
            <div className="mb-1">
              <label htmlFor="inputEmail" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"/>
            </div>
            <div className="mb-1">
              <label htmlFor="inputEmail" className="form-label">
                Home Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"/>
            </div>
            <div className="mb-1">
              <label htmlFor="inputEmail" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default RegistrationForm;
  
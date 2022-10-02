const LoginForm = () => {
  return (
    <div className="card w-50 mx-auto">
      <div className="card-body">
        <form>
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
            <label htmlFor="inputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
            />
          </div>
          {/* <div class="mb-3 form-check">
    
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

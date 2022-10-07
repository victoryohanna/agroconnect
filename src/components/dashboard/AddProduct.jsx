const NewProduct = () => {
  return (
    <div className="card w-50 mx-auto">
      <div className="card-body">
        <form>
        <div className="row">
          
          <div className="col-7">
          <div className="col mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Product name"
              aria-label="Product name"
            />
          </div>
          <div className="col mt-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Quantity"
              aria-label="Quantity"
            />
          </div>
          <div className="col mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              aria-label="Price"
            />
          </div>
          <div className="col mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              aria-label="Location"
            />
          </div>
          <div className="col mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              aria-label="Description"
            />
          </div>
          </div>
          <div className="col-3">
            <img src="" alt="" />
            <input
                    type="file"
                    className="btn__upload"
                    id="btn__upload"
                    accept="image/*"
                    name="file"
                    
                  />
          </div>
          
        </div>
        </form>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
        
      </div>
    </div>
  );
};

export default NewProduct;

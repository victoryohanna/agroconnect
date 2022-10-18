
import '../styles/productlist.css';

const ProductsList = () =>{
    return(
        <div className='container-fluid px-4'>
          <div className="card card-main">
      <div className="card-body ">
      <div className="table-responsive-sm">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Quantity</th>
                      <th>Sold</th>
                    </tr>
                  </thead>

                  <tbody>
                    
                        <tr>
                          <td className="table-row"></td>
                          <td className="table-row"></td>
                          <td className="table-row"></td>
                          <td className="table-row"></td>
                          <td className="table-row"></td>
                          
                        </tr>
                     
                  </tbody>
                </table>
              </div>
        
        
      </div>
    </div>
        </div>
    )
}

export default ProductsList;
import "../styles/productCategory.css";
import {Link} from 'react-router-dom'
const ProductCategory = ({ products }) => {
  return (
    <div className="container">
      {/* render category name from global state */}
      <h1>Prodcut Category</h1>
      <div className="row">
        {products.map((item, index) => { 
          return (
            <div className="col-md-4 borde product_cat" key={index}>
            <Link to='/'>
              <img src={item.imageUrl} alt="" />
              <p className="item_name">{item.productName}</p>
              </Link>  
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default ProductCategory;

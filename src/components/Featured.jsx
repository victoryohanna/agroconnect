import { Link } from "react-router-dom";
import "./styles/featured.css";

const Featured = ({ product }) => {
  return (
    <div className="container">
      <div className="popular__header-text">
        <h3>Categories</h3>
      </div>
      <div className="d-flex features__gallary">
        {product.map((item, index) => {
          return (
            <div className="" key={index}>
              <Link to="/products">
                <img className="pic" src={item.image} alt={item.name} />
                <p className="name__category">{item.category}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;

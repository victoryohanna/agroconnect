import { Link } from "react-router-dom";
import "./styles/popular_products.css";  


const PopularProducts = ({popularproducts}) => {
  return (
    <div className='container'>
        
      <div className='popular__header-text'>
        <h3>Popular Products</h3>
      </div>
      <Link to="/" >
        <div className="row"> 
        
      <div className='popular__gallary d-flex'> 
        {
            popularproducts.map((item, index)=>{
                return <img className="popular__img" src={item.image} key={index} alt={item.name} />
            })
        }
         
     
      </div>
      </div>
      </Link>
    </div>
  )
}

export default PopularProducts;
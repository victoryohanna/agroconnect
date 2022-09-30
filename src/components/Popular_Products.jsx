import { Link } from "react-router-dom";
import "./styles/popular_products.css"; 


const PopularProducts = ({popularproducts}) => {
  return (
    <div className='popular__container'>
        
      <div className='popular__header-text'>
        <h1>Popular Products</h1>
      </div>
      <Link to="/" >
      <div className='popular__gallary'>
        {
            popularproducts.map((item, index)=>{
                return <img className="popular__img" src={item.image} key={index} alt={item.name} />
            })
        }
         
      </div>
      </Link>
    </div>
  )
}

export default PopularProducts;
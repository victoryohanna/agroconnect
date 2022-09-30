import {Link} from 'react-router-dom'
import "./styles/featured.css"; 


const Featured = ({product}) => {
  return (
    <div className='features-containe'>
      <div className='features__header-text'>
        <h1>Featured Categories</h1>
      </div>
      <Link to="/">
      <div className='features__gallary'>
        
         {product.map((item, index)=>{
          return (
            <div>
           <img className="pic" src={item.image} key={index} alt={item.name} />
           <p className='name__category'>{item.category}</p>
           </div>
          )
           
         })}
          
      </div>
      </Link>
    </div>
  )
}

export default Featured;
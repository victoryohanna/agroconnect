import {Link} from 'react-router-dom'
import "./styles/featured.css"; 


const Featured = ({product}) => {
  return (
    <div className='container mt-3'>
      {/* <div className='card'>
        <div className='card-body'> */}
          <div className='row'>
            <div className='col-12'>
              <div className='card '>
                <div className='card-body d-flex'>
                {product.map((item, index)=>{
          return (
            <div className='col-sm-2'>
              
           <img className="pic" src={item.image} key={index} alt={item.name} />
           <p className='name__category'>{item.category}</p>
           </div>
           
          )
           
         })}
                </div>
              </div>
            </div>
          </div>
        </div>
    //   </div>
    // </div>


    
    // <div class="card">
    //   <div class="card-body">
    //     <div className='row'>
    //       <div className='col-sm-3'>
      // {product.map((item, index)=>{
      //     return (
      //       <div>
      //      <img className="pic" src={item.image} key={index} alt={item.name} />
      //      <p className='name__category'>{item.category}</p>
      //      </div>
      //     )
           
      //    })}
    //      </div>
    //      </div>
    //   </div>
    // </div>
 
  )
}

export default Featured;
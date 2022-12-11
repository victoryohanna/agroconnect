import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "../styles/productlist.css";

const ProductsList = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {    

      let list = []
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {

       list.push({id: doc.id, ...doc.data()})
        
      });

      setData(list)
      // console.log(list)
    };
    
    fetchData() 
  }, []);
  
  return (
    <div className="container-fluid px-4">
      <div className="card card-main">
        <div className="card-body  background-color ">
          <div className="table-responsive-sm bbb">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th> 
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  {/* <th>Sold</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((item, i)=>{
                  return(
                    <tr key={item.id}>
                      <td className="table-row">
                        <img src={item.imageUrl} alt={item.productName} />
                      </td>
                  <td className="table-row">{item.productName}</td> 
                  <td className="table-row">{item.category}</td>
                  <td className="table-row">{item.quantity}</td>
                  <td className="table-row"></td>
                  {/* <td className="table-row"></td> */}
                </tr>
                  )
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

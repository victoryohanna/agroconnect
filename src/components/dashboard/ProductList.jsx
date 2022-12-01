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
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data()); 
      });

      setData(list)
      // console.log(list)
    };
    
    fetchData() 
  }, []);

  console.log(data)
  
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
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Sold</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, i)=>{
                  return(
                    <tr>
                      <td className="table-row">
                        <img src={item.data.imageUrl} alt={item.data.productName} />
                      </td>
                  <td className="table-row">{item.data.productName}</td>
                  <td className="table-row"></td>
                  <td className="table-row"></td>
                  <td className="table-row">{item.data.quantity}</td>
                  <td className="table-row"></td>
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

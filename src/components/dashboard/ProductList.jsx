import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "../styles/productlist.css";

const ProductsList = () => {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "farmers"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data()); 
      });
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
  );
};

export default ProductsList;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
//import './styles/products.css';
import ProductCategory from "../components/elements/ProductCategory";

const Products = () => {
  const category = useParams();

  const getCategory = async ()=>{
    const q = query(
        collection(db, "products"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
  }
  useEffect(() => {
    console.log("Hello")
   getCategory() 
  }, []);

  return (
    <div className="products__container">
      <ProductCategory id={category} />
    </div>
  );
};

export default Products;

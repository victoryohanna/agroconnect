import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
//import './styles/products.css';
import ProductCategory from "../components/elements/ProductCategory";  
import { productsAction } from "../redux/slice/products-slice";

const Products = () => {
  const [products, setProducts] = useState([]);
 
  //when product component mounts, update the store with the list of products 
  //recieved from the server

  const queryParameter = useParams();
   let product = [];
  const category = queryParameter.id;
  const dispatch = useDispatch()

  useEffect(() => {

    const getCategory = async () => { 
      const productsRef = collection(db, "products");
      switch (category) {
        case "grains":
          const querObj1 = query(productsRef, where("category", "==", "grains"));
          const querySnapshot1 = await getDocs(querObj1);
          querySnapshot1.forEach((doc) => {
            product.push({ id: doc.id, ...doc.data() });
            // setProducts(product)
          });
          
          break;  
        case "tubers":
          const querObj2 = query(productsRef, where("category", "==", "tuber"));
          const querySnapshot2 = await getDocs(querObj2);
          querySnapshot2.forEach((doc) => {
            product.push({ id: doc.id, ...doc.data() });
          });
          break;
        case "fruits":
          const querObj3 = query(productsRef, where("category", "==", "fruits"));
          const querySnapshot3 = await getDocs(querObj3);
          querySnapshot3.forEach((doc) => {
            product.push({ id: doc.id, ...doc.data() });
          });
          break;
        case "vegitables":
          const querObj4 = query(
            productsRef,
            where("category", "==", "vegitable")
          );
          const querySnapshot4 = await getDocs(querObj4);
          querySnapshot4.forEach((doc) => {
            product.push({ id: doc.id, ...doc.data() });
          });
          break;
        case "livestock":
          const querObj5 = query(
            productsRef,
            where("category", "==", "livestock")
          );
          const querySnapshot5 = await getDocs(querObj5);
          querySnapshot5.forEach((doc) => {
            product.push({ id: doc.id, ...doc.data() });
          }); 
          break;
        case "eggs":
          const querObj6 = query(productsRef, where("category", "==", "eggs"));
          const querySnapshot6 = await getDocs(querObj6);   
          querySnapshot6.forEach((doc) => {
            product.push({ id: doc.id, ...doc.data()});
          });
          break;
        default:
          break;
      }
      
    setProducts(product);
    dispatch(productsAction.getProducts(product))
     
    };
    getCategory();
  },[]);

  return (
    <div className="products__container">
      <ProductCategory products={products} />
    </div>
  );
};

export default Products;

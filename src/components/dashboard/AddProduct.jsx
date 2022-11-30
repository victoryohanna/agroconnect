import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const NewProduct = () => {   
  
  const [file, setFile] = useState("");
  const [readFile, setReadFile] = useState("");
  const [per, setPer] = useState('');

  const [productName, setProductName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);

    const reader = new FileReader();
    reader.onload = (e) => {
      if (reader.readyState === 2) {
        setReadFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {productName, imageUrl, quantity, price, description, location, category}

    try {
      const res = await addDoc(collection(db, "products"), {
      data: product,
      timeStamp : serverTimestamp()
       
    })

    console.log(res.id)
    // .then((response)=>{
    //   console.log("This : " + response)
    // });
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const uploadFile = () => {

      // const name = new Date().getTime() + "_" + file.name
      const storageRef = ref(storage, file.name);  
  
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress)
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL)
          });
        }
      );
    };

    file && uploadFile()
  }, [file]);

  return (
    <div className="container-fluid px-4">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
                <div className="col mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product name"  
                    aria-label="Product name"
                    onChange={(e)=>setProductName(e.target.value)}
                  />
                </div>
                <div className="col mt-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e)=>setCategory(e.target.value)}
                  >
                    <option defaultValue={0}>Select Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col mt-3">
                  <input
                    type="text"  
                    className="form-control"
                    placeholder="Quantity"
                    aria-label="Quantity"
                    onChange={(e)=>setQuantity(e.target.value)} 
                  />
                </div>
                <div className="col mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    aria-label="Price"
                    onChange={(e)=>setPrice(e.target.value)}
                  />
                </div>
                <div className="col mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    aria-label="Location"
                    onChange={(e)=>setLocation(e.target.value)}
                  />
                </div>
                <div className="col mt-3">
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Description"
                    aria-label="Description"
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-3">
                <img src={readFile} alt="" />
                <input
                  type="file"
                  className="btn__upload" 
                  id="btn__upload"
                  accept="image/*" 
                  name="img"
                  onChange={onFileChange}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">  
            <button type="submit" className="btn btn-primary" disabled={per !== null && per<100}>
              Submit
            </button>
          </div>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default NewProduct;

import React from "react";
// import Grid from "@mui/material/Unstable_Grid2";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { useEffect,useState } from "react";
import axios from 'axios'

function Product() {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    // Fetch details of the specific product from the backend
    axios.get('http://localhost:8000/product')
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching details for frontend:`, error);
      });
  },[products]);

  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Product Section</h1>

      <div className="grid grid-cols-5 gap-6 rounded-lg  w-screen h-screen">
      {products.map((productN) => (
            <div key={productN.productId} className="h-32 w-32 m-5  rounded-lg  bg-slate-300 shadow-md hover:h-36 hover:w-36 mb-5">
              <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png" alt="" />
            <p className=" ">{productN.productN}</p>
            <p className=" ">{productN.company}</p>
            </div>
          
        ))}
      </div>
        
      
    </div>
    
  );
}

export default Product;

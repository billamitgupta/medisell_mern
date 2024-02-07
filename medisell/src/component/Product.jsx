import React from "react";

import { useEffect,useState } from "react";
import axios from 'axios'

function Product() {

  const [products, setProduct] = useState([]);
  // const navigate = useNavigate();
  // const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Fetch details of the specific product from the backend
    axios.get("http://localhost:8000/product")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching details for frontend:`, error);
      });
  },[products]);  
  
//  /product/del/:productName
  // const handleDelete = () => {
  //   // Send a DELETE request to remove the course
  //   setIsDeleting(true);
  //   axios.delete(`http://localhost:8000/product/del/${products}`)
  //     .then(() => {
  //       console.log('product deleted successfully.');
  //       navigate('/product'); // Redirect to the course list page
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting course:', error);
  //       setIsDeleting(false);
  //     });
  // };



  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Product Section</h1>

     
      <div className="grid grid-cols-5 gap-6 rounded-lg  ">
      {products.map((product_name) => (
            <div key={product_name.product_name} className="h-32 w-32 m-5  rounded-lg  bg-slate-700 shadow-md hover:h-36 hover:w-36 mb-14">
              <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png" alt="" />
            <p className=" ">{product_name.product_name}</p>
            <p className=" ">{product_name.product_price}</p>
            </div>
        ))}
      </div>
        
      
    </div>
    
  );
}

export default Product;

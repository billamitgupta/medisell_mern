import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";




function Singin() {

  const [userData, setUserData] = useState({
    fullname: '',
    dob: '',
    username: '',
    password: '',
    select: 'retailer',
    checkbox: false,
    avatar: null,
    coverImage: null, 
  });


    const handleChange = (e) => {
      const { name, value, type, checked, files } = e.target;
      if (type === 'file') {
        setUserData((prevData) => ({
          ...prevData,
          [name]: files[0], 
        }));
      } else {
        setUserData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!userData.avatar) {
        alert("Avatar is required!");
        return;
      }
  
      const formData = new FormData();
      Object.keys(userData).forEach((key) => {
        formData.append(key, userData[key]);
      });
  
      try {
        const response = await axios.post('https://0.0.0.0:8000/register', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log('User added successfully.', response.data);
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error adding user:', error);
      }
    };
  
  return (
    
   
      <div  className="w-screen h-screen">
        <div style={{background:
      "radial-gradient(243.55% 153.69% at 23.48% -1.07%, #EBF3F5 10.46%, #C5E2F0 100%) " ,paddingBottom:"17vh"}} className=' ml-36 mt-24 rounded-2xl border-4 w-9/12'>
        <form className=" responsive-form py-12 px-12" onSubmit={handleSubmit} >
        <label>
            Avatar <span className='text-red-500'>*</span>
            <br />
            <input
              className="border-2 rounded-lg w-72 mt-2 mb-2"
              type="file"
              name="avatar"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </label>
          <br />
          <label>
            Cover Image 
            <br />
            <input
              className="border-2 rounded-lg w-72 mt-2 mb-2"
              type="file"
              name="coverImage"
              onChange={handleChange}
              accept="image/*"
            />
          </label>
          <br />
      <label htmlFor="name" >
        Enter your Name <span className='text-red-500'>*</span>
        <br />
        <input
        className="border-2 rounded-lg w-72 mt-2 mb-2"
          type="text"
          name="name"
          placeholder="Name"

          onChange={handleChange}
          value={userData.name}
          required
        />
      </label>
      <br />
      <label htmlFor="dob" >
        DOB <span className='text-red-500'>*</span>
        <br />
        <input
        className="border-2 rounded-lg w-72 mt-2 mb-2"
          type="date"
          name="dob"
          placeholder="dob"
          value={userData.dob}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="username">
        Username <span className='text-red-500'>*</span>
        <br />
        <input
        className="border-2 rounded-lg w-72 mt-2 mb-2"
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="password" className="mt-6">
        Password <span className='text-red-500'>*</span>
        <br />
        <input
        className="border-2 rounded-lg w-72 mt-2 bg-slate-300 hover:bg-white"
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <div>
        <label htmlFor="select">
          Select <span className='text-red-500'>*</span>
          <select
          className="border-2 rounded-lg w-52 mt-10"
            name="select"
            value={userData.select}
            onChange={handleChange}
          >
            <option value="retailer">Retailer</option>
            <option value="Wholesale">WholeSale</option>
            <option value="company">Company</option>
          </select>
        </label>
      </div>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          checked={userData.checkbox}
        />
        Accept T&C <span className='text-red-500'>*</span>
      </label>
      <br />
      <div className="flex mt-12 ">
      <input
        type="submit"
        value="Submit"
        className=" w-24 h-12 border-2 rounded-lg bg-blue-500 hover:bg-blue-400 hover:text-white"
      />
      <Link to="/login">
        <input type="button" value="Login" className="mx-12 h-12 text-blue-500"/>
      </Link>
      </div>
    </form>
        </div>
      </div>
    
  );
}

export default Singin;

import React from "react";
import { Link } from "react-router-dom";



function Singin() {

  
  return (
    
   
      <div style={{background:
      "radial-gradient(243.55% 153.69% at 23.48% -1.07%, #EBF3F5 10.46%, #C5E2F0 100%)" ,height:"100%",paddingBottom:"17vh"}}>
        <div>
          <form action="" style={{ paddingTop: "6vh", marginLeft: "6vh" }}>
            <label htmlFor="username" style={{ padding: "1vh" }}>
              Enter your Name
              <br />
              <input
                type="textbox"
                placeholder="Name"
                style={{
                  border: "1px ",
                  margin: "1vh",
                  borderRadius: "1.5vh",
                  background: "#B4D8E4",
                  height: "5vh",
                  width: "40vh",
                }}
              />
            </label>
            <br />
            <label htmlFor="Password" style={{ padding: "1vh" }}>
              DOB
              <br />
              <input
                type="Date"
                placeholder="Password"
                style={{
                  border: "1px",
                  margin: "1vh",
                  borderRadius: "1.5vh",
                  background: "#B4D8E4",
                  height: "5vh",
                  width: "40vh",
                }}
              />
            </label>
            <br />
            <label htmlFor="username" style={{ padding: "1vh" }}>
              Username
              <br />
              <input
                type="textbox"
                placeholder="Username"
                style={{
                  border: "1px ",
                  margin: "1vh",
                  borderRadius: "1.5vh",
                  background: "#B4D8E4",
                  height: "5vh",
                  width: "40vh",
                }}
              />
            </label>
            <br />
            <label htmlFor="Password" style={{ padding: "1vh" }}>
              Password
              <br />
              <input
                type="password"
                placeholder="Password"
                style={{
                  border: "1px",
                  margin: "1vh",
                  borderRadius: "1.5vh",
                  background: "#B4D8E4",
                  height: "5vh",
                  width: "40vh",
                }}
              />
            </label>
            <br />
            <div style={{ marginTop: "3vh" }}>
              <label
                htmlFor=""
                style={{
                  marginLeft: "2vh",
                  paddingTop: "4vh",
                  color: "#B4D8E4",
                }}
              >
                Select
                <select
                  name="Type"
                  id=""
                  style={{ marginLeft: "2vh", color: "black", width: "25vh" }}
                >
                  <option value="retailer">Retailer</option>
                  <option value="Wholesale">WholeSale</option>
                  <option value="company">Company</option>
                </select>
              </label>
            </div>
            <br />
            <label
              style={{ marginTop: "6vh", color: "#86C5DA", marginLeft: "2vh" }}
            >
              <input
                type="checkbox"
                name="checkbox"
                id=""
                style={{ marginTop: "4vh", color: "#86C5DA" }}
              />
              Accept T&C (read document carefully)
            </label>
            <br />
            <input
              type="submit"
              value="submit"
              style={{
                background: "blue",
                borderRadius: "1vh",
                width: "15vh",
                height: "6vh",
                color: "white",
                marginLeft: "2vh",
                marginTop: "8vh",
              }}
            />
            <Link to="/login"> <input type="button" value="" style={{ marginLeft: "6vh" }} />Login</Link>
          </form>
        </div>
      </div>
    
  );
}

export default Singin;

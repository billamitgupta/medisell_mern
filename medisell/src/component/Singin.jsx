import React from "react";

import Grid from "@mui/material/Unstable_Grid2";

function Singin() {
  return (

    
      <div>
        <div>
          <form action="" style={{ padding: "3vh" }}>
            <label htmlFor="username" style={{ padding: "1vh" }}>
              Enter your Name
              <br />
              <input
                type="textbox"
                placeholder="Name"
                style={{
                  border: "1px ",
                  margin: "1vh",
                  borderRadius: "2vh",
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
                  borderRadius: "2vh",
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
                  borderRadius: "2vh",
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
                  borderRadius: "2vh",
                  background: "#B4D8E4",
                  height: "5vh",
                  width: "40vh",
                }}
              />
            </label>
            <br />
            <div style={{marginTop:"3vh"}}>
            <label htmlFor="" style={{marginLeft:"2vh",paddingTop:"4vh", color:"#B4D8E4"}}>
                Select 
                <select name="Type" id="" style={{marginLeft:"2vh", color:"black", width:"25vh"}}>
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
            <input type="button" value="" style={{ marginLeft: "6vh" }} />
            Signin
          </form>
        </div>
      </div>
   
  );
}

export default Singin;

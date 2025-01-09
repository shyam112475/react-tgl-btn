import { useState } from "react";
const Form = ()=>{
      const [name,setName] = useState("");
      const [password,setPassword] = useState("");
     
     
      return(
        <div
        className="form-container">
        <h1>
          Form
        </h1>
        <div style={{ display: "flex", marginBottom: "15px", flexDirection: "column" }}>
          <input
            type="text"
            value={name}
            onChange={(nam) => setName(nam.target.value)}
            placeholder="Enter your name"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8d99ae",
              fontSize: "16px",
              marginBottom: "10px",
              boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div style={{ display: "flex", marginBottom: "15px", flexDirection: "column" }}>
          <input
            type="password"
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
            placeholder="Enter your password"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8d99ae",
              fontSize: "16px",
              marginBottom: "10px",
              boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <button
         id="form-btn"
          onClick={() =>{
            alert(`${name} loged in`)
            const login = []
            login.push({name:name,password:password})
            console.log(login)
          }}
        >
          Submit
        </button>
      </div>
      )
  
  }
  
  export default Form
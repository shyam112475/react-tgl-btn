import { useState } from "react";
const Form = ()=>{
      const [name,setName] = useState("");
      const [password,setPassword] = useState("");
      const [check,setChek] = useState(true)
      function changeChek(){
         setChek(!check)
      }
      return(
        <div
        className="form-container">
        <form   onSubmit={(e) =>{
            e.preventDefault()
            alert(`${name} loged in`)
            const login = []
            login.push({name:name,password:password})
          }}>
        <h1>
         LogIn 
        </h1>
        <div className="input" style={{ display: "flex", marginBottom: "15px", flexDirection: "column" }}>
          <input
            type="text"
            value={name}
            onChange={(nam) => setName(nam.target.value)}
            placeholder="USERNAME"
            required
           
          />
        </div>
        <div className="input" style={{ display: "flex", marginBottom: "15px",flexDirection: "column" }}>
          <input
            type={check?'password':'text'}
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
            placeholder="PASSWORD"
            required
          />

        </div>

        <div id="toggle-container" style={{
           display:'flex',
           alignItems:'center',
           marginBottom:'15px',
           color:'#264653', 
        }}>
            <input type="checkbox" onChange={changeChek}  id="toggle-password" name="password"   required style={{
              marginLeft:'0px'    
            }} />{check?'SHOW PASSWORD':'HIDE PASSWORD'}
        </div>
        <button
         id="form-btn"
         type="submit"
        >
          Submit
        </button>
        </form>
        <div className="logo">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            style={{ color: "#4267B2" }}
          >
            <path d="M22.675 0h-21.35C.59 0 0 .589 0 1.317v21.367C0 23.408.589 24 1.317 24h11.496v-9.293H9.614v-3.622h3.199V8.413c0-3.183 1.926-4.917 4.738-4.917 1.348 0 2.505.101 2.842.146v3.29h-1.95c-1.527 0-1.822.726-1.822 1.791v2.349h3.645l-.475 3.622h-3.17V24h6.223c.729 0 1.317-.592 1.317-1.317V1.317C24 .589 23.408 0 22.675 0z" />
          </svg>
        </a>

        {/* Google Icon */}
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 48 48"
            width="25"
            height="25"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083h-3.761v.001H24v7.834h11.224C33.358 33.008 28.145 36.5 24 36.5c-7.18 0-13-5.82-13-13s5.82-13 13-13c3.099 0 5.931 1.121 8.138 2.965l5.546-5.547C34.545 4.427 29.51 2.5 24 2.5 11.85 2.5 2 12.35 2 24s9.85 21.5 22 21.5c11.319 0 20.846-8.241 21.5-19H43.611z"
            />
            <path
              fill="#FF3D00"
              d="M6.305 14.691l6.431 4.71C14.543 15.546 19.01 13 24 13c3.099 0 5.931 1.121 8.138 2.965l5.546-5.547C34.545 4.427 29.51 2.5 24 2.5c-7.546 0-14.144 3.018-18.695 7.891z"
            />
            <path
              fill="#4CAF50"
              d="M24 45.5c5.285 0 10.141-1.965 13.813-5.184l-6.409-5.26C28.796 36.854 26.471 37.5 24 37.5c-4.157 0-7.982-2.494-9.814-6.122l-6.431 4.977C10.146 42.261 16.773 45.5 24 45.5z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083h-3.761v.001H24v7.834h11.224c-1.346 3.204-3.993 5.734-7.224 7.186l6.409 5.26c-.452.272 9.592-5.464 9.592-18.102 0-1.302-.143-2.57-.39-3.796z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            style={{ color: "#E1306C" }}
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.247 2.431.415a4.892 4.892 0 011.679 1.038 4.897 4.897 0 011.038 1.678c.168.461.359 1.261.415 2.431.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.247 1.97-.415 2.431a4.888 4.888 0 01-1.038 1.678 4.888 4.888 0 01-1.678 1.038c-.461.168-1.261.359-2.431.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.247-2.431-.415a4.892 4.892 0 01-1.679-1.038 4.897 4.897 0 01-1.038-1.678c-.168-.461-.359-1.261-.415-2.431-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.247-1.97.415-2.431A4.888 4.888 0 015.88 3.616 4.888 4.888 0 017.558 2.58c.461-.168 1.261-.359 2.431-.415C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.013 7.052.072 5.774.13 4.61.365 3.608.763 2.612 1.158 1.76 1.76.763 2.608.365 3.61.13 4.774.072 6.052.013 7.332 0 7.741 0 12s.013 4.668.072 5.948c.058 1.278.293 2.442.691 3.444.4.997 1.002 1.849 1.85 2.845.998.399 2.161.633 3.439.691C7.332 23.987 7.741 24 12 24s4.668-.013 5.948-.072c1.278-.058 2.442-.293 3.444-.691.997-.4 1.849-1.002 2.845-1.85.399-.998.633-2.161.691-3.439.058-1.278.072-1.687.072-5.948s-.013-4.668-.072-5.948c-.058-1.278-.293-2.442-.691-3.444-.4-.997-1.002-1.849-1.85-2.845-.998-.399-2.161-.633-3.439-.691C16.668.013 16.259 0 12 0zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.999 3.999 0 110-8 3.999 3.999 0 010 8zm6.406-10.845a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
          </svg>
        </a>

        </div>
      </div>
      )
  
  }
  
  export default Form
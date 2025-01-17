import { useState } from "react";
const Toggle = () =>{
    const [toggle, setToggle] = useState(false);
    function setTogglebtn(){
       setToggle(!toggle)
    }
  return(
    <div style={{
        height:'auto',
        width:'800px',
        marginLeft:'40%',
        marginTop:'150px',
        borderRadius:'12px'    
    }}>
    <div style={
        {
            background:toggle?'#606c38':'#c1121f',
            border:'none',
            borderRadius:'12px',
            boxShadow:'7px 2px 7px',
            padding:'10px',
            width:'200px',
            height:'200px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer',
        }
    }>
        <button style={{
            background:toggle?'#6a994e':'#ef233c',
            border:'none',
            boxShadow:'3px 1px 3px black',
            borderRadius:'12px',
            padding:'10px',
            width:'89px',
            color:'white',

        }} onClick={setTogglebtn}>Toggle</button>
    </div>
    </div>
  )

}

export default Toggle;
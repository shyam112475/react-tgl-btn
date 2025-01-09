import {useState } from "react";

const Toggler = () => {
   const [btn,setbtn] = useState(false)
   function handleBtn(){
       if(btn===true){
           setbtn(false)
           document.getElementById('btn').textContent = 'OFF'
        }else if(btn===false){
            setbtn(true)
             document.getElementById('btn').textContent = 'ON'
       }
    }
    return (
        <div className="btn-container" style={{backgroundColor:btn?'#fcbf49':'#ef233c'}}>
            <button style={{backgroundColor:btn ?' #f77f00':' #a4161a'}} id="btn" onClick={handleBtn}>ON</button>
        </div>
    )
}
export default Toggler;
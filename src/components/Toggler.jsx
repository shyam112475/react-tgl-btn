import {useState } from "react";

const Toggler = () => {
   const [btn,setbtn] = useState(false)

   function handleBtn(){
       if(btn===true){
           setbtn(false)

        }else if(btn===false){
            setbtn(true)
        
       }
    }
    return (
        <div className="btn-container" style={{backgroundColor:btn?'#38b000':'#ef233c',
            height:'60px',
            widows:'100px',
            border:'none',
            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.37)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}>
            <button style={{backgroundColor:btn ?' #008000':' #a4161a',
                height:'60px',
                width:'50px',
               borderBottomLeftRadius:'10px',
               boxShadow:'10px solid black',
               border:'none',
               transition: 'all 0.3s ease',
               
            }} id="btn" onClick={handleBtn}>
                {btn?"ON":"OFF"}
            </button>
        </div>
    )
}
export default Toggler;
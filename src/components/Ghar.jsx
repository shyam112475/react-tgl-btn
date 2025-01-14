import { useNavigate } from "react-router-dom";

function Ghar(){
    const navigate = useNavigate()
    const handleClick = ()=>{
         navigate('/dashboard')
    }
    return(
        <div>
            <h1>i am home page</h1>
            <button onClick={handleClick}>move to Deshboard</button>
        </div>
    )
}
export default Ghar;
import { useNavigate } from "react-router-dom"


function Deshboard() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/')
    }
  return (
    <div>
      <h1>i am deshboard</h1>
      <button onClick={handleClick}>move to home page</button>
    </div>
  )
}

export default Deshboard

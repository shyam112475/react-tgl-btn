import { useState } from "react"
function Todo() {
  const [isEditing, setIsEditing] = useState(null);             
  const [currentTask, setCurrentTask] = useState("");  
  const [inputText,setInputText] = useState('')
  const [listDoto,setListTodo] = useState([])
  let add = () => {
    setListTodo([...listDoto,inputText])
    setInputText("")
  }
  const removeTask = (indexToRemove) => {
    const updatedTasks = [...listDoto]
    updatedTasks.splice(indexToRemove,1)
    setListTodo(updatedTasks);
  };

  
    const saveTask = (index) => {
    const updatedTasks = listDoto.map((task, i) => (i === index ? currentTask : task));
    setListTodo(updatedTasks);
    setIsEditing(null); 
    setCurrentTask(""); 
  };
  
  return (
    <div>
      <div className="mai-container" style={{
        height:'auto',
        width:'800px',
        background:'#dda15e',
        marginLeft:'25%',
        marginTop:'30px',
        borderRadius:'12px'
      }}>
        <h1 style={{marginLeft:'40%',
          paddingTop:'30px',
          color:'#fff'
        }}>To_D0 List</h1>
        <div className="center-container">
          <div className="todo-Input">
              <input onChange={(e)=>{
                setInputText(e.target.value)
              }} placeholder="Enter task here...." type="text"  className="input-box" value={inputText}/>
             <button className="todo-btn" onClick={add} >Add Task</button>
          </div>
          <div className="doto-list" >
            <ul>
            {listDoto.map((task, index) => (
          <li style={{
            fontWeight: 'bold',
            fontSize: '18px', 
            margin: '8px 0', 
            padding: '6px 7px',
          
            borderRadius: '8px',
            color: '#264653', 
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
           }}
            key={index}
          >
            {isEditing === index ? (
              <input
               className="todo-input"
                type="text"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
                style={{ 
                  flex: "1",
                  marginRight: "10px",
                  border: 'none',
                  width: '100%', 
                  padding: '12px 15px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  fontSize: '16px', 
                  backgroundColor: '#f4f4f4', 
                  color: '#333', 
                  outline: 'none',            
                  transition: 'all 0.3s ease', 
                 }}
              />
           
            ) : (
              <span>{task}</span>
            )}

           
            {isEditing === index ? (
              <button
                onClick={() => saveTask(index)}
                style={{
                  fontWeight: 'bold',
                  fontSize: '16px', 
                  padding: '8px 15px',
                  margin: '5px',
                  top: '0px',
                  border: 'none',
                  color: 'white', 
                  backgroundColor: '#007bff',
                  borderRadius: '12px', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                }}
              >
                Save
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsEditing(index);
                    setCurrentTask(task);         
                  }}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',           
                    margin: '8px', 
                    padding: '8px 20px',   
                    border: 'none',
                    color: 'white',            
                    backgroundColor: '#28a745', 
                    borderRadius: '12px',         
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease',
                  }}
                >
                  Edit
                </button>
              
              </>
            )}
          <button style={{
            fontWeight: 'bold',
            fontSize: '16px', 
            margin: '8px',
            padding: '8px 20px', 
            border: 'none',
            color: 'white',
            backgroundColor: '#780000',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease', 
          
          }}  onClick={()=>removeTask(index) }>Delete</button>
         
          </li>

        ))}
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo

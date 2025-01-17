import { useState } from "react";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const timeAnddate = () => {
    const date = new Date();
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear();
    return `${hours}:${minutes}:${seconds} on ${day}/${month}/${year}`;
  };

  const handleAddTask = () => {
    if (inputText.trim()) {
      const newTask = {
        text: inputText,
        createdAt: timeAnddate(),
      };
      setList([...list, newTask]);
      setInputText("");
    }
  };

  const handleDeleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setInputText(list[index].text);
  };

  const handleSaveTask = () => {
    const updatedList = [...list];
    updatedList[editIndex].text = inputText;
    setList(updatedList);
    setEditIndex(null);
    setInputText("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", textAlign: "center" }}>
      <h1 style={{
        color:"#00a5cf",
      }}>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a task"
          style={{
            fontSize:"large",
            padding: "8px",
            height:'30px',
            width: "70%",
            borderTopLeftRadius:'8px',
            borderTopRightRadius:'0',
            borderBottomLeftRadius:'8px',
            borderBottomRightRadius:'0',
            color:'#001219',
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={editIndex !== null ? handleSaveTask : handleAddTask}
          style={{
            padding:'16px',
            border: "none",
            borderTopRightRadius:'12px',
            borderBottomRightRadius:'12px',
            marginLeft:'4px',
            backgroundColor: "#007bff",
            color: "white",
          }}
        >
          {editIndex !== null ? "Save" : "Add"}
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {list.map((task, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
              backgroundColor: "#e5e5e5",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              fontSize:'large',
              overflow:'scroll',
              gap: "10px",
            }}
          >
            <span>
              <strong>Task:</strong> {task.text}
            </span>
            <span style={{ fontSize: "12px", color: "#666" }}>
              <strong>Created At:</strong> {task.createdAt}
            </span>
            <div style={{ alignSelf: "flex-end" }}>
              <button
                onClick={() => handleEditTask(index)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#38b000",
                  color: "white",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#dc3545",
                  color: "white",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

import { useState } from 'react'

import './App.css'

export default function App(){
const [date,setDate]= useState("")
const [time, setTime] = useState("");
const [length, setLength] = useState("");
const [task, setTask] = useState("");
const [tasks, setTasks]= useState(
  JSON.parse(localStorage.getItem("task"))||[]
)

const addTask =()=>{
  if(task===""){
    return
  }
  const newTask ={
    date:date,
    time:time,
    length:length,
    task:task
  }
  const updatedTask = [...tasks, newTask]
  setTasks(updatedTask)
  setTask("")
  setTask("");
setTime("");
setLength("");
setDate("");
localStorage.setItem("task", JSON.stringify(updatedTask))
}

  return(
    <>
    <h1>My personal timetabe</h1>
    <form onSubmit={addTask}>

<label>Task Name</label>
<input
type="text"
value={task}
placeholder="Enter a Name of the Task"
onChange={(e)=>setTask(e.target.value)}
required
/>

<label>Length</label>
<select value={length} onChange={(e)=>setLength(e.target.value)} required >
  <option value= "" disabled>Select time length</option>
  <option>30 min and less</option>
   <option>1-HOUR</option>
    <option>2-HOURS</option>
     <option>3-HOURS</option>
      <option>4 HOURS</option>
       <option>5 HOURS </option>
         <option>5+ HOURS </option>
    
</select>
<label>Date</label>
<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
required
/>

<label>Time</label>
<input
type="time"
value={time}
onChange={(e)=>setTime(e.target.value)}
required
/>
<button>Add-Task</button>

    </form>
    </>
  )
}
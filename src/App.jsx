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

const addTask =(e)=>{
  e.preventDefault()
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

  setTask("");
setTime("");
setLength("");
setDate("");
localStorage.setItem("task", JSON.stringify(updatedTask))
}

const resetForm =()=>{
   setTask("")
   setLength("");
   setDate("");
setTime("");
}

const clearTable = ()=>{
  setTasks([])
  localStorage.removeItem("task")
}

  return(
    <>
    <h1>My personal timetabe</h1>
    <form onSubmit={addTask} onReset={resetForm}>

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
  <option value= "">Select time length</option>
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
<button style={{color:'salmon'}} type='reset'>Reset-form</button>
<button style={{color:'green'}}>Add-Task</button>


<div className="table-wrap"> 
<table>
  
  <thead>
    <tr>
      <th>Task name</th>
        <th>Length</th>
          <th>Date</th>
            <th>Time</th>
    </tr>
  </thead>
  <tbody>
   {tasks.map((item, index)=>(
    <tr key={index}>
      <td>{item.task}</td>
       <td>{item.length}</td>
        <td>{item.date}</td>
         <td>{item.time}</td>
    </tr>
   )
   
  )
   
   }
  </tbody>
</table>
</div>

<button style={{color:'red'}} onClick={clearTable}>Clear Table</button>
    </form>
    </>
  )
}
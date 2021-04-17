import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Hello",
      day: "feb 5th, 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Bye",
      day: "Mar 6th, 3:30pm",
      reminder: false
    },
    {
      id: 3,
      text: "Hello, Bye",
      day: "Apl 7th, 4:30pm",
      reminder: true
    }
  ]
  )

  // add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) +1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id? 
      { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title={"Task Tracker"}
       onAdd={() => setShowAddTask(!showAddTask)}
       showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={ addTask } />}
      {tasks.length > 0? 
      <Tasks tasks={tasks} onDelete={ deleteTask }
       onToggle={ toggleReminder }/>: 'No Tasks'}
    </div>
  );
}

export default App;

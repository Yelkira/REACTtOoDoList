import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./Todolist";

export type StrType = "all" | "active" | "completed"


function App() {
    const [tasks1, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Yo", isDone: false}
    ])
    const removeTask = (taskId: number) => {
        setTasks(tasks1.filter(t => t.id !== taskId))
    }


    return (
        <div className="App">
            <TodoList title="What to learn"
                      tasks={tasks1}
                      removeTask={removeTask}/>
        </div>
    );
}

export default App;

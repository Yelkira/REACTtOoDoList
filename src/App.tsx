import React from 'react';
import './App.css';
import {TodoList} from "./Todolist";

function App() {
    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false},
        {id: 4, title: "Yo", isDone: false}
    ]
    const shapka = "What to learn"
    const shapka3 = "What to learn222222222"
    return (
        <div className="App">
            <TodoList shapka={shapka}  tasks={tasks1}/>
            <TodoList shapka={shapka3} tasks={tasks2}/>
        </div>
    );
}

export default App;

import React, {useState} from "react";
import {StrType} from "./App";


type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void

}
type TaskType = {
    id: number
    title: string
    isDone: boolean

}

export const TodoList = (props: TodolistPropsType) => {
    const [filteredButtonName, setFilterButtonName] = useState<StrType>("all")
    let durshlaq = props.tasks
    if (filteredButtonName === "completed") {
        durshlaq = props.tasks.filter(t => t.isDone)
    }
    if (filteredButtonName === "active") {
        durshlaq = props.tasks.filter(t => !t.isDone)
    }

    let filteredTasks = (str: StrType) => {
        setFilterButtonName(str)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {durshlaq.map((el) => {
                    return (

                        <li key={el.id}><input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={() => props.removeTask(el.id)}>x</button>
                        </li>

                    )
                })}
            </ul>
            <div>
                <button onClick={() => filteredTasks("all")}>All</button>
                <button onClick={() => filteredTasks("active")}>Active</button>
                <button onClick={() => filteredTasks("completed")}>Completed</button>
            </div>
        </div>
    )
}
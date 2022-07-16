import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/ListReducer/actions";
import {TaskItem} from '../features/ListReducer/TaskItem'
import './Item.css'
type itemProps = {
    task:TaskItem 
}

const Item: React.FC<itemProps> = (props)=>{
    const [buttonDisplay,setButtonDisplay]= useState<boolean>(false)

   

    const dispatch = useDispatch()
    return <div className="taskContainer" onMouseEnter = {(e)=>{setButtonDisplay(true) }} onMouseLeave = {(e)=>{setButtonDisplay(false)}}>
        <input className="button_checkbox"
            onClick={(event: React.MouseEvent<HTMLInputElement>) => {
                dispatch(updateTask(props.task.id))
            }}

            type="checkbox" checked={props.task.isDone}
        />
        <div className={`task  ${props.task.isDone ? 'done' : ""} ` }>
        {props.task.name}
        </div>
        <button className={`button ${buttonDisplay ? '' : "hide"} `}
            
            onClick={() => { dispatch(deleteTask(props.task.id)) }}>
            X
        </button></div>
    
}

export default Item
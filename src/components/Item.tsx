import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/ListReducer/actions";
import {TaskItem} from '../features/ListReducer/TaskItem'
type itemProps = {
    task:TaskItem 
}

const Item: React.FC<itemProps> = (props)=>{
    const dispatch = useDispatch()
    return <div><input 
    onClick={(event:React.MouseEvent<HTMLInputElement>) => 
         {
             dispatch(updateTask({name: props.task.name, isDone:!props.task.isDone})) 
         }} 
    type="checkbox" checked={props.task.isDone}/>{props.task.name}
    <button onClick={()=>{dispatch(deleteTask(props.task))}}>X</button></div>
    
}

export default Item
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask,addTask } from "../features/ListReducer/actions";
import {TaskItem} from '../features/ListReducer/TaskItem'
import './Item.css'
type itemProps = {
    task:TaskItem 
}

const Item: React.FC<itemProps> = (props)=>{
    const [buttonDisplay,setButtonDisplay]= useState<boolean>(false)
    const [inputToggle,setInputToggle] = useState<boolean> (true)
    const [inputValue,setInputValue] = useState<string> (props.task.name)

    const onChangeHandle = (event:React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
      
    }
   const onDoubleClickHandler = () => {
     setInputToggle(!inputToggle)
   }

   const onDoubleClickHandlerTaskChange = () => {
    setInputToggle(!inputToggle)
    dispatch(deleteTask(props.task.id))
    dispatch(addTask(inputValue))
  }

    const dispatch = useDispatch()
    return <div className="taskContainer" onMouseEnter = {(e)=>{setButtonDisplay(true) }} onMouseLeave = {(e)=>{setButtonDisplay(false)}}>
        <input className="button_checkbox"
            onClick={(event: React.MouseEvent<HTMLInputElement>) => {
                dispatch(updateTask(props.task.id))
            }}

            type="checkbox" checked={props.task.isDone}
        />
        
        {
            inputToggle? 
                <div onDoubleClick={onDoubleClickHandler} className={`task  ${props.task.isDone ? 'done' : ""} ` }>
                    {props.task.name}
                </div> : 
                <input 
                    onDoubleClick={onDoubleClickHandlerTaskChange}
                    className='task' 
                    value={inputValue} 
                    onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{onChangeHandle(event)}}
                />}


        <button className={`button ${buttonDisplay ? '' : "hide"} `}
            
            onClick={() => { dispatch(deleteTask(props.task.id)) }}>
            X
        </button></div>
    
}

export default Item
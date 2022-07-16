import React, {HtmlHTMLAttributes, useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/ListReducer/actions";
import './TaskInput.css'


export const TaskInput = () => {
//adding dispatch
    const dispatch = useDispatch()

    const [value,setValue] = useState<string>('')

    const onKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter'){
            dispatch(addTask(value))
            setValue('')
        }
      
    }

  return <>
    
    <input className="input"
    placeholder="...Lista zadan zadan Lista..." 
    onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setValue(event.target.value)}}
    value= {value}
    onKeyPress= {onKeyPress}
    />
    </>
}
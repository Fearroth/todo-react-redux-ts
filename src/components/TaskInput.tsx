import React, {HtmlHTMLAttributes, useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/ListReducer/actions";



export const TaskInput = () => {

    const dispatch = useDispatch()

    const [value,setValue] = useState<string>('')

    const onKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter'){
            dispatch(addTask(value))
            setValue('')
        }
      
    }

  return <div>
    
    <input 
    placeholder="co masz zrobic" 
    onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setValue(event.target.value)}}
    value= {value}
    onKeyPress= {onKeyPress}
    />
    </div>
}
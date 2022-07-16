import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskItem } from './TaskItem';
import { ListAction } from './actions';


export type TaskState = TaskItem[] 


const initialState: TaskState = []
function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function TaskReducer(state= initialState, action: any) {
console.log(action)
switch (action.type){
    case 'ADD_TASK':{
        const name: string = action.payload.name
        return [...state, { id:getRandomInt(0,1000),name, isDone:false}  ]
    }
    case 'UPDATE_TASK':{
        return state.map ((task)=>{
            if (task.id === action.payload.id) {
                const isDone: boolean = !task.isDone
                return {...task, isDone}
            }
            return task
        })
    }
    case 'DELETE_TASK':{
        return state.filter ((task)=>{
            return task.id !== action.payload.id
        })
    }

}
return state

}
export default TaskReducer
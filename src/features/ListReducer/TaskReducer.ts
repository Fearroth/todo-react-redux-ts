import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskItem } from './TaskItem';
import { ListAction } from './actions';


export type TaskState = TaskItem[] 


const initialState: TaskState = []


function TaskReducer(state= initialState, action: any) {
console.log(action)
switch (action.type){
    case 'ADD_TASK':{
        const name: string = action.payload.name
        return [...state, { name, isDone:false}  ]
    }
    case 'UPDATE_TASK':{
        return state.map ((task)=>{
            if (task.name === action.payload.item.name) {
                const isDone: boolean = action.payload.item.isDone
                return {...task, isDone}
            }
            return task
        })
    }
    case 'DELETE_TASK':{
        return state.filter ((task)=>{
            return task.name !== action.payload.item.name
        })
    }

}
return state

}
export default TaskReducer
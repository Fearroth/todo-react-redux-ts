import { TaskItem } from "./TaskItem"



export const addTask = (name:string) =>{
    return {
        
        type:'ADD_TASK',
        payload: {
            name,
        }
    } as const
}

export const updateTask =(id:number) => {
  return {
    type:"UPDATE_TASK",
    payload: {
        id,
    }
  } as const
}



export const deleteTask =(id:number) => {
  return {
    type: "DELETE_TASK",
    payload:{
        id,
    } 
  } as const 
}
// rodzaje obiektow ktore sa zwracane z funckji
export type ListAction = ReturnType<typeof addTask> |  ReturnType<typeof updateTask> | ReturnType<typeof deleteTask>



// biale na szaryn tle 
// kazdy item ramka
// button on hover
// ramka na srodku trzymac sie srodka
// is done na true przekreslony i wyszarzony

//lista ma przeyzc f5

// bug 
// znikanie i zaznaczanie wszystkiego  ok


//create app plus redux typescript do ogarniecia jak dziala
import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { getList } from "../app/getList";
const ListItems = ()=>{
    const tasks = useSelector(getList)
 
    return <>
        {tasks.map((task) => (
            <div key={task.id}>
            <Item  task={task}/>
            </div>
        ))}
    </>
}

export default ListItems
import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { getList } from "../app/getList";
const ListItems = ()=>{
    const tasks = useSelector(getList)
 
    return <div>
        {tasks.map((task) => (
            <Item  task={task}/>
        ))}
    </div>
}

export default ListItems
// single selection

import { useState } from "react"
import data from "./data"

// multiple selection 


export default function Accordion(){
    const [selected, setSelected] = useState(null);
    const[enableMultiSelection, setEnableMultiSelction] = useState(false);
    const [multiple, setMultple] = useState([]);
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultple(cpyMultiple);
    }
    console.log(selected, multiple);
    return(
       <div className="wrapper">
        <button onClick={()=>setEnableMultiSelction(!enableMultiSelection)}>Enable Multi Selection </button>
        <div className="accordion">
        {
    data && data.length > 0 ? 
    data.map((dataItem, index) => (
        <div className="item" key={index}>
            <div onClick={enableMultiSelection ? ()=>
            handleMultiSelection(dataItem.id): () => handleSingleSelection(dataItem.id)} className="title">
            <h3>{dataItem.question}</h3>
            <span>+</span>
            </div>
            {
                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                <div className="content">{dataItem.answer}</div>      
                :null
            }
        </div>
    ))
    : <div>No data found</div>
}

        </div>
       </div>
    )
}
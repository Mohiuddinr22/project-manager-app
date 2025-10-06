import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({onAdd}){
    const modalx = useRef();
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            modalx.current.open();
            return;
        }

        onAdd(enteredTask);
        setEnteredTask('');
    }

    return <div className="flex items-center gap-4">
        <Modal ref={modalx} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
            <p className="text-stone-500 mb-4">can't leave input fields empty</p>
        </Modal>
        <input onChange={handleChange} value={enteredTask} type="text" className="w-64 px-2 py-1 my-4 rounded-sm shadow-md bg-stone-200"/>
        <button onClick={handleClick} className="px-4 py-1 shadow-md rounded-md text-stone-200 bg-blue-700 hover:text-stone-50 hover:bg-blue-600">Add</button>
    </div>
}
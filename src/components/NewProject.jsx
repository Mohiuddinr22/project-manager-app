import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const h2Class = "text-2xl text-stone-800 font-bold uppercase my-auto mx-auto flex justify-center"
const saveBtnClass = "px-6 py-2 rounded-md text-stone-200 bg-green-700 hover:text-stone-50 hover:bg-green-600"
const cancelBtnClass = "px-6 py-2 rounded-md text-stone-200 bg-rose-700 hover:text-stone-50 hover:bg-rose-600"

export default function NewProject({onAdd, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return(
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
                <p className="text-stone-500 mb-4">can't leave input fields empty</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <h2 className={h2Class}>Add New Project</h2>
                <div>
                    <Input type="text" ref={title} label="Title" isTextArea={false}/>
                    <Input ref={description} label="Description" isTextArea={true}/>
                    <Input type="date" ref={dueDate} label="Due Date" isTextArea={false}/>
                </div>
                <menu className="flex items-center justify-center gap-4 my-4">
                    <li><button className={saveBtnClass} onClick={handleSave}>Save</button></li>
                    <li><button className={cancelBtnClass} onClick={onCancel}>Cancel</button></li>
                </menu>
            </div>
        </>
    );
}
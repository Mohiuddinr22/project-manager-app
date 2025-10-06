import Tasks from "./Tasks";

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-800 mb-2">{project.title}</h1>
                    <button onClick={onDelete} className="px-6 py-2 rounded-md text-stone-200 bg-red-700 hover:text-stone-50 hover:bg-red-600">Delete</button>
                </div>
                <p className="mb-4 text-stone-600">Due Date: {formattedDate}</p>
                <div className="mb-4">
                    <p className="text-stone-700 text-base font-bold mb-4">Description:</p>
                    <p className="text-stone-800 whitespace-pre-wrap bg-stone-200 p-2 rounded-sm shadow-lg">{project.description}</p>
                </div>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
        </div>
    );
}
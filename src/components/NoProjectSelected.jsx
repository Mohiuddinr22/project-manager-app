import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected({onStartAddProject}) {
    return <div className="mt-24 text-center w-2/3 ">
        <img src={noProjectImage} alt="No Project Image" className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 my-4 ">No Project Selected</h2>
        <p className="text-stone-400 mb-4 ">Select a project or get started with a new one</p>
        <p onClick={onStartAddProject} className="mt-8"><button className="px-6 py-2 rounded-md text-stone-200 bg-blue-700 hover:text-stone-50 hover:bg-blue-600">Create New Project</button></p>
    </div>
}
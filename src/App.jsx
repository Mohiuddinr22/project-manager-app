import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Header from "./components/Header";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectsState(prevState => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }
  
  function handleDeleteTask(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    });
  }

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }

  function handleAddProject(projectData){
    const newProject = {
      ...projectData,
      tasks: [],
      id: Math.random()
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <>
      <Header />
      <main className="h-screen my-8 flex gap-8 ">
        <ProjectsSidebar 
          onStartAddProject={handleStartAddProject} 
          projects={projectsState.projects} 
          onSelectProject={handleSelectProject}
          selectedProjectId={projectsState.selectedProjectId}
        />
        {content}
      </ main>
    </>
  );
}

export default App;

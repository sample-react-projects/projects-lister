import { PropsWithChildren, createContext, useState } from "react";
import { Project } from "../types/Project";

export interface IProjectsContext {
  addProject(project: Project): void;
  getActiveProject(): Project | null;
  getActiveProjectId(): string;
  getProjects(): Project[];
  setActiveProjectId(projectId: string): void;
}

type ProjectsState = {
  activeProjectId?: string;
  projects: Project[];
};

const anyFunction = (...args: any[]) => args as any;

const DEFAULT_PROJECT_STATE: ProjectsState = { projects: [] };

export const ProjectsContext = createContext<IProjectsContext>({
  addProject: anyFunction,
  getActiveProject: anyFunction,
  getActiveProjectId: anyFunction,
  getProjects: anyFunction,
  setActiveProjectId: anyFunction,
});

const ProjectContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [projectsState, setProjectsState] = useState<ProjectsState>(
    DEFAULT_PROJECT_STATE
  );

  function addProject(project: Project) {
    setProjectsState((currentProjectsState) => {
      currentProjectsState.projects.push(project);
      return { ...currentProjectsState };
    });
  }

  function getActiveProject() {
    return (
      projectsState.projects.find(
        (project) => project.id == projectsState.activeProjectId
      ) || null
    );
  }

  function getActiveProjectId() {
    return projectsState.activeProjectId || "";
  }

  function getProjects() {
    return projectsState.projects;
  }

  function setActiveProjectId(projectId: string) {
    setProjectsState((currentProjectsState) => {
      currentProjectsState.activeProjectId = projectId;
      return { ...currentProjectsState };
    });
  }

  const projectContextProviderValue = {
    addProject,
    getActiveProject,
    getActiveProjectId,
    getProjects,
    setActiveProjectId,
  };

  return (
    <ProjectsContext.Provider value={projectContextProviderValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectContextProvider;

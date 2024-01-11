import { useContext } from "react";
import { ProjectsContext } from "../../../context/ProjectsContextProvider";
import styles from "./Projects.module.scss";

const Projects: React.FC<{}> = () => {
  const { getProjects, getActiveProjectId, setActiveProjectId } =
    useContext(ProjectsContext);
  const projects = getProjects();
  const activeProjectId = getActiveProjectId();

  return (
    <ul className={styles.projects}>
      {projects.map((project) => {
        return (
          <li
            key={project.id}
            onClick={() => setActiveProjectId(project.id)}
            className={`${styles.project} ${
              activeProjectId === project.id ? styles.active : null
            }`}
          >
            {project.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;

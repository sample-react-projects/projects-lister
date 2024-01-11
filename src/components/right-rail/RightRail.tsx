import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContextProvider";
import AddProject from "./add-project/AddProject";
import Project from "./project/Project";

const RightRail: React.FC<{}> = () => {
  const { getActiveProjectId } = useContext(ProjectsContext);
  const activeProjectId = getActiveProjectId();

  return activeProjectId ? <Project></Project> : <AddProject></AddProject>;
};

export default RightRail;

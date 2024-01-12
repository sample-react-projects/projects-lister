import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContextProvider";
import AddProject from "./add-project/AddProject";
import ViewProject from "./view-project/ViewProject";

const RightRail: React.FC<{}> = () => {
  const { getActiveProjectId } = useContext(ProjectsContext);
  const activeProjectId = getActiveProjectId();

  return activeProjectId ? (
    <ViewProject></ViewProject>
  ) : (
    <AddProject></AddProject>
  );
};

export default RightRail;

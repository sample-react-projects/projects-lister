import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContextProvider";
import AddProject from "./add-project/AddProject";
import ViewProject from "./view-project/ViewProject";
import Card from "../ui/card/Card";

const RightRail: React.FC<{}> = () => {
  const { getActiveProjectId } = useContext(ProjectsContext);
  const activeProjectId = getActiveProjectId();

  return (
    <Card>
      {activeProjectId ? (
        <ViewProject></ViewProject>
      ) : (
        <AddProject></AddProject>
      )}
    </Card>
  );
};

export default RightRail;

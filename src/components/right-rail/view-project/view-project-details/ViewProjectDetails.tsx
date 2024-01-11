import { useContext } from "react";
import { ProjectsContext } from "../../../../context/ProjectsContextProvider";

const ViewProjectDetails: React.FC<{}> = () => {
  const { getActiveProject } = useContext(ProjectsContext);
  const activeProject = getActiveProject();

  return activeProject ? (
    <>
      <h2>{activeProject.title}</h2>
      <p>
        <strong>Budget: </strong>
        {activeProject.budget}
      </p>
      <p>
        <strong>Location: </strong>
        {activeProject.location}
      </p>
      <p>
        <strong>Tenure: </strong>
        {activeProject.tenure}
      </p>
    </>
  ) : null;
};

export default ViewProjectDetails;

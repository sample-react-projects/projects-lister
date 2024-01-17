import { useContext } from "react";
import Button from "../ui/button/Button";
import { Variant } from "../ui/button/Button.variant";
import {
  IProjectsContext,
  ProjectsContext,
} from "../../context/ProjectsContextProvider";
import Projects from "./projects/Projects";

const LeftRail: React.FC<{}> = () => {
  const { setActiveProjectId } = useContext<IProjectsContext>(ProjectsContext);

  function resetActiveProjectId() {
    setActiveProjectId("");
  }

  return (
    <div className="container--vertical">
      <h2>My Projects</h2>
      <Projects></Projects>
      <Button
        style={{ alignSelf: "flex-start" }}
        variant={Variant.primary}
        onClick={resetActiveProjectId}
      >
        + Add Project
      </Button>
    </div>
  );
};

export default LeftRail;

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
    <>
      <h1>Projects Lister</h1>
      <Button
        style={{ alignSelf: "flex-start" }}
        variant={Variant.primary}
        onClick={resetActiveProjectId}
      >
        + Add Project
      </Button>
      <Projects></Projects>
    </>
  );
};

export default LeftRail;

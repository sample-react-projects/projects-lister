import { useContext } from "react";
import Button from "../ui/button/Button";
import { Variant } from "../ui/button/Button.variant";
import {
  IProjectsContext,
  ProjectsContext,
} from "../../context/ProjectsContextProvider";
import Projects from "./projects/Projects";

interface INavigation {}
const Navigation: React.FC<INavigation> = () => {
  const { setActiveProjectId } = useContext<IProjectsContext>(ProjectsContext);

  function resetActiveProjectId() {
    setActiveProjectId("");
  }

  return (
    <>
      <h1 className="navigation__title">Projects Lister</h1>
      <Button variant={Variant.primary} onClick={resetActiveProjectId}>
        + Add Project
      </Button>
      <Projects></Projects>
    </>
  );
};

export default Navigation;

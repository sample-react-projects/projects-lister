import { useContext } from "react";
import Button from "../ui/button/Button";
import { Variant } from "../ui/button/Button.variant";
import {
  IProjectsContext,
  ProjectsContext,
} from "../../context/ProjectsContextProvider";
import Projects from "./projects/Projects";
import Card from "../ui/card/Card";
import styles from "./LeftRail.module.scss";

const LeftRail: React.FC<{}> = () => {
  const { setActiveProjectId } = useContext<IProjectsContext>(ProjectsContext);

  function resetActiveProjectId() {
    setActiveProjectId("");
  }

  return (
    <Card>
      <div className={styles.container}>
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
    </Card>
  );
};

export default LeftRail;

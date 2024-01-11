import styles from "./App.module.scss";
import ProjectsContextProvider from "../../context/ProjectsContextProvider";
import RightRail from "../right-rail/RightRail";
import LeftRail from "../left-rail/LeftRail";

function App() {
  return (
    <div className={styles.container}>
      <ProjectsContextProvider>
        <div className={styles["container__rail-left"]}>
          <LeftRail></LeftRail>
        </div>
        <div className={styles["container__rail-right"]}>
          <RightRail></RightRail>
        </div>
      </ProjectsContextProvider>
    </div>
  );
}

export default App;

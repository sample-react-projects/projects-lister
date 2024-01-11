import styles from "./App.module.scss";
import AddProject from "../add-project/AddProject";
import Navigation from "../navigation/Navigation";
import ProjectContextProvider from "../../context/ProjectsContextProvider";

function App() {
  return (
    <div className={styles.container}>
      <ProjectContextProvider>
        <div className={styles["container__rail-left"]}>
          <Navigation></Navigation>
        </div>
        <div className={styles["container__rail-right"]}>
          <AddProject></AddProject>
        </div>
      </ProjectContextProvider>
    </div>
  );
}

export default App;

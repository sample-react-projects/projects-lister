import styles from "./App.module.scss";
import AddProject from "../add-project/AddProject";
import Navigation from "../navigation/Navigation";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles["container__rail-left"]}>
        <Navigation></Navigation>
      </div>
      <div className={styles["container__rail-right"]}>
        <AddProject></AddProject>
      </div>
    </div>
  );
}

export default App;

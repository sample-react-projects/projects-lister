import styles from "./App.module.scss";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles["container__rail-left"]}>
        <Navigation></Navigation>
      </div>
      <div className={styles["container__rail-right"]}>Right</div>
    </div>
  );
}

export default App;

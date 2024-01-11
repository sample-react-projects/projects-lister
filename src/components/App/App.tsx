import styles from "./App.module.scss";
import ProjectsContextProvider from "../../context/ProjectsContextProvider";
import RightRail from "../right-rail/RightRail";
import LeftRail from "../left-rail/LeftRail";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Modal from "../ui/modal/Modal";

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles["container__content"]}>
        <ProjectsContextProvider>
          <Modal>
            <div className={styles["container__rail-left"]}>
              <LeftRail></LeftRail>
            </div>
            <div className={styles["container__rail-right"]}>
              <RightRail></RightRail>
            </div>
          </Modal>
        </ProjectsContextProvider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

import styles from "./App.module.scss";
import ProjectsContextProvider from "../../context/ProjectsContextProvider";
import RightRail from "../right-rail/RightRail";
import LeftRail from "../left-rail/LeftRail";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Modal from "../ui/modal/Modal";
import SlideoutMenu from "../ui/slideout-menu/SlideoutMenu";
import { useLayoutEffect, useState } from "react";
import Card from "../ui/card/Card";

const DEBOUNCE_TIME = 100;

enum Device {
  Mobile = "Mobile",
  Tablet = "Tablet",
  Desktop = "Desktop",
}

function determineCurrentMedia() {
  if (window.innerWidth < 576) {
    return Device.Mobile;
  } else if (window.innerWidth < 992) {
    return Device.Tablet;
  }
  return Device.Desktop;
}

function App() {
  const [renderMenu, setRenderMenu] = useState(false);

  useLayoutEffect(() => {
    let timeoutId: number;

    function shouldRenderMenu() {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const currentMedia = determineCurrentMedia();
        setRenderMenu(currentMedia === Device.Mobile);
      }, DEBOUNCE_TIME);
    }

    shouldRenderMenu();
    window.addEventListener("resize", shouldRenderMenu);

    return () => {
      window.removeEventListener("resize", determineCurrentMedia);
    };
  }, []);

  return (
    <div className={`${styles.container} container--vertical`}>
      <Header></Header>
      <div className={`container--horizontal ${styles["container__content"]}`}>
        <ProjectsContextProvider>
          <Modal>
            {renderMenu ? (
              <SlideoutMenu>
                <LeftRail></LeftRail>
              </SlideoutMenu>
            ) : (
              <div className={`container--vertical ${styles["container__rail-left"]}`}>
                <Card>
                  <LeftRail></LeftRail>
                </Card>
              </div>
            )}
            <div className={styles["container__rail-right"]}>
              <Card>
                <RightRail></RightRail>
              </Card>
            </div>
          </Modal>
        </ProjectsContextProvider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

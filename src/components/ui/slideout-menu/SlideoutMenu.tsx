import { createPortal } from "react-dom";
import styles from "./SlideoutMenu.module.scss";
import { PropsWithChildren, useState } from "react";

interface ISlideoutMenu extends PropsWithChildren {
  title?: string;
}
const SlideoutMenu: React.FC<ISlideoutMenu> = ({ children, title }) => {
  const [addAnimateClass, setaddAnimateClass] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function addAnimationClass() {
    setaddAnimateClass(true);
  }

  function setMenuState(flag: boolean) {
    setIsMenuOpen(flag);
    addAnimationClass();
  }

  return createPortal(
    <>
      <div
        className={`${styles.menu__mask} ${
          isMenuOpen ? styles["menu__mask--active"] : null
        } ${addAnimateClass ? styles.animate : null}`}
        onClick={() => setMenuState(false)}
      ></div>
      <span
        className={styles["menu__switch-open"]}
        onClick={() => setMenuState(true)}
      >
        =
      </span>
      <div className={styles.menu__container}>
        <div className={styles.menu__header}>
          <h3 className={styles.menu__title}>{title}</h3>
          <span
            className={styles["menu__switch-close"]}
            onClick={() => setMenuState(false)}
          >
            x
          </span>
        </div>
        {children}
      </div>
    </>,
    document.body
  );
};

export default SlideoutMenu;

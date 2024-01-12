import { createPortal } from "react-dom";
import styles from "./SlideoutMenu.module.scss";
import { PropsWithChildren, useId, useState } from "react";

interface ISlideoutMenu extends PropsWithChildren {
  title: string;
}
const SlideoutMenu: React.FC<ISlideoutMenu> = ({ children, title }) => {
  const [addAnimateClass, setaddAnimateClass] = useState(false);
  const id = useId();

  function addAnimationClass() {
    setaddAnimateClass(true);
  }

  return createPortal(
    <>
      <input type="checkbox" className={styles.menu__input} id={id}></input>
      <label
        htmlFor={id}
        className={`${styles.menu__mask} ${
          addAnimateClass ? styles.animate : null
        }`}
      ></label>
      <label
        htmlFor={id}
        className={styles["menu__switch-open"]}
        onClick={addAnimationClass}
      >
        =
      </label>
      <div className={styles.menu__container}>
        <div className={styles.menu__header}>
          <h3 className={styles.menu__title}>{title}</h3>
          <label htmlFor={id} className={styles["menu__switch-close"]}>
            x
          </label>
        </div>
        {children}
      </div>
    </>,
    document.body
  );
};

export default SlideoutMenu;

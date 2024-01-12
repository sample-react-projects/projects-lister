import { createPortal } from "react-dom";
import styles from "./SlideoutMenu.module.scss";
import { PropsWithChildren, useId } from "react";

interface ISlideoutMenu extends PropsWithChildren {
  title: string;
}
const SlideoutMenu: React.FC<ISlideoutMenu> = ({ children, title }) => {
  const id = useId();

  return createPortal(
    <>
      <input type="checkbox" className={styles.menu__input} id={id}></input>
      <div className={styles.menu__mask}></div>
      <label htmlFor={id} className={styles["menu__switch-open"]}>=</label>
      <div className={styles.menu__container}>
        <div className={styles.menu__header}>
          <h3 className={styles.menu__title}>{title}</h3>
          <label htmlFor={id} className={styles["menu__switch-close"]}>x</label>
        </div>
        {children}
      </div>
    </>,
    document.body
  );
};

export default SlideoutMenu;

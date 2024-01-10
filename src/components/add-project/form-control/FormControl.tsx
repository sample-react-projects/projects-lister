import Button from "../../ui/button/Button";
import { Variant } from "../../ui/button/Button.variant";
import Textbox from "../../ui/textbox/Textbox";
import styles from "./FormControl.module.scss";

const FormControl = () => {
  return (
    <>
      <h3>Add a new task</h3>
      <form className={styles.form}>
        <Textbox label="Title"></Textbox>
        <Textbox label="Location"></Textbox>
        <Textbox label="Tenure"></Textbox>
        <Textbox label="Budget"></Textbox>
        <div className={styles.actions}>
          <Button variant={Variant.link} onClick={() => {}}>
            CLEAR
          </Button>
          <Button variant={Variant.primary} onClick={() => {}}>
            SUBMIT
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormControl;

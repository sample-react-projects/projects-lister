import FormControl from "./form-control/FormControl";
import FormDescription from "./form-description/FormDescription";
import styles from "./AddProject.module.scss";

const AddProject = () => {
  return (
    <div className={styles.container}>
      <FormDescription></FormDescription>
      <FormControl></FormControl>
    </div>
  );
};

export default AddProject;

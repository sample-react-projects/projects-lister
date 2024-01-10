import { useState } from "react";
import Button from "../../ui/button/Button";
import { Variant } from "../../ui/button/Button.variant";
import Textbox from "../../ui/textbox/Textbox";
import styles from "./FormControl.module.scss";
import { v4 } from "uuid";
import { Project } from "../../../types/Project";
import { ProjectKeys } from "../../../types/ProjectKeys";

const EMPTY_PROJECT_STATE: Project = {
  id: v4(),
  title: "",
  location: "",
  tenure: "",
  budget: "",
};

const FormControl = () => {
  const [project, setProject] = useState<Project>(EMPTY_PROJECT_STATE);

  function updateState(
    key: ProjectKeys,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setProject((prevProjectValue) => {
      return { ...prevProjectValue, [key]: event.target.value };
    });
  }

  function resetProjectState() {
    setProject(EMPTY_PROJECT_STATE);
  }

  function saveProject() {
    console.log(project);
  }

  return (
    <>
      <h3>Add a new task</h3>
      <div className={styles.form}>
        <Textbox
          autoComplete="off"
          label="Title"
          value={project.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateState("title", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Location"
          value={project.location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateState("location", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Tenure"
          value={project.tenure}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateState("tenure", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Budget"
          value={project.budget}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateState("budget", e)
          }
        ></Textbox>
        <div className={styles.actions}>
          <Button variant={Variant.link} onClick={resetProjectState}>
            CLEAR
          </Button>
          <Button type="submit" variant={Variant.primary} onClick={saveProject}>
            SUBMIT
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormControl;

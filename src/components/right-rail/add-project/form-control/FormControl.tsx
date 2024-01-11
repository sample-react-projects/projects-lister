import { useContext, useState } from "react";
import Button from "../../../ui/button/Button";
import { Variant } from "../../../ui/button/Button.variant";
import Textbox from "../../../ui/textbox/Textbox";
import styles from "./FormControl.module.scss";
import { v4 } from "uuid";
import { Project } from "../../../../types/Project";
import { ProjectKeys } from "../../../../types/ProjectKeys";
import {
  IProjectsContext,
  ProjectsContext,
} from "../../../../context/ProjectsContextProvider";

const EMPTY_PROJECT_FORM_STATE: Project = {
  id: "",
  title: "",
  location: "",
  tenure: "",
  budget: "",
};

const FormControl = () => {
  const [projectForm, setProjectForm] = useState<Project>({
    ...EMPTY_PROJECT_FORM_STATE,
    id: v4(),
  });
  const { addProject, setActiveProjectId } =
    useContext<IProjectsContext>(ProjectsContext);

  function updateFormState(
    key: ProjectKeys,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setProjectForm((prevProjectValue) => {
      return { ...prevProjectValue, [key]: event.target.value };
    });
  }

  function resetProjectState() {
    setProjectForm(EMPTY_PROJECT_FORM_STATE);
  }

  function saveProject() {
    addProject(projectForm);
    setActiveProjectId(projectForm.id);
  }

  return (
    <>
      <h3>Add a new task</h3>
      <div className={styles.form}>
        <Textbox
          autoComplete="off"
          label="Title"
          value={projectForm.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFormState("title", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Location"
          value={projectForm.location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFormState("location", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Tenure"
          value={projectForm.tenure}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFormState("tenure", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Budget"
          value={projectForm.budget}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFormState("budget", e)
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

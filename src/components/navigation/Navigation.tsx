import Button from "../ui/button/Button";
import { Variant } from "../ui/button/Button.variant";

interface INavigation {}
const Navigation: React.FC<INavigation> = () => {
  return (
    <>
      <h1 className="navigation__title">Projects Lister</h1>
      <Button variant={Variant.primary} onClick={() => {}}>
        + Add Project
      </Button>
    </>
  );
};

export default Navigation;

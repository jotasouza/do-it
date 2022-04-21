import { Container } from "./styles";

//Components
import Button from "../Button";

//Route
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const exitDashboard = () => {
    localStorage.clear();
    return history.push("/login");
  };
  return (
    <Container>
      <h5>do.it</h5>
      <Button blueSchema onClick={() => exitDashboard}>
        Sair
      </Button>
      <Link to={"/login"}>Sair</Link>
    </Container>
  );
};

export default Header;

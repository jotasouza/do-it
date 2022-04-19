//Styles
import { Container, Content } from "./styles";

//Component
import Button from "../../components/Button";

//React
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <p>
          Organize-se de forma <span>fácil</span> e <span>efetiva</span> .
        </p>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;

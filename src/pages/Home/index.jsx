//Styles
import { Container, Content } from "./styles";

//Component
import Button from "../../components/Button";

//React
import { useHistory, Link, Redirect } from "react-router-dom";

const Home = ({ userAuthenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (userAuthenticated) {
    return <Redirect to={"/dashboard"} />;
  }

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
          <Button onClick={() => handleNavigation("/signup")}>
            Cadastre-se
          </Button>
          {/* <Button onClick={() => handleNavigation("/login")}>Login</Button> */}
        </div>
        <span>
          Já tem uma conta? Faça seu <Link to={"/login"}>login</Link>
        </span>
      </Content>
    </Container>
  );
};

export default Home;

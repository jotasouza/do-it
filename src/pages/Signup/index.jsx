//Style
import {
  BackgroundDiv,
  Container,
  ContentDiv,
  AnimationContainer,
} from "./styles";

//Component
import Button from "../../components/Button";

//React
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <BackgroundDiv />
      <ContentDiv>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to={"/link"}>login</Link>
            </p>
          </form>
        </AnimationContainer>
      </ContentDiv>
    </Container>
  );
};

export default Signup;

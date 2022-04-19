//Style
import {
  BackgroundDiv,
  Container,
  ContentDiv,
  AnimationContainer,
} from "./styles";

//Component
import Button from "../../components/Button";
import Input from "../../components/Input";

//React
import { Link } from "react-router-dom";

//Icons
import { FiUser, FiMail, FiCheck, FiUnlock } from "react-icons/fi";

const Signup = () => {
  return (
    <Container>
      <BackgroundDiv />
      <ContentDiv>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input
              icon={FiUser}
              label={"Nome"}
              type={"text"}
              placeholder={"Seu nome"}
            />
            <Input
              icon={FiMail}
              label={"Email"}
              type={"email"}
              placeholder={"Seu melhor email"}
            />
            <Input
              icon={FiUnlock}
              label={"Senha"}
              type={"password"}
              placeholder={"Uma senha bem segura"}
            />
            <Input
              icon={FiCheck}
              label={"Confirme sua senha"}
              type={"password"}
              placeholder={"Confirmação da senha"}
            />

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

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

//Route
import { Link, useHistory } from "react-router-dom";

//Form
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//Icons
import { FiMail, FiUnlock } from "react-icons/fi";

//API
import api from "../../services/api";

//Toastify
import { toast } from "react-toastify";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório")
      .matches(/[a-z]/g, "Senha deve conter um dígito minúsculo")
      .matches(/[A-Z]/g, "Senha deve conter um digito maiúsculo")
      .matches(/[0-9]/g, "Senha deve conter um número")
      .matches(
        /[$@$!%*#?&´^~/><+=[\]{",;°§`º_().}\\¨-]/g,
        "Senha deve conter um caractere especial"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };
    api
      .post("/user/login", user)
      .then((_) => {
        toast.success("Login realizado com sucesso");
        return history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Erro ao fazer o login. Verifique e tente novamente!");
      });
  };

  return (
    <Container>
      <ContentDiv>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>

            <Input
              register={register}
              icon={FiMail}
              label={"Email"}
              type={"email"}
              placeholder={"Seu melhor email"}
              name={"email"}
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiUnlock}
              label={"Senha"}
              type={"password"}
              placeholder={"Uma senha bem segura"}
              name={"password"}
              error={errors.password?.message}
            />

            <Button type="submit">Entrar</Button>
            <p>
              Não tem uma conta? Faça seu <Link to={"/signup"}>cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </ContentDiv>
      <BackgroundDiv />
    </Container>
  );
};

export default Login;

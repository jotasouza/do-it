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
import { Link } from "react-router-dom";

//Form
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//Icons
import { FiUser, FiMail, FiCheck, FiUnlock } from "react-icons/fi";

const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Email inválido")
      .matches(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/, "Email inválido"),
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
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), "Senhas estão diferentes"])
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <BackgroundDiv />
      <ContentDiv>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              icon={FiUser}
              label={"Nome"}
              type={"text"}
              placeholder={"Seu nome"}
              name={"name"}
              error={errors.name?.message}
            />
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
            <Input
              register={register}
              icon={FiCheck}
              label={"Confirme sua senha"}
              type={"password"}
              placeholder={"Confirmação da senha"}
              name={"passwordConfirm"}
              error={errors.passwordConfirm?.message}
            />

            <Button type="submit">Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to={"/login"}>login</Link>
            </p>
          </form>
        </AnimationContainer>
      </ContentDiv>
    </Container>
  );
};

export default Signup;

//Route
import { Redirect } from "react-router-dom";

//Style
import { Container, InputContainer, TasksContainer } from "./styles";

//Components
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";

//Form
import { useForm } from "react-hook-form";

//Icon
import { FiEdit2 } from "react-icons/fi";

//React
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

//API
import api from "../../services/api";

const Dashboard = ({ userAuthenticated }) => {
  const [tasks, setTasks] = useState();
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Doit:token")) || ""
  );
  const { register, handleSubmit } = useForm();

  const loadTasks = () => {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => {
        const apiTasks = response.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTasks(apiTasks);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadTasks();
  });

  const onHandleSubmit = ({ task }) => {
    if (!task) {
      return toast.error("Campo de tarefa não pode ser vazio!");
    }

    api
      .post(
        "/task",
        {
          description: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTasks());
  };

  const handleCompleted = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);

    api
      .put(
        `/task/${id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => setTasks(newTasks));
  };

  if (!userAuthenticated) {
    return <Redirect to={"/login"} />;
  }

  return (
    <>
      <Header />
      <Container>
        <InputContainer onSubmit={handleSubmit(onHandleSubmit)}>
          <section>
            <Input
              icon={FiEdit2}
              placeholder={"Nova tarefa"}
              register={register}
              name={"task"}
            />
            <Button type={"submit"}>Adicionar</Button>
          </section>
        </InputContainer>
        <TasksContainer>
          {tasks ? (
            tasks.map((task) => (
              <Card
                key={task._id}
                title={task.description}
                date={task.createdAt}
                onClick={() => handleCompleted(task._id)}
              />
            ))
          ) : (
            <h3>Você ainda não possui tarefas</h3>
          )}
        </TasksContainer>
      </Container>
    </>
  );
};

export default Dashboard;

//Style
import { Container } from "./styles";

//Icon
import { FiClipboard, FiCalendar } from "react-icons/fi";

//Components
import Button from "../Button";

const Card = ({ title, date, onClick }) => {
  return (
    <Container>
      <span>
        <FiClipboard /> {title}
      </span>
      <hr />
      <time>
        <FiCalendar /> {date}
      </time>
      <Button blueSchema onClick={onClick}>
        Concluir
      </Button>
    </Container>
  );
};

export default Card;

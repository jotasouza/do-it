//Style
import styled from "styled-components";
import { keyframes } from "styled-components";

//Image
import SignupImage from "../../assets/woman.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const apperImageFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px);
}

to{
    opacity: 1;
    transform: translateX(0px) ;
}
`;

export const BackgroundDiv = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${SignupImage}) no-repeat center, var(--color-icons);
    background-size: contain;
    animation: ${apperImageFromLeft} 1.2s;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const apperFromRight = keyframes`
from{
    opacity: 0;
    transform: translateX(50px);
}

to{
    opacity: 1;
    transform: translateX(0px) ;
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${apperFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 1.5rem;
    }

    > div {
      margin-top: 15px;
    }

    p {
      margin-top: 0.8rem;
    }

    a {
      font-weight: bold;
      color: var(--color-alert);
    }
  }
`;

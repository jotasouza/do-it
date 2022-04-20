import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 350px;

  h1 {
    text-shadow: 0px 4px 4px rgba(10, 5, 75, 0.5);
    font-size: 3.5rem;

    span {
      color: #d41e45;
    }
  }

  p {
    font-size: 1.8rem;
    flex-wrap: wrap;

    span {
      color: #d41e45;
      font-weight: 600;
      text-shadow: 0px 1px 2px rgba(10, 5, 75, 0.8);
    }
  }

  a {
    font-weight: bold;
    color: var(--color-alert);
  }

  div {
    flex: 1;
    display: flex;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }
`;

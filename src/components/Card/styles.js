import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-card);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 16px;
  box-shadow: 5px 5px 12px 0px #0c0636;
  border: 2px solid var(--color-border-input);
  color: var(--color-black);

  hr {
    width: 70%;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  button {
    margin-top: 80px;
    align-self: flex-end;
  }

  svg {
    font-size: 1.1rem;
    color: var(--color-alert);
    margin-right: 4px;
    transform: translateY(3px);
  }
`;

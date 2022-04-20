import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: var(--input-background-color);
  border-radius: 10px;
  border: 2px solid var(--color-border-input);
  color: var(--color-border-input);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--color-icons);
  }

  svg {
    margin-right: 10px;
  }
`;

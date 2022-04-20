import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  span {
    color: var(--color-alert);
    font-size: 0.8rem;
  }
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

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-alert);

      svg {
        color: var(--color-alert);
      }
    `}

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

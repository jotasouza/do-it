import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  background-color: var(--input-background-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;

  button {
    width: 80px;
    height: 35px;
    cursor: pointer;

    :hover {
      background-color: var(--color-alert);
    }
  }
`;

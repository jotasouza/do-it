import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#d41e45")};
  color: ${(props) => (props.whiteSchema ? "#d41e45" : "#f5f5f5")};
  height: 45px;
  width: 100%;
  border: 2px solid #d41e45;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin: 15px 0px 3px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    border: 2px solid #0c0636;
  }
`;

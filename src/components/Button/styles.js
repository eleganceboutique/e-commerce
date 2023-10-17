import styled from "styled-components";

export const Touchable = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border-color: ${(props) => props.borderColor};
  border-style: ${(props) => props.borderStyle};
  border-width: ${(props) => props.borderWidth};
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

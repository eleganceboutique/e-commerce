import styled from "styled-components";

export const Touchable = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border: ${(props) => `${props.borderWidth} ${props.borderStyle} ${props.borderColor}`};
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};

  &:hover {
    filter: brightness(0.9);
  }
`;

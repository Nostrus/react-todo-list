import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: #aaa;
  border: 1px solid #999;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;

  ${(props) => {
    return (
      props.primary &&
      css`
        background-color: rgb(80, 62, 255);
        color: #fff;
      `
    );
  }}
`;

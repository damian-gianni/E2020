import styled, { css } from "styled-components";

const Base = css`
  margin: 7px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  min-width: 224px;
  max-height: 3rem;
  border-radius: 100px;
  padding: 16px;
  font-family: "Russo One", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 0.89;
  letter-spacing: 0.41px;
  text-align: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-decoration: none;
  ${props => props.customStyle && props.customStyle}
`;

export const Button = styled.a`
  ${Base}
  box-shadow: 0 4px 4px 0 rgba(27, 38, 188, 0.1),
    0 1px 3px 0 rgba(0, 0, 0, 0.08);
  background-color: #f5deb3;
  color: #000;

  &:hover {
    background-color: #fff5e2;
  }

  ${props =>
    props.disabled &&
    css`
      background-color: #cdcdd2;
    `}
`;

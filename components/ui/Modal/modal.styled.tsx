import styled, { css } from "styled-components";

export const BtnClose = styled.a`
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  height: 24px;
  width: 24px;
  background-image: url("https://res.cloudinary.com/iunigo/image/upload/v1559588429/icons/close.svg");
`;
export const Root = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s;
  ${props =>
    props.open &&
    css`
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.9);
    `};
`;
export const Content = styled.div`
  position: absolute;
  padding: 40px 20px;
  top: 55px;
  left: 0;
  width: 100%;
  background-color: white;
  bottom: -100%;
  transition: all 0.5s;
  height: 95vh;
  max-height: 95vh;
  overflow: auto;
  text-align: left;
  ${props =>
    props.open &&
    css`
      bottom: 0;
    `};
  @media (min-width: 1024px) {
    border-radius: 16px;
    width: 90%;
    max-width: 700px;
    height: auto;
    right: auto;
    top: 150%;
    left: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
    ${props =>
      props.open &&
      css`
        top: 50%;
      `};
  }
`;

export const Container = styled.div`
  overflow: auto;
  max-height: 100%;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: grey;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  @media (min-width: 1024px) {
    max-height: 500px;
  }
`;

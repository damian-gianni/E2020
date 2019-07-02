import styled, { css } from "styled-components";

const Flip = css`
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

export const PictureBox = styled.div`
  padding: 8px;
  background-color: #f5f5f5;
  width: 110px;
  border-bottom: 1px solid #999999;
  border-right: 1px solid #999999;

  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;

  @media (min-width: 1024px) {
    width: 200px;
  }

  ${props =>
    props.flipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const ImageFlip = styled.img`
  ${Flip}
`;

export const TextFlip = styled.div`
  ${Flip}
  position: absolute;
  right: 0px;
  top: 0;
  padding: 8px;
  transform: rotateY(180deg);
`;

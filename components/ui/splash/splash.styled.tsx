import styled, { keyframes } from "styled-components";

const fade = keyframes`
80% {
  opacity: 1;
}
100% {
  opacity: 0;
  visibility: hidden;
}
`;

export const SplashContainer = styled.div`
  animation: 1.5s ${fade};
  animation-fill-mode: forwards;
  background: #000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const spin = keyframes`
	0% {
			transform: rotate(0deg);
	}
	100% {
			transform: rotate(360deg);
	}
`;

export const Loader = styled.div`
  margin: -30px 0 0 -30px;
  padding: 20px;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/soccer-ball-transparent_40x40.png)
    50% 50% no-repeat #fff;
  animation-name: ${spin};
  animation-duration: 1200ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

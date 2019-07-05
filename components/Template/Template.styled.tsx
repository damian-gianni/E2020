import styled, { css } from "styled-components";

export const MainSection = styled.main`
  padding: 70px 20px 0;

  ${props =>
    props.isHome &&
    css`
      background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/background-main_800x600.jpg);
      height: 100vh;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    `}
`;

import styled from "styled-components";
import { Icon, Toolbar, AppBar } from "@material-ui/core";

export const IconE2020 = styled.div`
  background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-app_128x128.png);
  background-size: cover;
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

export const CustomToolbar = styled(Toolbar)`
  min-width: 200px;
  padding: 15px;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://estudiantes2020.sfo2.digitaloceanspaces.com/bg-light_250x250.jpg);
  background-size: cover;
`;

export const CustomIcon = styled(Icon)`
  margin-right: 10px;
  vertical-align: bottom;
`;

export const IconEstudiantes = styled.div`
  background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/escudo_128x128.png);
  background-size: cover;
  width: 36px;
  height: 36px;
  position: absolute;
  left: 50%;
  margin-left: -20px;
`;
const SocialIcon = styled.a`
  cursor: pointer;
  height: 38px;
  width: 38px;
  background-size: cover;
  position: absolute;
  transition: 1s filter linear
  &:hover {
    filter: brightness(200%);
  }
`;
export const IconFacebook = styled(SocialIcon)`
  background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-redes_419x128.png);
  right: 120px;
`;

export const IconTwitter = styled(SocialIcon)`
  background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-redes_419x128.png);
  right: 70px;
  background-position-x: -43px;
`;

export const IconInstagram = styled(SocialIcon)`
  background-image: url(https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-redes_419x128.png);
  right: 20px;
  background-position-x: -86px;
`;

export const CustomAppBar = styled(AppBar)`
  opacity: 0.85;
`;

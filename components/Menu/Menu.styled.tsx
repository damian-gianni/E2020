import styled from "styled-components";
import { Icon, Toolbar } from "@material-ui/core";

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

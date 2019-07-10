import styled from "styled-components";
import { Card } from "@material-ui/core";

export const CustomCard = styled(Card)`
  flex: 100%; /* explanation below */
  margin: 10px 0;
  @media (min-width: 1024px) {
    flex: 1 1 30%; /* explanation below */
    margin: 0 20px 20px;
  }
`;

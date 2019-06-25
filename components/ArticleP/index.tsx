import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";

const ContentImageP = styled.div`
  background-image: url(https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/58579354_1041897162682052_519019816737046528_o.jpg?_nc_cat=107&_nc_oc=AQkCwRUKMh16uxtg2F1fSWOtFIHw8Z38-joY-HrVAtwaw4lIrJvMmsmr-A_5Lt6Q1f4RaitzXch0orYK11hzeomx&_nc_ht=scontent.faep5-1.fna&oh=6a4236878caf35033371d95b60e5a907&oe=5DB804EC);
  min-width: 100%;
  height: 210px;
  background-size: contain;
`;

const DescriptionImg = styled.div`
  padding-top: 135px;
  text-align: center;
`;

export default () => {
  return (
    <ContentImageP>
      <DescriptionImg>
        <Typography variant="overline">
          <Box fontWeight="fontWeightBold">La fiesta inolvidable</Box>
        </Typography>
      </DescriptionImg>
    </ContentImageP>
  );
};

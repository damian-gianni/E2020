import React from "react";
import {
  // CardActions,
  // Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { CustomCard } from "./Article.styled";

export default ({ actionClick, content }) => (
  <CustomCard onClick={event => actionClick({ event, content })}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={content.image.alt}
        image={content.image.url}
        title={content.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {content.title}
        </Typography>
        {content.description()}
      </CardContent>
    </CardActionArea>
    {/* <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions> */}
  </CustomCard>
);

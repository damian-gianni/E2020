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

export default ({ content }) => (
  <CustomCard>
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
        <Typography variant="body2" color="textSecondary" component="p">
          {content.description}
        </Typography>
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

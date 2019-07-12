import React from "react";
import { FacebookProvider, Like } from "react-facebook";
import {
  CardActions,
  // Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { CustomCard } from "./Article.styled";

const ContentArticle = ({ actionClick, content, facebookConnect }) => (
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
    {facebookConnect && (
      <CardActions>
        <Like
          href={`/projects/project?slug=${
            content.slug
          }`}
          colorScheme="dark"
          showFaces
          share
        />
        {/* <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button> */}
      </CardActions>
    )}
  </CustomCard>
);

export default props => {
  return props.facebookConnect ? (
    <FacebookProvider appId="502055123867626">
      <ContentArticle {...props} />
    </FacebookProvider>
  ) : (
    <ContentArticle actionClick content facebookConnect />
  );
};

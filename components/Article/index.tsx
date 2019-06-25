import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Typography
} from "@material-ui/core";
import { Favorite, MoreVert, Share } from "@material-ui/icons";

export default (article) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Recipe">R</Avatar>}
        action={
          <IconButton aria-label="Settings">
            <MoreVert />
          </IconButton>
        }
        title={article.title}
        subheader={article.creation_date}
      />
      <CardMedia image={article.image.url} title={article.image.alt} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {article.short_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="Share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

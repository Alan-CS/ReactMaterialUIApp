// Adapted from: https://material-ui.com/components/cards/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ContactCard({id, image, firstname, lastname, address, city, country, email}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {firstname.toString().toUpperCase().charAt(0)
            + lastname.toString().toUpperCase().charAt(0)}
          </Avatar>
        }
        title={firstname + " " + lastname}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={firstname + " " + lastname}
      />
      <CardContent>
        <Typography variant="h8" component="h2" gutterBottom>
          {address}
        </Typography>
        <Typography variant="h8" component="h2" gutterBottom>
          {city}
        </Typography>
        <Typography variant="h8" component="h2" gutterBottom>
          {country}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button color="primary" size="small">
          Edit
        </Button>
        <Button color="primary" size="small">
          View
        </Button>
        <Button color="primary" size="small">
          Send Email
        </Button>
      </CardActions>
    </Card>
  );
}

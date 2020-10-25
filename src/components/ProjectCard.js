import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "20rem",
    backgroundColor: "transparent",
    border: "0.1rem solid white",
    borderRadius: "1rem",
    width: "100%",
    padding: "1rem",
    margin: "1rem",
  },
  text: {
    color: "white",
    textDecoration: "none",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: ".5rem",
  },
  buttonContainer: {
    justifyContent: "space-evenly",
  },
  button: {
    border: "0.1rem solid white",
    borderRadius: "05.rem",
    textDecoration: "none",
    color: "white",
    padding: "1rem 2rem",
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          alt={props.title}
          height="10rem"
          image={`assets/images/cards/${props.img}`}
        />
        <CardContent className={classes.text}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography
            className={classes.text}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={(classes.text, classes.buttonContainer)}>
        {props.code && (
          <Button
            href={props.code}
            target="blank"
            className={classes.button}
            size="small"
            color="primary"
          >
            Code
          </Button>
        )}
        {props.demo && (
          <Button
            href={props.demo}
            target="blank"
            className={classes.button}
            size="small"
            color="primary"
          >
            Demo
          </Button>
        )}
        {props.more && (
          <Button
            href={props.demo}
            target="blank"
            className={classes.button}
            size="small"
            color="primary"
          >
            Learn more
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

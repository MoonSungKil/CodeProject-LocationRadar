import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 375,
    marginTop: "20%",
    backgroundColor: "rgba(0,0,0,0.2)",
    boxShadow: "5px 5px 5px rgba(0,0,0,0.3)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Lobster",
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: "10% auto",
  },
  slogan: {
    fontFamily: "Lobster",
  },
});

export default function ShareCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Share your location
        </Typography>
        <Typography className={classes.slogan} variant="h5" component="h2">
          Saw a radar? Tell a brother!
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="contained" color="primary">
          Primary
        </Button>
      </CardActions>
    </Card>
  );
}

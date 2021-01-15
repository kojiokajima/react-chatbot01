import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    "button": {
      borderColor: "#f5ca57",
      color: "#f5ca57",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#f5ca57",
        color: "#fff",
      },
    },
  })
);

const Answer = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
      {/* {classes.button} */}
      {/* console.log({classes.button}) */}
    </Button>
  );
};

export default Answer;

import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import NoProfile from "../assets/img/no-profile.png";
import Operator from "../assets/img/operator.png";
import Customer from "../assets/img/customer.png";


const useStyles = makeStyles(() => {
  createStyles({
    "p-chat__row": {
      borderColor: "#228ECE",
      color: "#228ECE",
    }
  });
});

const Chat = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";
  const classes2 = useStyles();

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {/* {console.log(classes2.chat)} */}
        {isQuestion ? (
          <Avatar alt="icon" src={Operator} />
        ) : (
          <Avatar alt="icon" src={Customer} />
        )}
      </ListItemAvatar>
      {/* <div className={"p-chat__bubble"}>{props.text}</div> */}
      <div className={"p-chat__bubble" + " " + `${classes2.chat}`}>
        {props.text}
      </div>
      <div className={"just"}>{classes2.chat}</div>
      {/* <button className={classes2.button}>Yo</button> */}
      {/* console.log({classes}) */}
      {/* console.log(wth{useStyles().chat}) */}
    </ListItem>
  );
};

export default Chat;

import React from "react";
import { Container, createStyles, makeStyles } from "@material-ui/core";
// import LoopIcon from "@material-ui/icons";
import { RiEBike2Fill } from "react-icons/ri";

export const useStyles = makeStyles(() =>
  createStyles({
    rotateIcon: {
      animation: "$spin 2s linear infinite",
    },
    "@keyframes spin": {
      "0%": {
        transform: "rotate(360deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
  })
);

export default function Clock() {
  const classes = useStyles();
  return (
    <>
      {/* <Container maxWidth="sm">
        <RiEBike2Fill className={classes.rotateIcon} />
      </Container> */}
      <div class="fa-3x">
        <i class="fa-solid fa-bell fa-shake"></i>
        <i class="fa-solid fa-lock fa-shake"></i>
        <i class="fa-solid fa-stopwatch fa-shake"></i>
        <i class="fa-solid fa-bomb fa-shake"></i>
      </div>
    </>
  );
}

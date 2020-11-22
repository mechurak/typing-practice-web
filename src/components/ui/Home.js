import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const QUESTIONS_LS = "questions";

const useStyles = makeStyles((theme) => ({
  setButton: {
    margin: "10px",
    minWidth: "180px"
  },
}));

const Home = () => {
  const classes = useStyles();
  const questions = JSON.parse(localStorage.getItem(QUESTIONS_LS)) || [];
  console.log(questions);
  const questionSet = [...new Set(questions.map((item) => item.set))];
  console.log(questionSet);

  return (
    <div>
      <Typography variant="h6">Choose a question set</Typography>
      {questionSet.map((item, index) => (
        <Button key={index} variant="contained" className={classes.setButton}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Home;

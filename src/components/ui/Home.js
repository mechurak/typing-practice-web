import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const QUESTIONS_LS = "questions";
const ANSWERS_LS = "answers";
const CUR_QUESTIONS_LS = "curQuestions";
const CUR_ANSWERS_LS = "curAnswers";

const useStyles = makeStyles((theme) => ({
  setButton: {
    margin: "10px",
    minWidth: "180px",
  },
}));

const Home = ({ history }) => {
  const classes = useStyles();

  const questions = JSON.parse(localStorage.getItem(QUESTIONS_LS)) || [];
  console.log(questions);
  const questionSet = [...new Set(questions.map((item) => item.set))];
  console.log(questionSet);
  const answers = JSON.parse(localStorage.getItem(ANSWERS_LS)) || [];

  const handleClick = (event) => {
    const setStr = event.target.innerText;
    console.log(setStr);
    const curQuestions = questions.filter((item) => item.set === setStr);
    console.log(curQuestions);
    let curAnswers = [];
    curQuestions.forEach((questionElement) => {
      for (let i = 0; i < answers.length; i++) {
        if (questionElement.answer_id === answers[i].id) {
          curAnswers.push(answers[i]);
          break;
        }
      }
    });
    console.log(curAnswers);
    if (curQuestions.length !== curAnswers.length) {
      alert(
        `curQuestions(${curQuestions.length}) and curAnswers(${curAnswers.length}) have different length.`
      );
    } else {
      localStorage.setItem(CUR_QUESTIONS_LS, JSON.stringify(curQuestions));
      localStorage.setItem(CUR_ANSWERS_LS, JSON.stringify(curAnswers));
      // TODO: Let Header know this change
      history.push("practice");      
    }
  };

  return (
    <div>
      <Typography variant="h6">Choose a question set</Typography>
      {questionSet.map((item, index) => (
        <Button
          key={index}
          variant="contained"
          className={classes.setButton}
          onClick={handleClick}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Home;

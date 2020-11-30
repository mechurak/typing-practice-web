import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const QUESTIONS_LS = "questions";
const ANSWERS_LS = "answers";
const CUR_QUESTIONS_LIST_LS = "curQuestionsList";
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
    let curQuestionsList = []
    questions.forEach((question) => {
      if (question.set === setStr) {
        curQuestionsList.push([question]);
      }
    });
    console.log(curQuestionsList);    
    let curAnswers = [];
    curQuestionsList.forEach((curQuestions) => {
      for (let i = 0; i < answers.length; i++) {
        if (curQuestions[0].answer_id === answers[i].id) {
          curAnswers.push(answers[i]);
          break;
        }
      }
    });
    console.log(curAnswers);
    if (curQuestionsList.length !== curAnswers.length) {
      alert(
        `curQuestionsList(${curQuestionsList.length}) and curAnswers(${curAnswers.length}) have different length.`
      );
    } else {
      localStorage.setItem(CUR_QUESTIONS_LIST_LS, JSON.stringify(curQuestionsList));
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

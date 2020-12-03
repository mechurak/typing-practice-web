import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import { SubscriptionsOutlined } from "@material-ui/icons";
import React from "react";

const QUESTIONS_LS = "questions";
const ANSWERS_LS = "answers";
const CUR_QUESTIONS_LIST_LS = "curQuestionsList";
const CUR_ANSWERS_LS = "curAnswers";

const useStyles = makeStyles((theme) => ({
  setButton: {
    margin: "10px",
    minWidth: "180px",
    textTransform: "none",
  },
}));

const Home = ({ history }) => {
  const classes = useStyles();

  const questions = JSON.parse(localStorage.getItem(QUESTIONS_LS)) || [];
  console.log(questions);
  const questionSet = [...new Set(questions.map((item) => item.set))];
  console.log(questionSet);
  const answers = JSON.parse(localStorage.getItem(ANSWERS_LS)) || [];
  console.log(answers);
  const subjects = [...new Set(answers.map((answer) => answer.subject))];
  console.log(subjects);

  const handleSetClick = (event) => {
    const setStr = event.target.innerText;
    console.log(setStr);
    let curQuestionsList = [];
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
      localStorage.setItem(
        CUR_QUESTIONS_LIST_LS,
        JSON.stringify(curQuestionsList)
      );
      localStorage.setItem(CUR_ANSWERS_LS, JSON.stringify(curAnswers));
      // TODO: Let Header know this change
      history.push("practice");
    }
  };

  const handleSubjectClick = (event) => {
    const subject = event.target.innerText;
    console.log(subject);
    let curAnswers = [];
    answers.forEach((answer) => {
      if (answer.subject === subject) {
        curAnswers.push(answer);
      }
    });
    console.log(curAnswers);
    let curQuestionsList = [];
    curAnswers.forEach((curAnswer, answerIdx) => {
      let tempArrayForMap = [];
      for (let i = 0; i < questions.length; i++) {
        if (curAnswer.id === questions[i].answer_id) {
          tempArrayForMap.push([questions[i]["question"], questions[i]]);
        }
      }
      const tempMap = new Map();
      tempArrayForMap.forEach((keyValue, i) => {
        const [key, value] = keyValue;
        let objFromMap = tempMap.get(key);
        if (objFromMap === undefined) {
          tempMap.set(key, value);
        } else {
          const setStr = value.set.split("#").pop();  // "집#02" -> "02"
          objFromMap.set = objFromMap.set + "," + setStr;
          const idStr = value.id.split("#").pop();  // "Housing#q7" -> "q7"
          objFromMap.id = objFromMap.id + "," + idStr;
        }
      });
      // console.log("tempMap", tempMap);
      const tempQuestionsItem = [...tempMap.values()];
      // console.log("tempQuestionsItem", tempQuestionsItem);
      curQuestionsList.push(tempQuestionsItem);
    });
    console.log(curQuestionsList);

    localStorage.setItem(
      CUR_QUESTIONS_LIST_LS,
      JSON.stringify(curQuestionsList)
    );
    localStorage.setItem(CUR_ANSWERS_LS, JSON.stringify(curAnswers));
    // TODO: Let Header know this change
    history.push("practice");
  };

  return (
    <div>
      <Typography variant="h6">Practice by question set</Typography>
      {questionSet.map((item, index) => (
        <Button
          key={index}
          variant="contained"
          className={classes.setButton}
          onClick={handleSetClick}
        >
          {item}
        </Button>
      ))}
      <Divider />
      <Typography variant="h6">Practice by subject</Typography>
      {subjects.map((item, index) => (
        <Button
          key={index}
          variant="contained"
          className={classes.setButton}
          onClick={handleSubjectClick}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Home;

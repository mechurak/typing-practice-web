import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import Typing from "../Typing";

const CUR_QUESTIONS_LS = "curQuestions";
const CUR_ANSWERS_LS = "curAnswers";

const tempQuestions = [
  {
    subject: "Furniture",
    category: "common",
    set: "가구#01",
    id: "Furniture#q1",
    final: "",
    hint: "[Int] 본인 집에 있는 가구, 가장 좋아하는 가구 묘사 - 침대",
    question: `Tell me about the furniture you have in your home.
Is there a piece that is your favorite?`,
    description: "",
    answer_id: "Furniture#a1",
  },
];

const tempAnswers = [
  {
    subject: "Furniture",
    id: "Furniture#a1",
    hint: "[Int] 본인 집에 있는 가구, 가장 좋아하는 가구 묘사 - 침대",
    answer: `There are many types of furniture in my apartment.

In the living room, there is a sofa, a coffee table and a display case.
In the bedroom, I have a desk, a chair, a bed and a nightstand.
I also have some bookshelves and a dressing table.
I also have some dressers and some built-in closets.

Among them, my favorite furniture is my bed because I love to sleep.
I have had that bed for five years.
It is very comfy and cozy, so it helps me get quality sleep.
I think getting a good night's sleep is very important.
I need to get at least seven hours of sleep each day.
The mattress is covered with a bed sheet.
There is a warm blanket and several pillows on the bed.
There is also an electronic mat on the bed, which keeps me warm at night.

I always make my bed when I wake up in the morning.
I like to keep my bed nice and tidy.

So, these are the furniture I have at home.`,
    description: "본인 방 묘사 답변에 활용",
    important: "",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
}));

export default function Practice() {
  const classes = useStyles();

  const questions =
    JSON.parse(localStorage.getItem(CUR_QUESTIONS_LS)) || tempQuestions;
  const answers =
    JSON.parse(localStorage.getItem(CUR_ANSWERS_LS)) || tempAnswers;
  const questionLength = questions.length;

  const [curIndex, setCurIndex] = useState(0);
  const [hintEnabled, setHintEnabled] = useState(false);
  const [guideEnabled, setGuideEnabled] = useState(false);

  const handleNext = () => {
    let newIndex = curIndex + 1;
    if (newIndex >= questionLength) {
      newIndex = 0;
    }
    setCurIndex(newIndex);
  };

  const handlePrev = () => {
    let newIndex = curIndex - 1;
    if (newIndex < 0) {
      newIndex = questionLength - 1;
    }
    setCurIndex(newIndex);
  };

  const handleHint = () => {
    setHintEnabled(~hintEnabled);
  };

  const handleGuide = () => {
    setGuideEnabled(~guideEnabled);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                [{questions[curIndex]["set"]}] {questions[curIndex]["id"]}
              </Typography>
              <pre style={{ fontFamily: "inherit" }}>
                <Typography variant="body1" component="p">
                  {questions[curIndex]["question"]}
                </Typography>
              </pre>
              {hintEnabled ? (
                <>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Hint ({questions[curIndex]["id"]})
                  </Typography>
                  <Typography variant="body2" component="p">
                    {questions[curIndex]["hint"]}
                  </Typography>
                </>
              ) : null}
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handlePrev}>
                Prev
              </Button>
              <Typography variant="body1">
                {curIndex + 1} / {questionLength}
              </Typography>
              <Button size="small" onClick={handleNext}>
                Next
              </Button>
              <Button
                size="small"
                variant="outlined"
                color={hintEnabled ? "primary" : "default"}
                onClick={handleHint}
              >
                {hintEnabled ? "Hint off" : "Hint on"}
              </Button>
            </CardActions>
          </Card>
          {hintEnabled ? (
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Hint ({answers[curIndex]["id"]})
                </Typography>
                <pre style={{ fontFamily: "inherit" }}>
                  <Typography variant="body2" component="p">
                    {answers[curIndex]["hint"]}
                  </Typography>
                </pre>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Description ({answers[curIndex]["id"]})
                </Typography>
                <pre style={{ fontFamily: "inherit" }}>
                  <Typography variant="body2" component="p">
                    {answers[curIndex]["description"]}
                  </Typography>
                </pre>
              </CardContent>
            </Card>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {answers[curIndex]["id"]}
              </Typography>
              <Typing
                leftStr={answers[curIndex]["answer"]}
                guideEnabled={guideEnabled}
              />
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color={guideEnabled ? "primary" : "default"}
                onClick={handleGuide}
              >
                {guideEnabled ? "Guide off" : "Guide on"}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

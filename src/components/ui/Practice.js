import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';

const tempQuestions = [
  {
    "subject": "Furniture",
    "category": "common",
    "set": "가구#01",
    "id": "Furniture#q1",
    "final": "",
    "hint": "[Int] 본인 집에 있는 가구, 가장 좋아하는 가구 묘사 - 침대",
    "question": `Tell me about the furniture you have in your home.
Is there a piece that is your favorite?`,
    "description": "",
    "answer_id": "Furniture#a1",
  },
]

const tempAnswers = [
  {
    "subject": "Furniture",
    "id": "Furniture#a1",
    "hint": "[Int] 본인 집에 있는 가구, 가장 좋아하는 가구 묘사 - 침대",
    "answer": `There are many types of furniture in my apartment.

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
There is also an electronic mat on the bad, which keeps me warm at night.

I always make my bed when I wake up in the morning.
I like to keep my bed nice and tidy.

So, these are the furniture I have at home.`,
    "description": "본인 방 묘사 답변에 활용",
    "important": "",
  },
]


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
  answerText: {
    width: '100%',
    height: '300px',
  },
}));

export default function Practice() {
  const classes = useStyles();
  console.log(tempQuestions[0]);
  console.log(tempAnswers[0]);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {tempQuestions[0]["id"]}
              </Typography>
              <Typography variant="body1">
                <pre style={{ fontFamily: 'inherit' }}>
                  {tempQuestions[0]["question"]}
                </pre>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Hint</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {tempAnswers[0]["id"]}
              </Typography>
              <div class="diff_container">
                <div class="backdrop">
                  <div class="diff_highlights"></div>
                </div>
                <textarea id="my_textarea" className={classes.answerText}>
                  {tempAnswers[0]["answer"]}
                </textarea>
              </div>              
            </CardContent>
            <CardActions>
              <Button size="small">Hint</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
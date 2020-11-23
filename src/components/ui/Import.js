import { Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import Tabletop from "tabletop";

const QUESTIONS_LS = "questions";
const ANSWERS_LS = "answers";

export default function Practice() {
  const [sheetUrl, setSheetUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1q9dzowKY0p5_Ee-OiCH2bbtTkycOmru-evlj9MsHr1E/edit#gid=284135557"
  );
  const [isImporting, setIsImporting] = useState(false);

  const questions = JSON.parse(localStorage.getItem(QUESTIONS_LS)) || [];
  const answers = JSON.parse(localStorage.getItem(ANSWERS_LS)) || [];

  const handleUrlChange = (event) => {
    const {
      target: { value },
    } = event;
    setSheetUrl(value);
  };

  const loadSheet = () => {
    console.log("loadSheet()", sheetUrl);
    setIsImporting(true);
    Tabletop.init({
      key: sheetUrl,
      callback: (data, tabletop) => {
        const questions = tabletop.sheets("question").all();
        const answers = tabletop.sheets("answer").all();
        console.log(questions);
        localStorage.setItem(QUESTIONS_LS, JSON.stringify(questions));
        console.log(answers);
        localStorage.setItem(ANSWERS_LS, JSON.stringify(answers));
        setIsImporting(false);
      },
      simpleSheet: true,
    });
  };

  return (
    <div>
      <Typography variant="h6">Import your data from google sheet.</Typography>
      <TextField
        label="google sheet url"
        defaultValue={sheetUrl}
        fullWidth
        onChange={handleUrlChange}
      />
      <Button variant="contained" color="primary" onClick={loadSheet}>
        Import
      </Button>
      {isImporting ? (
        <Typography variant="body2">Importing...</Typography>
      ) : (
        <Typography variant="body2">
          {questions.length} questions, {answers.length} answers are loaded.
        </Typography>
      )}
    </div>
  );
}

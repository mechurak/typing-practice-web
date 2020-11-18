import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import Tabletop from "tabletop";

export default function Practice() {
  const [sheetUrl, setSheetUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1q9dzowKY0p5_Ee-OiCH2bbtTkycOmru-evlj9MsHr1E/edit#gid=284135557"
  );

  const handleUrlChange = (event) => {
    const {
      target: { value },
    } = event;
    setSheetUrl(value);
  };

  const loadSheet = (event) => {
    console.log("loadSheet()", sheetUrl);
    Tabletop.init({
      key: sheetUrl,
      callback: (data, tabletop) => {
        const questions = tabletop.sheets("question").all();
        const answers = tabletop.sheets("answer").all();
        // TODO: Save it to localStorage
        console.log(questions);
        console.log(answers);
      },
      simpleSheet: true,
    });
  };

  return (
    <div>
      <h3>Import!!!!</h3>
      <TextField
        label="google sheet url"
        defaultValue={sheetUrl}
        fullWidth
        onChange={handleUrlChange}
      />
      <Button variant="contained" color="primary" onClick={loadSheet}>
        Import
      </Button>
    </div>
  );
}

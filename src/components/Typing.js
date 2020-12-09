import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Character from "./Character";

export default function Typing({ leftStr, guideEnabled }) {
  const strArray = [...leftStr];
  const [curIndex, setCurIndex] = useState(0);
  const [input, setInput] = useState("");
  const ignoreList = ["Alt", "Shift", "Control", "HangulMode", "HanjaMode"];
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0.0);

  useEffect(() => {
    setCurIndex(0);
  }, [leftStr]);

  const calcWpm = () => {
    const elapsedTime = Date.now() - startTime;
    const words = curIndex / 5;
    const tempWpm = ((words / elapsedTime) * 1000 * 60).toFixed(1);
    setWpm(tempWpm);
  };

  const handleTyping = (e) => {
    if (ignoreList.indexOf(e.key) > -1) {
      // ignore
    } else if (e.key === "Backspace" && curIndex > 0) {
      setCurIndex(curIndex - 1);
      setInput("");
    } else if (e.key === strArray[curIndex]) {
      setCurIndex(curIndex + 1);
      setInput("");
    } else if (e.key === "Enter" && strArray[curIndex] === "\n") {
      setCurIndex(curIndex + 1);
      setInput("");
    } else {
      setInput(e.key);
    }

    // WPM
    if (curIndex === 1) {
      const tempStartTime = Date.now();
      setStartTime(tempStartTime);
      console.log("Start!!!", tempStartTime);
    }
    if (e.key === " " || e.key === "Enter") {
      calcWpm();
    }
  };

  return (
    <div>
      <Typography>wpm: {wpm}</Typography>
      <div tabIndex={0} onKeyDown={handleTyping}>
        {strArray.map((c, i) => {
          return (
            <Character
              key={i}
              c={c}
              index={i}
              cursor={curIndex}
              input={input}
              guideEnabled={guideEnabled}
            />
          );
        })}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Character from './Character';

export default function Typing({ leftStr }) {
  const strArray = [...leftStr];
  const [curIndex, setCurIndex] = useState(0);
  const [input, setInput] = useState("");
  const ignoreList = ["Alt", "Shift", "Control", "HangulMode", "HanjaMode"];

  const handleTyping = (e) => {
    if (ignoreList.indexOf(e.key) > -1) {
      // ignore
    }
    else if (e.key === "Backspace" && curIndex > 0) {
      setCurIndex(curIndex - 1);
      setInput("");
    }
    else if (e.key === strArray[curIndex]) {
      setCurIndex(curIndex + 1);
      setInput("");
    }
    else if (e.key === "Enter" && strArray[curIndex] === "\n") {
      setCurIndex(curIndex + 1);
      setInput("");
    }
    else {
      setInput(e.key);
    }
  };

  return (
    <div tabIndex={0} onKeyUp={handleTyping}>
      {
        strArray.map((c, i) => {
          return <Character key={i} c={c} index={i} cursor={curIndex} input={input} />
        })
      }
    </div>
  )
}
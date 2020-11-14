import React from 'react';

export default function Character({ c, index, cursor, input }) {
  const waitStyle = {
    color: "silver",
    borderBottom: "3px solid blue",
  }
  const typoStyle = {
    color: "red",
    borderBottom: "3px solid red",
  }
  const todoStyle = {
    color: "snow"
  }
  const doneStyle = {
    color: "black"
  }

  let realStyle = {};
  if (index === cursor) {
    if (input === "") {
      realStyle = waitStyle;
    } else {
      realStyle = typoStyle;
    }
  } else if (index < cursor){
    realStyle = doneStyle;
  } else if (index > cursor) {
    realStyle = todoStyle;
  }

  return (
    <span style={realStyle}>
      {c === '\n' ? <br /> : c}
    </span>
  )
}
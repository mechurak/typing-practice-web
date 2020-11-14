import { Box } from '@material-ui/core';
import React from 'react';

export default function Typing({ leftStr }) {
  const strArray = [...leftStr];
  console.log(strArray);

  return (
    <div>
      {
        strArray.map((c, i) => {
          if (c === '\n') {
            return <Box key={i}>{c}</Box>
          }
          return <Box component="span" key={i}>{c}</Box>
        })
      }
    </div>
  )
}
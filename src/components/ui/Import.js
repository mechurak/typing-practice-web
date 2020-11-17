import { useEffect, useState } from "react";
import Tabletop from "tabletop";

export default function Practice() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1q9dzowKY0p5_Ee-OiCH2bbtTkycOmru-evlj9MsHr1E",
      callback: (googleData) => {
        setData(googleData);
      },
      simpleSheet: true,
    });
  }, []);

  console.log("updated state --->", data);
  return (
    <div>
      <h3>Import!!!!</h3>
      {data.map((element) => (
        <div key={element.id}>
          <p>{element.answer}</p>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import styled from "styled-components";

const CodeStyle = styled.div`
  margin: 2rem auto 5rem 18rem;
`;

function Code() {
  const data = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "Z",
  ];
  let i;
  let newCode = "";
  for (i = 0; i < 6; i++) {
    newCode += data[Math.floor(Math.random() * data.length)];
  }
  console.log("code", newCode);
  return (
    <CodeStyle>
      Your reservation code is: <b>{newCode}</b>. Please show this code when you
      arrive to the restaurant.
    </CodeStyle>
  );
}

export default Code;

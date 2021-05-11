import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CodeStyle = styled.div`
  margin: 2rem auto 5rem 3rem;
  font-size: 1.5rem;
`;

function Code() {
  const newCode = useSelector((state) => {
    return state.orderReducer.code;
  });
  console.log("code", newCode);
  return (
    <CodeStyle>
      Your reservation code is: <b>{newCode}</b> .Please show this code when you
      arrive to the restaurant.
    </CodeStyle>
  );
}

export default Code;

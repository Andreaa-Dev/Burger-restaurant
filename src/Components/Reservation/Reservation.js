import React from "react";

import Instruction from "./Instruction";
import Timetable from "./Timetable";
import Code from "./Code";
import Email from "./Email";

import styled from "styled-components";

const Style = styled.div`
  font-style: inherit;
  background-color: white;
  height: 80%;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

function Reservation() {
  return (
    <Style>
      <Title>Book reservation </Title>
      <Instruction />
      <Timetable />
      <Code />
      <Email />
    </Style>
  );
}

export default Reservation;

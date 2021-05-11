import React from "react";

import { useDispatch } from "react-redux";
import { createCode } from "../../Redux/action";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Timetable from "./Timetable";
import Code from "./Code";
import CustomerInformation from "./CustomerInformation";

import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginLeft: theme.spacing(70),
      marginTop: theme.spacing(5),
    },
  },
}));

const Style = styled.div`
  font-style: inherit;

  height: 80%;
  width: 100%;
  font-size: 2rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: white;
`;

const Text = styled.p`
  margin: 4rem 5rem auto 17rem;
  font-weight: bold;
  color: white;
`;

const Card = styled.div`
  border: 0.1rem solid black;
  margin: 4rem 15rem auto 15rem;
  background-color: white;
`;

function Reservation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Style>
      <Title>reservation </Title>
      <Text>
        For parties of six or more, we recommend making reservation at least 2
        weeks in advance.
      </Text>

      <Card>
        <CustomerInformation />
        <Timetable />

        <div className={classes.root}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(createCode())}
          >
            Submit
          </Button>
        </div>

        <Code />
      </Card>
    </Style>
  );
}

export default Reservation;

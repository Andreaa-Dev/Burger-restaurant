import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import m1 from "../Imagine/m1.jpeg";
import m2 from "../Imagine/m2.jpeg";
import m3 from "../Imagine/m3.jpeg";
import m4 from "../Imagine/m4.jpeg";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 5rem auto 5rem auto;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 100,
    paddingLeft: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 950,
    maxWidth: 700,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
}));

export default function Menu() {
  const MenuItems = useSelector((state) => {
    return state.orderReducer.menuItems;
  });
  console.log("menu", MenuItems);
  const tutorialSteps = [
    {
      label: MenuItems[0].name,
      description: MenuItems[0].description,
      price: MenuItems[0].price,
      imgPath: m1,
    },
    {
      label: MenuItems[1].name,
      description: MenuItems[1].description,
      price: MenuItems[1].price,
      imgPath: m2,
    },
    {
      label: MenuItems[2].name,
      description: MenuItems[2].description,
      price: MenuItems[2].price,
      imgPath: m3,
    },
    {
      label: MenuItems[3].name,
      description: MenuItems[3].description,
      price: MenuItems[3].price,
      imgPath: m4,
    },
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Title>BURGER HEAVEN MENU</Title>
      <Paper square elevation={0} className={classes.header}>
        <Typography>
          <b> {tutorialSteps[activeStep].label}</b>
          <p>{tutorialSteps[activeStep].description}</p>
          <b>{tutorialSteps[activeStep].price} $</b>
        </Typography>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

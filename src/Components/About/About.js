import React from "react";
import styled from "styled-components";
import restaurant from "../Imagine/restaurant.jpeg";
import burger from "../Imagine/burger.jpeg";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginLeft: theme.spacing(30),
    marginBottom: theme.spacing(3),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
const Title = styled.h1`
  color: white;
  text-align: center;
`;
const Img1 = styled.img`
  height: 50rem;
  width: 30rem;
  float: left;
  margin: 1.5rem 2rem auto 15rem;
`;

const Img2 = styled.img`
  height: 30rem;
  width: 40rem;
  float: right;
  margin: 1rem 3rem auto 2rem;
`;
const Text = styled.p`
  color: white;
  font-size: 1.5rem;
  line-height: 1.7;
  font-weight: bold;
  text-indent: 4rem;
  margin: 1rem 5rem 1rem 15rem;
`;
const Text1 = styled.p`
  color: white;
  font-size: 1.5rem;
  line-height: 1.7;
  text-indent: 4rem;
  font-weight: bold;
  margin: 1rem 5rem 1rem 1rem;
`;
const Text2 = styled.p`
  color: white;
  font-size: 1.5rem;
  line-height: 1.7;
  text-indent: 4rem;
  font-weight: bold;
  width: 50vw;
  height: 35rem;
  margin: 10rem auto auto 15rem;
`;
const CapText = styled.div`
  text-transform: capitalize;
  display: inline-block;
  font-size: 3rem;
`;
export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Title>ABOUT US</Title>
      <div>
        <div>
          <Text>
            <CapText>B</CapText>urger Heaven - A thick, juicy beef patty, cheese
            losing its hard edges as it melts overtop, a slathering of sauce, a
            spoonful of tangy relish and a couple of slices of smoky, salty
            bacon, a bit of onion, some tomato and crisp lettuce all tucked
            between two halves of a bun: it is all the things anyone could want.
          </Text>
          <Img1 src={restaurant} alt="error" />
          <Text1>
            <CapText>M</CapText>
            ore than the sum of their parts and beyond just a beef patty between
            two halves of a bun, burgers are a nod to nostalgia. They kindle
            memories of childhood delight when they were on the menu for dinner.
            They echo of the bygone era of milkshakes and burgers at the local
            diner with poodle-skirted girls flirting with
            letterman-sweater-wearing boys. They evoke backyard barbecues and
            afternoons on the local pub patio with a beer.
          </Text1>
          <Text1>They are fun on a bun.</Text1>
          <Text1>
            Almost every restaurant offers up a burger, each as varied as the
            person who created it. Fast food joints have made this iconic
            sandwich an integral part of their menu, offering a standard,
            consistent burger no matter the location. The building blocks are
            always the same; the beauty of a burger is in the interpretation of
            those ingredients and the execution. What sets one apart from
            another is in the details. They can be simple or elegantly
            over-the-top and hit all the categories in between. They can be
            good; they can be mediocre. Thankfully, only rarely, are they bad.
          </Text1>
        </div>

        <div>
          <Img2 src={burger} alt="error" />

          <Text2>
            And then there are the best burgers, the ones that are
            well-flavoured and spiced, where all those building block
            ingredients are stacked in a way that they bring out the best in
            each other — all in an edible package that fits nicely between two
            hands. The beef is tender, the sauces complement instead of
            overwhelming and it’s all on a bun is solid enough to hold it
            together and soak up the juices from beef and sauce, but not so much
            it overwhelms all the goodness inside.
          </Text2>
        </div>
      </div>

      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

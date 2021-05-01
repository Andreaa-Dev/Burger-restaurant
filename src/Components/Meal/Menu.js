import React from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";

const MenuItems = [
  {
    id: "m1",
    name: "BBQ Burger",
    description: " steak, jalapeno,home-made BBQ sauce",
    price: 14.9,
  },
  {
    id: "m2",
    name: "Devil Burger",
    description: "steak, bacon, egg, onion ring, aioli sauce",
    price: 13.9,
  },
  {
    id: "m3",
    name: "Mexican Burger",
    description: "steak, jalapeno, taco sauce, bacon, orion ring",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Vegan Burger",
    description:
      "Vegan steak, mayonnaise, grilled pepper, eggplant, cheese, rucola ",
    price: 15.5,
  },
];

function Menu() {
  const items = MenuItems.map((item) => <MenuCard item={item} />);
  return <div>{items}</div>;
}

export default Menu;

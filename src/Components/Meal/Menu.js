import React from "react";
import { useSelector } from "react-redux";

import MenuCard from "./MenuCard";

function Menu() {
  const MenuItems = useSelector((state) => {
    return state.orderReducer;
  });

  const items = MenuItems.map((item) => <MenuCard item={item} />);
  return <div>{items}</div>;
}

export default Menu;

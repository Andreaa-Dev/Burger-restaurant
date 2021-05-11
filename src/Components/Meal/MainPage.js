import React from "react";
import { Link } from "react-router-dom";
import Introduction from "./Introduction";
import { useSelector } from "react-redux";

import MenuCard from "./MenuCard";

function MainPage() {
  const MenuItems = useSelector((state) => {
    return state.orderReducer.menuItems;
  });

  const items = MenuItems.map((item) => <MenuCard item={item} />);
  return (
    <div>
      <Introduction />
      {items}
    </div>
  );
}

export default MainPage;

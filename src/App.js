import "./App.css";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";

import MainPage from "./Components/Meal/MainPage";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar";
import Reservation from "./Components/Reservation/Reservation";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppStyle>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/reservation">
          <Reservation />
        </Route>

        <Route exact path="/menu">
          <Menu />
        </Route>
      </Switch>

      <Footer />
    </AppStyle>
  );
}

export default App;

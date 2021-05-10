import NavBar from "./Components/Header/NavBar";
import Introduction from "./Components/Meal/Introduction";
import Menu from "./Components/Meal/Menu";
import Footer from "./Components/Footer/Footer";
import styled from "styled-components";
import "./App.css";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppStyle>
      <NavBar />
      <Introduction />
      <Menu />
      <Footer />
    </AppStyle>
  );
}

export default App;

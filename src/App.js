import Header from "../src/Components/Header/Header.js";
import "./App.scss";
import { Outlet, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="App-container">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import User from "./Components/User/User";
import Admin from "./Components/Admin/Admin";
import { Outlet, Link } from "react-router-dom";
import Homepage from "./Components/Home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />}></Route>
          <Route path="users" element={<User />}></Route>
          <Route path="admins" element={<Admin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
// library : react toastify  react paginate , axios
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

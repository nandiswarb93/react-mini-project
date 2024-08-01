import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Registration from "./registration";
import Invalid from "./invalid";
import Menu from "./menu";
import Location from "./location";
import Recipes from "./recipes.js";
const Navigator = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>

          <Route path={"/login"} element={<Login />}></Route>

          <Route path={"/registration"} element={<Registration />}></Route>

          <Route path={"/location"} element={<Location />}></Route>
          <Route path={"/menu/:id"} element={<Recipes />} />

          <Route path={"/*"} element={<Invalid />}></Route>

          <Route path={"/menu"} element={<Menu />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Navigator;

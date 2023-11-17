import SignUpForm from "./pages/SignUpForm";
import SigninForm from "./pages/SigninForm";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Cart from "./pages/Cart";
import RestaurantMenu from "./pages/RestaurantMenu";

const Root = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurants/:id" element={<RestaurantMenu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*">Not Found</Route>
    </Route>
  )
);

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;

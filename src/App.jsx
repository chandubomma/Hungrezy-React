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
import RestaurantMenu from "./pages/RestaurantMenu";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/home/Navbar";
import CheckOut from "./pages/CheckOut";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";

const Root = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Toaster />
    </React.Fragment>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/recipes" element={<Recipes/>} />
      <Route path="/restaurantmenu" element={<RestaurantMenu />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;

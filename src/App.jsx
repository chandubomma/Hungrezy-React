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
import RecipePage from "./pages/RecipePage";
import { useLocation } from "react-router-dom";
import Admin from "./pages/RestaurantAdmin";

const Root = () => {
  const location = useLocation();
  // Define an array of paths where you want to hide the Navbar
  const pathsWithoutNavbar = ["/signin", "/signup", "/restaurant/dashboard"];

  // Check if the current path is in the array
  const hideNavbar = pathsWithoutNavbar.includes(location.pathname);
  return (
    <React.Fragment>
      {!hideNavbar && <Navbar />}
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
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/restaurantmenu" element={<RestaurantMenu />} />
      <Route path="/recipepage" element={<RecipePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/restaurant/dashboard" element={<Admin />} />
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

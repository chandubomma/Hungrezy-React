import SignUpForm from "./pages/SignUpForm";
import SigninForm from "./pages/SigninForm";
import { Toaster, toast } from 'sonner'
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
//import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import RecipePage from "./pages/RecipePage";
import { useLocation } from "react-router-dom";
import Dashboard from "./components/restaurantAdmin/Dashboard/Dashboard";
import RestaurantNavbar from "./components/restaurantAdmin/RestaurantNavbar";
import Sidebar from "./components/restaurantAdmin/Sidebar";
import Orders from "./components/restaurantAdmin/Orders/Orders";
import MenuList from "./components/restaurantAdmin/Menu/MenuList";
import AddMenu from "./components/restaurantAdmin/Menu/AddMenu";
import EmailSigninForm from "./pages/EmailSigninForm";
import EditMenu from "./components/restaurantAdmin/Menu/EditMenu";
import Order from "./components/restaurantAdmin/Orders/Order";
import Reviews from "./components/restaurantAdmin/Reviews/Reviews";
import RestaurantProfile from "./components/restaurantAdmin/Profile/RestaurantProfile";
import RestaurantSignUpForm from "./pages/ResataurantSignupForm";

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
      <Toaster position="bottom-center"  richColors/>
    </React.Fragment>
  );
};

const RestaurantAdmin = () => {
  return (
    <div className="max-h-full m-0">
      <RestaurantNavbar />
      <div className="flex flex-row">
        <div className="lg:flex-[2]">
          <Sidebar />
        </div>
        <div className="flex-[11] max-h-[88.5vh] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  return (
    <div className="max-h-full m-0">
      <Outlet />
    </div>
  );
};

const EmptyOutletWithToaster = ()=>{
  return(
    <div>
        <Outlet/>
        <Toaster position="top-right"  richColors/>
    </div>
  )
}

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route element={<Root />}>
        <Route index element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="restaurantmenu" element={<RestaurantMenu />} />
        <Route path="recipepage" element={<RecipePage />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="signin" element={<SigninForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Route>

      <Route path="restaurant" element={<EmptyOutletWithToaster/>}>
        <Route path="" element={<PageNotFound />} />
        <Route path="" element={<RestaurantAdmin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<Order />} />
          <Route path="menu" element={<MenuList />} />
          <Route path="add-menu" element={<AddMenu />} />
          <Route path="edit-menu/:id" element={<EditMenu />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="profile" element={<RestaurantProfile />} />
        </Route>
        <Route path="signin" element={<EmailSigninForm />} />
        <Route path="signup" element={<RestaurantSignUpForm />} />
      </Route>

      <Route path="admin" element={<Outlet />}>
        <Route path="" element={<PageNotFound />} />
        <Route path="" element={<Admin />}>
          {/* todo : admin routes */}
        </Route>
        <Route path="signin" element={<EmailSigninForm />} />
      </Route>

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

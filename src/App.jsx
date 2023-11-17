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

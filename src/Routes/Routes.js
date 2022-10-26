import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Faq from "../components/FAQ/Faq";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main";
import Login from "../components/LogIn/Login";
import NotFound from "../components/NotFound/NotFound";
import SignUp from "../components/SignUp/SignUp";
import TermsAndCondition from "../components/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",

        element: <Home></Home>,
      },
      {
        path: "learn",
        loader: () => fetch("https://learn-shine-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "learn/:id",
        loader: ({ params }) =>
          fetch(`https://learn-shine-server.vercel.app/courses/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "checkout/:id",
        loader: ({ params }) =>
          fetch(`https://learn-shine-server.vercel.app/courses/${params.id}`),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);

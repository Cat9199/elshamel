import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Course from "./pages/Course.jsx";
import PriveteRoute from "./components/PriveteRoute.jsx";
import Profile from "./pages/Profile.jsx";
import Teacher from "./pages/Teacher.jsx";

import AllCourses from "./pages/AllCourses.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/courses",
        element: <AllCourses />,
      },
      {
        path: "/course/:courseId",
        element: <Course />,
      },
      {
        path: "/teacher/:teacherId",
        element: <Teacher />,
      },
      {
        path: "/profile/:courseId",
        element: (
          <PriveteRoute>
            <Profile />
          </PriveteRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

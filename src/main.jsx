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
import LessonPrivateRoute from "./components/LessonsPrivateRoute.jsx";
import Profile from "./pages/Profile.jsx";
import Teacher from "./pages/Teacher.jsx";

import AllCourses from "./pages/AllCourses.jsx";
import CoursePlay from "./pages/CoursePlay.jsx";
import NotFound from "./pages/NotFound.jsx";
import Aboutus from "./pages/Aboutus.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
        path: "/aboutus",
        element: <Aboutus />,
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
      {
        path: "course/play/:courseId",
        element: <CoursePlay />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

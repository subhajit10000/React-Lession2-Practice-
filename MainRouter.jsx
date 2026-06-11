import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Courses from "../components/Courses.jsx";
import Mentor from "../components/Mentor.jsx";
import SignIn from "../components/SignIn.jsx";
import Login from "../components/Login.jsx";
import Profile from "../components/Profile.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "mentor", element: <Mentor /> },
      { path: "signin", element: <SignIn /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> }, 
    ],
  },
]);
export default Router;

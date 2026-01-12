import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import About from "./pages/about/About";
import Leadership from "./pages/leadership/Leadership";
import Contact from "./pages/contact/Contact";
import Board from "./pages/board/Board";
import Services from "./pages/services/Services";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminContacts from "./pages/admin/AdminContacts";
import AdminCreatePost from "./pages/admin/AdminCreatePost";
import AdminEditPost from "./pages/admin/AdminEditPost";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminNavBar from "./components/adminNavBar/AdminNavBar";

import { useState, useEffect } from "react";
import axios from "axios";

function AuthRedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      console.log("+++++++++++++++++++++++++++++12");
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(true);
      } catch (error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }
  console.log("+++++++++++++++++++++++++++++ 2");
  return isAuthenticated ? <Navigate to="/admin/posts" replace /> : <Outlet />;
}

function ProtectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      console.log("+++++++++++++++++++++++++++++ 2");
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(response.data.isValid);
        setUser(response.data.user);
      } catch (error) {
        console.log("토큰 인증 실패:", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? (
    <Outlet context={{ user }} />
  ) : (
    <Navigate to="/admin" replace />
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <>
      <AdminNavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/about", element: <About /> },
      { path: "/leadership", element: <Leadership /> },
      { path: "/board", element: <Board /> },
      { path: "/contact", element: <Contact /> },
      { path: "/our-service", element: <Services /> },
    ],
  },
  {
    path: "/admin",
    element: <AuthRedirectRoute />,
    children: [{ index: true, element: <AdminLogin /> }],
  },
  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  //   children: [
  //     { path: "posts", element: <AdminPosts /> },
  //     { path: "create-post", element: <AdminCreatePost /> },
  //     { path: "edit-post/:id", element: <AdminEditPost /> },
  //     { path: "contact", element: <AdminContacts /> },
  //   ],
  // },
  {
    path: "/admin",
    element: <ProtectRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "posts", element: <AdminPosts /> },
          { path: "create-post", element: <AdminCreatePost /> },
          { path: "edit-post/:id", element: <AdminEditPost /> },
          { path: "contact", element: <AdminContacts /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

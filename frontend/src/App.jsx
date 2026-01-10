import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import About from "./pages/about/About";
import Leadership from "./pages/leadership/Leadership";
import Contact from "./pages/contact/Contact";
import Board from "./pages/board/Board";
import Services from "./pages/services/Services";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

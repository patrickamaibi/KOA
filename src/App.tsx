import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { SubmitTestimonial } from "./pages/SubmitTestimonial";
import { Careers } from "./pages/Careers";
import { Socials } from "./pages/Socials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "legal", element: <Legal /> },
      { path: "submit-testimonial", element: <SubmitTestimonial /> },
      { path: "careers", element: <Careers /> },
      { path: "socials", element: <Socials /> },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const root = document.getElementById("root");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("hidden");
        if (root) root.classList.add("ready");
      }, 5000);
    }
  }, []);

  return <RouterProvider router={router} />;
}
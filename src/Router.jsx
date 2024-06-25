import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import Home from "./pages/home/Home";
// import Home from "../pages/home/HomeComponent";
// import Splash from "../pages/splash/Splash";
// import Education from "../pages/education/EducationComponent";
// import Experience from "../pages/experience/Experience";
// import Contact from "../pages/contact/ContactComponent";
// import Projects from "../pages/projects/Projects";
// import { settings } from "../portfolio.js";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Splash />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return <RouterProvider router={router} />;

  //   return (
  //     <div>
  //       <HashRouter basename="/">
  //         <Switch>
  //           <Route
  //             path="/"
  //             exact
  //             render={(props) => (
  //               <Splash
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/home"
  //             render={(props) => (
  //               <Home
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/experience"
  //             exact
  //             render={(props) => (
  //               <Experience
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/education"
  //             render={(props) => (
  //               <Education
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/contact"
  //             render={(props) => (
  //               <Contact
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/splash"
  //             render={(props) => (
  //               <Splash
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/projects"
  //             render={(props) => (
  //               <Projects
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //         </Switch>
  //       </HashRouter>
  //     </div>
  //   );
}

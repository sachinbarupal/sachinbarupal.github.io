import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

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
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
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

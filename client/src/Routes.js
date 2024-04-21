import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { retry } from "./components/utilities/CommonFunctions";
import "./App.css";

// Lazy loading pages
const Homepage = lazy(() => retry(() => import("./pages/Homepage")));
const AboutUs = lazy(() => retry(() => import("./pages/AboutUs")));
const ElectricalSolution = lazy(() =>
  retry(() => import("./pages/ElectricalSolution"))
);
const Panel = lazy(() =>
  retry(() => import("./components/eletricalsolution/Panel"))
);
const FabricationSolution = lazy(() =>
  retry(() => import("./pages/FabricationSolution"))
);
const Tenders = lazy(() => retry(() => import("./pages/Tenders")));
const TenderClient = lazy(() =>
  retry(() => import("./components/tenders/TenderClient"))
);
const AutomationSolution = lazy(() =>
  retry(() => import("./pages/AutomationSolution"))
);
const Machine = lazy(() =>
  retry(() => import("./components/automationsolution/Machine"))
);
const UsedMachine = lazy(() => retry(() => import("./pages/UsedMachine")));
const Appointment = lazy(() => retry(() => import("./pages/Appointment")));
const ContactUs = lazy(() => retry(() => import("./pages/ContactUs")));
const Careers = lazy(() => retry(() => import("./pages/Careers")));
const FourOhFour = lazy(() => retry(() => import("./pages/FourOhFour")));

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/electrical-solution", element: <ElectricalSolution /> },
    { path: "/electrical-solution/:panel", element: <Panel /> },
    { path: "/fabrication-solution", element: <FabricationSolution /> },
    { path: "/psu-and-govt", element: <Tenders /> },
    { path: "/automation-solution", element: <AutomationSolution /> },
    { path: "/automation-solution/:machine", element: <Machine /> },
    { path: "/psu-and-govt/:client", element: <TenderClient /> },
    { path: "/used-machine-buysell", element: <UsedMachine /> },
    { path: "/appointment", element: <Appointment /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/careers", element: <Careers /> },
    // If no other route matches, show 404 page
    { path: "*", element: <FourOhFour /> },
  ]);

  return routes;
};

export default AppRoutes;

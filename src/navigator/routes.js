// import Home from "../pages/Home";
// import PgAdmission from "../pages/PgAdmission";

import { lazy } from 'react';
import {STRINGS} from "../utils/base";

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Academics = lazy(() => import('../pages/Academics'));
const AgsPortal = lazy(() => import('../pages/AGSPortal'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const StudentCare = lazy(() => import('../pages/StudentCare'));
const Enroll = lazy(() => import('../pages/Enroll'));


export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Home",
    path: "/AGS",
    component: Home,
    isPrivate: false,
    exact: true,
  },
  {
    name: "About",
    path: `${STRINGS.ROUTES.ABOUT_US}`,
    component: About,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Academics",
    path: `${STRINGS.ROUTES.ACADEMICS}`,
    component: Academics,
    isPrivate: false,
    exact: true,
  },
  {
    name: "AgsPortal",
    path: `${STRINGS.ROUTES.AGS_PORTAL}`,
    component: AgsPortal,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Contact",
    path: `${STRINGS.ROUTES.CONTACT_US}`,
    component: ContactUs,
    isPrivate: false,
    exact: true,
  },
  {
    name: "StudentCare",
    path: "/Student-care",
    component: StudentCare,
    isPrivate: false,
    exact: true,
  }, {
    name: "Enroll",
    path: "/Enroll",
    component: Enroll,
    isPrivate: false,
    exact: true,
  },
];

import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import AgsPortal from "../pages/AGSPortal";
import ContactUs from "../pages/ContactUs";
import StudentCare from "../pages/StudentCare";
import MiddleSchool from "../pages/MiddleSchool";
import KinderGarten from "../pages/KinderGarten";
import Enroll from "../pages/Enroll";
import FAQMain from "../pages/FAQMain";
import OnlineForm from "../pages/OnlineForm";
import careers from "../pages/Careers";
import Primaryschool from "../pages/Primaryschool";


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
    path: "/about",
    component: About,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Academics",
    path: "/academics",
    component: Academics,
    isPrivate: false,
    exact: true,
  },
  {
    name: "AgsPortal",
    path: "/agsPortal",
    component: AgsPortal,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Contact",
    path: "/contact",
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
  },
  {
    name: "Enroll",
    path: "/Enroll",
    component: Enroll,
    isPrivate: false,
    exact: true,
  },
  {
    name: "FAQ",
    path: "/FAQMain",
    component: FAQMain,
    isPrivate: false,
    exact: true,
  },
  {
    name: "OnlineForm",
    path: "/OnlineForm",
    component: OnlineForm,
    isPrivate: false,
    exact: true,
  },
  {
    name: "careers",
    path: "/careers",
    component: careers,
    isPrivate: false,
    exact: true,
  },
  {
    name: "MiddleSchool",
    path: "/Middle-school",
    component: MiddleSchool,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Primary-school",
    path: "/Primary-school",
    component: Primaryschool,
    isPrivate: false,
    exact: true,
  },
  {
    name: "KinderGarten",
    path: "/KinderGarten",
    component: KinderGarten,
    isPrivate: false,
    exact: true,
  },
];

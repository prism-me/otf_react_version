import Home from "../pages/Home";
import About from "../pages/About";
import Memberships from "../pages/Memberships";
import ContactUs from "../pages/ContactUs";
import ArticlesDetail from "../pages/ArticlesDetail";
import Press from "../pages/Press";
import Locations from "../pages/Locations";
import Offers from "../pages/Offers";
import FAQMain from "../pages/FAQMain";
import careers from "../pages/Careers";
import Articles from "../pages/Articles";
import OurTeam from "../pages/OurTeam";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Workout from "../pages/Workout";


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
    path: "/",
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
    name: "Memberships",
    path: "/memberships",
    component: Memberships,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Workout",
    path: "/workout",
    component: Workout,
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
    name: "ArticlesDetail",
    path: "/articles-detail",
    component: ArticlesDetail,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Offers",
    path: "/offers",
    component: Offers,
    isPrivate: false,
    exact: true,
  },
  {
    name: "FAQ",
    path: "/FAQ",
    component: FAQMain,
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
    name: "Press",
    path: "/press",
    component: Press,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Articles",
    path: "/articles",
    component: Articles,
    isPrivate: false,
    exact: true,
  },
  {
    name: "Locations",
    path: "/locations",
    component: Locations,
    isPrivate: false,
    exact: true,
  },
  {
    name: "OurTeam",
    path: "/OurTeam",
    component: OurTeam,
    isPrivate: false,
    exact: true,
  },
  {
    name: "PrivacyPolicy",
    path: "/privacy-policy",
    component: PrivacyPolicy,
    isPrivate: false,
    exact: true,
  },
];

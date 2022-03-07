import React, { Component } from "react";
import { Route, Switch } from "react-router";

const routes = [
  {
    name: "Home",
    path: "/",
    isPrivate: false,
    exact: true,
  },
  {
    name: "About",
    path: "/en/about",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Academics",
    path: "/en/academics",
    isPrivate: false,
    exact: true,
  },
  {
    name: "AgsPortal",
    path: "/en/agsPortal",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Contact",
    path: "/en/contact",
    isPrivate: false,
    exact: true,
  },
  {
    name: "StudentCare",
    path: "/en/Student-care",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Enroll",
    path: "/en/Enroll",
    isPrivate: false,
    exact: true,
  },
  {
    name: "FAQ",
    path: "/en/FAQ",
    isPrivate: false,
    exact: true,
  },
  {
    name: "OnlineForm",
    path: "/en/OnlineForm",
    isPrivate: false,
    exact: true,
  },
  {
    name: "careers",
    path: "/en/careers",
    isPrivate: false,
    exact: true,
  },
  {
    name: "MiddleSchool",
    path: "/en/Middle-school",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Primary-school",
    path: "/en/Primary-school",
    isPrivate: false,
    exact: true,
  },
  {
    name: "KinderGarten",
    path: "/en/KinderGarten",
    isPrivate: true,
    exact: true,
  },
  {
    name: "OurTeam",
    path: "/en/OurTeam",
    isPrivate: true,
    exact: true,
  },
  {
    name: "PrivacyPolicy",
    path: "/en/privacy-policy",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Sitemap",
    path: "/sitemap",
    isPrivate: false,
    exact: true,
    show: false,
  },
];

export default (
  <Switch>
    {routes.map((route) => {
      return <Route path={route.path} key={route.path} />;
    })}
  </Switch>
);

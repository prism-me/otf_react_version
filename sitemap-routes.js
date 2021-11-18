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
    path: "/about",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Academics",
    path: "/academics",
    isPrivate: false,
    exact: true,
  },
  {
    name: "AgsPortal",
    path: "/agsPortal",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Contact",
    path: "/contact",
    isPrivate: false,
    exact: true,
  },
  {
    name: "StudentCare",
    path: "/Student-care",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Enroll",
    path: "/Enroll",
    isPrivate: false,
    exact: true,
  },
  {
    name: "FAQ",
    path: "/FAQ",
    isPrivate: false,
    exact: true,
  },
  {
    name: "OnlineForm",
    path: "/OnlineForm",
    isPrivate: false,
    exact: true,
  },
  {
    name: "careers",
    path: "/careers",
    isPrivate: false,
    exact: true,
  },
  {
    name: "MiddleSchool",
    path: "/Middle-school",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Primary-school",
    path: "/Primary-school",
    isPrivate: false,
    exact: true,
  },
  {
    name: "KinderGarten",
    path: "/KinderGarten",
    isPrivate: true,
    exact: true,
  },
  {
    name: "OurTeam",
    path: "/OurTeam",
    isPrivate: true,
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

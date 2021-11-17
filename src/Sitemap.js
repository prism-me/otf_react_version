import React from "react";
// The import below should be updated to match your Router component
import Navigation from "./navigator/Navigation";
import DynamicSitemap from "react-dynamic-sitemap";

export default function Sitemap(props) {
    return (
        <DynamicSitemap routes={Navigation} prettify={true} sitemapIndex={true} {...props} />
    );
}
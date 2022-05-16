import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        label: "Community",
        value: "community"
    },
    {
        label: "Events",
        value: "events"
    },
    {
        label: "Health",
        value: "health"
    },
    {
        label: "Technology",
        value: "technology"
    },
    {
        label: "Fitness",
        value: "fitness"
    },
    {
        label: "Science",
        value: "science"
    },
    {
        label: "Motivation",
        value: "motivation"
    }
];
const Categories = ({ language }) => (
    <div>
        <h5 className={`${language === "en" ? 'blog-title' : 'blog-title-arabic'}`}>categories</h5>
        <div className="sidebar-container borders">
            <ul className="sidebar-list">
                {
                    categories.map((x, i) => (
                        <li className="d-flex" key={i}>
                            <Link href="#">
                                <a>
                                    {
                                        language === "en" ?
                                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"
                                            ></i>
                                            :
                                            <i aria-hidden="true" className="fa fa-angle-right m-l-15"
                                                style={{
                                                    transform: "scaleX(-1)"
                                                }}
                                            ></i>
                                    }

                                    {x.label}
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
);

export default Categories;

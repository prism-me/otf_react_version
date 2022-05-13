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
const Categories = ({ }) => (
    <div>
        <h5 className="blog-title">categories</h5>
        <div className="sidebar-container borders">
            <ul className="sidebar-list">
                {
                    categories.map((x, i) => (
                        <li className="d-flex" key={i}>
                            <Link href="#">
                                <a>
                                    <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                                    {x.label}
                                    {/* Lorem Ipsum Is Simple */}
                                </a>
                            </Link>
                        </li>
                    ))
                }

                {/* <li className="d-flex">
                    <Link href="#">
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            Many Variations
                        </a>
                    </Link>
                </li>
                <li className="d-flex">
                    <Link href="#">
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            random text
                        </a>
                    </Link>
                </li>
                <li className="d-flex">
                    <Link href="#">
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            Lorem Ipsum
                        </a>
                    </Link>
                </li>
                <li className="d-flex">
                    <Link href="#">
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            it's Random
                        </a>
                    </Link>
                </li> */}
            </ul>
        </div>
    </div>
);

export default Categories;

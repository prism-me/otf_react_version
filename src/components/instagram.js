import React from 'react';
import { Link } from 'react-router-dom';

//images
import inst1 from "../assets/images/OTF/articleinner/inst1.png";
import inst2 from "../assets/images/OTF/articleinner/inst2.png";
import inst3 from "../assets/images/OTF/articleinner/inst3.png";
import inst4 from "../assets/images/OTF/articleinner/inst4.png";
import inst5 from "../assets/images/OTF/articleinner/inst5.png";
import inst6 from "../assets/images/OTF/articleinner/inst6.png";
import inst7 from "../assets/images/OTF/articleinner/inst7.png";
import inst8 from "../assets/images/OTF/articleinner/inst8.png";



const Instagram = ({ }) => {

    return (
        <div>
            <h5 className="blog-title">instagram</h5>
            <div className="sidebar-container insta">
                <ul className="blog-insta">
                    <li>
                        <Link href="">
                            <a href="#javascript">
                                <img alt="" className="img-fluid" src={inst1} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                                <img alt="" className="img-fluid" src={inst2} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                                <img alt="" className="img-fluid" src={inst3} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                                <img alt="" className="img-fluid" src={inst4} />
                            </a>
                        </Link>
                    </li>
                </ul>
                <ul className="blog-insta">
                    <li>
                        <Link href="">
                            <a href="#javascript">
                                <img alt="" className="img-fluid" src={inst5} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                                <img alt="" className="img-fluid" src={inst6} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                                <img alt="" className="img-fluid" src={inst7} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                                <img alt="" className="img-fluid" src={inst8} />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Instagram;

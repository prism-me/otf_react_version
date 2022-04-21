import React from 'react';

//images
import pp1 from "../assets/images/OTF/articleinner/pp1.png";
import pp2 from "../assets/images/OTF/articleinner/pp2.png";
import pp3 from "../assets/images/OTF/articleinner/pp3.png";
import pp4 from "../assets/images/OTF/articleinner/pp4.png";




const PopularPosts = ({ }) => {

    return (
        <div>
            <h5 className="blog-title">popular posts</h5>
            <div className="sidebar-container">
                <div className="post-container d-flex">
                    <div className="w-35 m-r-25">
                        <img alt="" className="img-fluid" src={pp1} />
                        <div className="badge">2020</div>
                    </div>
                    <div>
                        <h5 className="post-head">lorem ipsum</h5>
                        <h6 className="date">nov 22, 2020</h6>
                    </div>
                </div>
                <div className="post-container d-flex">
                    <div className="w-35 m-r-25">
                        <img alt="" className="img-fluid" src={pp2} />
                        <div className="badge badge-red">2020</div>
                    </div>
                    <div>
                        <h5 className="post-head">lorem ipsum</h5>
                        <h6 className="date">nov 22, 2020</h6>
                    </div>
                </div>
                <div className="post-container d-flex">
                    <div className="w-35 m-r-25">
                        <img alt="" className="img-fluid" src={pp3} />
                        <div className="badge badge-yellow">2020</div>
                    </div>
                    <div>
                        <h5 className="post-head">lorem ipsum</h5>
                        <h6 className="date">nov 22, 2020</h6>
                    </div>
                </div>
                <div className="post-container d-flex">
                    <div className="w-35 m-r-25">
                        <img alt="" className="img-fluid" src={pp4} />
                        <div className="badge badge-blue">2020</div>
                    </div>
                    <div>
                        <h5 className="post-head">lorem ipsum</h5>
                        <h6 className="date">nov 22, 2020</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularPosts;

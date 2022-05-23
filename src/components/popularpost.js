import React from 'react';
import { Link } from 'react-router-dom';
//images


const PopularPosts = ({ articlesData, isArabic, language, location }) => {

    return (
        <div>
            <h5 className="blog-title">Latest Articles</h5>
            <div className="sidebar-container">
                {articlesData.length > 0 &&
                    articlesData.sort(
                        (a, b) =>
                            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                    ).filter(
                        (x) => x.slug !== location.split("/")[3]).slice(0, 5).map((item, index) => (
                            <div className="post-container d-flex" key={index}>
                                <div className="m-r-15">
                                    <img alt="" style={{ width: "80px" }} src={item?.featured_img} />
                                </div>
                                <div>
                                    <Link to={`/${language}/article/${item?.slug}`}>

                                        <h5 className="post-head">
                                            {
                                                isArabic
                                                    ? item?.arabic?.title?.substring(0, 50)
                                                    : item?.title?.substring(0, 50)
                                            }
                                        </h5>
                                    </Link>

                                    <h6 className="date">
                                        {new Date(item?.created_at).toLocaleDateString()}
                                    </h6>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
};

export default PopularPosts;

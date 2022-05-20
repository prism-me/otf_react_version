import React from 'react';

//images


const PopularPosts = ({ articlesData, isArabic }) => {

    return (
        <div>
            <h5 className="blog-title">Latest Articles</h5>
            <div className="sidebar-container">
                {articlesData.length > 0 &&
                    articlesData.reverse().slice(0, 5).map((item, index) => (
                        <div className="post-container d-flex" key={index}>
                            <div className="m-r-15">
                                <img alt="" style={{ width: "80px" }} src={item?.featured_img} />
                            </div>
                            <div>
                                <h5 className="post-head">
                                    {
                                        isArabic
                                            ? item?.arabic?.title?.substring(0, 50)
                                            : item?.title?.substring(0, 50)
                                    }
                                </h5>
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

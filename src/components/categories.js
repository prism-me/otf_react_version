import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ isArabic, articlesData }) => {

    // ......get unique data.......
    const uniqueCategories = [];
    articlesData?.map(item => {
        var findItem = uniqueCategories.find(x => x?.category === item?.category);
        if (!findItem)
            uniqueCategories.push(item);
    });
    return (
        <div>
            <h5 className="blog-title">categories</h5>
            <div className="sidebar-container borders">
                <ul className="sidebar-list">
                    {
                        articlesData?.map((x, i) => (
                            <li className="d-flex" key={i}>
                                <Link href="#">
                                    <a>
                                        <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                                        {isArabic ?
                                            x?.arabic?.category : x?.category
                                        }
                                        {/* Lorem Ipsum Is Simple */}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
export default Categories;

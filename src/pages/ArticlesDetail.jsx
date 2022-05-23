import React, { useState, useEffect } from "react";
import ArticlesInner from "../sections/Articlesdetail/articles-inner";
import CounterSection from "../sections/Home/counter";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Layout from '../components/common-layout';
import { API } from '../http/API';
import { useParams } from "react-router-dom";

//images
import articlesBanner from "../assets/images/OTF/banner/articlesbanner.jpg";
import articalBg from "../assets/images/OTF/articles/articalbg.jpg";


const ArticlesDetail = (props) => {

    useEffect(() => {
        getSingleArticle();
        getAllArticles();
    }, []);
    useEffect(() => {
        // console.log("history", history.location.pathname)
        const pathname = props.location.pathname.split("/")[3];
        if (pathname) {
            getSingleArticle();
            getAllArticles();
        }
    }, [props.location.pathname.split("/")[3]]);

    // single data get API Integration
    const [singleArticleData, setSingleArticleData] = useState([]);

    const { id } = useParams();

    const getSingleArticle = () => {
        API.get(`/articles/${id}`).then(response => {
            const singleArticle = response.data?.data;
            setSingleArticleData(singleArticle);
        })
            .catch(err => {
                console.log(err)
            })
    }

    // articles API 
    const [articlesData, setArticlesData] = useState([]);

    const getAllArticles = () => {
        API.get('/articles').then(response => {
            const allarticles = response.data?.data;
            setArticlesData(allarticles);
        })
            .catch(err => {
                console.log(err)
            })
    }


    const { global } = props;
    return (
        <div className="home-page">
            <Helmet>
                <title>
                    Articles Detail
                </title>
                <meta
                    name="description"
                    content="Articles Detail"
                />
            </Helmet>
            <Layout
                // title="Lorem ipsum"
                title={global?.activeLanguage === "ar" ? singleArticleData?.arabic?.title : singleArticleData?.title}
                // subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                bannerImg={articlesBanner}
                // btntext="Book your Free class!"
                freeform="freeclass"
            >

                <ArticlesInner
                    singleArticleData={singleArticleData}
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                    articlesData={articlesData}
                    location={props.location.pathname}
                />

                <CounterSection
                    title="Get 10% off during this festive season!"
                    // subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
                    btntext="BECOME A MEMBER TODAY"
                    bgImg={articalBg}
                />

            </Layout>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        showSpinner: state?.globalReducer?.showSpinner,
        global: state.globalReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesDetail);
import React from "react";
import ArticlesInner from "../sections/Articlesdetail/articles-inner";
import CounterSection from "../sections/Home/counter";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Layout from '../components/common-layout';

//images
import articlesBanner from "../assets/images/OTF/banner/articlesbanner.jpg";
import articalBg from "../assets/images/OTF/articles/articalbg.jpg";


const ArticlesDetail = (props) => {

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
                title={"Hunkered Down To Keep Coronavirus At Bay? Stay Healthy With 7 Tips To Channel Your Inner Orangetheory Spirit"}
                // subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                btntext="Lorem ipsum dolor"
                bannerImg={articlesBanner}
            >

                <ArticlesInner />

                <CounterSection
                    title="Lorem Ipsum"
                    subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
                    btntext="Lorem Ipsum"
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
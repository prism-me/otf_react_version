import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import TrainerSection from "../sections/Home/trainer";
import Layout from '../components/common-layout';

//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

import testimonial1 from "../assets/images/OTF/testimonial/testimonial1.png";
import testimonial2 from "../assets/images/OTF/testimonial/testimonial2.png";
import testimonial3 from "../assets/images/OTF/testimonial/testimonial3.png";
import testimonial4 from "../assets/images/OTF/testimonial/testimonial4.png";
import testimonial5 from "../assets/images/OTF/testimonial/testimonial5.png";
import testimonial6 from "../assets/images/OTF/testimonial/testimonial6.png";
import testimonial7 from "../assets/images/OTF/testimonial/testimonial7.png";


const Testimonials = (props) => {

    const testimonial = [
        {
            img: testimonial1,
            title: "Client name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial2,
            title: "Client name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial3,
            title: "Client name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial4,
            title: "Client name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial5,
            title: "Client name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial6,
            title: "Client name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial7,
            title: "Client name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        }
    ];

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    Testimonials
                </title>
                <meta
                    name="description"
                    content="Testimonials"
                />
            </Helmet>
            <Layout
                title="Lorem ipsum"
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                btntext="Lorem ipsum dolor"
                bannerImg={aboutBanner}
            >

                <TrainerSection
                    testimonial={testimonial}
                    title="Testimonials"
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
)(Testimonials);
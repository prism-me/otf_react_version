import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container } from 'reactstrap'
import Layout from '../components/common-layout'
import CalculateSection from "../sections/Home/calculate";

import Coaching from "../sections/Offers/coaching"
import { API } from "../http/API"

//images

import bannerImg from "../assets/images/OTF/banner/faqbanner.jpg";

const Faq = (props) => {

    const DummyContent1 = (props) => (
        <p
            className="p-0"
            dangerouslySetInnerHTML={{
                __html: props.answer
            }}
        >
        </p>
    );

    // faq API 
    const [faqsData, setFaqsData] = useState([]);

    const getAllFaqs = () => {
        API.get('/faqs').then(response => {
            const allfaqs = response?.data?.data;
            setFaqsData(allfaqs);
        })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllFaqs();
    }, []);

    const { global } = props;
    return (
        <div >
            <Helmet>
                <title>
                    FAQ's
                </title>
                <meta
                    name="description"
                    content="FAQ's"
                />
            </Helmet>
            <Layout
                title="Try Us For Free. Yes, Free!"
                btntext="book a free class now"
                promtext="*Promotion Terms. Limited Time Offer."
                bannerImg={bannerImg}
                freeform="freeclass"
            >
                <section className="saas1 faq testimonial-bg inner-container rightAnimation" id="faq">

                    <div className="animated-bg"><i
                        style={{
                            background: "#f5822091",
                            boxShadow: "0 15px 30px 0 #f5822091"
                        }}
                    ></i>
                        <i
                            style={{
                                background: "#f5822091",
                                boxShadow: "0 15px 30px 0 #f5822091"
                            }}
                        ></i>
                        <i style={{
                            background: "#f5822091",
                            boxShadow: "0 15px 30px 0 #f5822091"
                        }}></i>
                    </div>

                    <Container>

                        <div className="faq-block">
                            <div>
                                <h3 className="frequent-text">Frequently Asked Questions</h3>
                                <Accordion atomic={true}>
                                    {
                                        faqsData?.map((x, i) => (
                                            <AccordionItem className="card-header bg-primary" title={global?.activeLanguage === "ar"
                                                ? x?.arabic?.question
                                                : x?.question} key={i} >
                                                <DummyContent1 answer={global?.activeLanguage === "ar"
                                                    ? x?.arabic?.answer
                                                    : x?.answer} />
                                            </AccordionItem>
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </Container>
                </section>

                <CalculateSection />

                <section className="pb-0">
                    <Coaching />
                </section>

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
)(Faq);


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

import faqbanner from "../assets/images/OTF/banner/faqbanner.jpg";

const Faq = (props) => {

    useEffect(() => {
        getAllFaqs();
        getAllLocations();
        getPagesData();
    }, []);

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

    // locations API 
    const [locationsData, setLocationsData] = useState([]);

    const getAllLocations = () => {
        API.get('/locations').then(response => {
            const alllocations = response.data?.data;
            console.log("locationsData", response.data?.data)
            setLocationsData(alllocations);
        })
            .catch(err => {
                console.log(err)
            })
    }

    // faq page API
    const [faqMetaData, setFaqMetaData] = useState([]);

    const getPagesData = () => {
        API.get(`/pages`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {
                    let currentPage = response.data.data.find(
                        (x) => x.slug === "faq"
                    );
                    setFaqMetaData(currentPage);
                }
            })
            .catch((err) => console.log(err));
    }

    const { global } = props;
    return (
        <div >
            <Helmet>
                <title>
                    {
                        global?.activeLanguage === "ar"
                            ? faqMetaData?.arabic?.meta_details?.meta_title
                            : faqMetaData?.meta_details?.meta_title
                    }
                </title>
                <meta
                    name="description"
                    content={global?.activeLanguage === "ar" ?
                        faqMetaData?.arabic?.meta_details
                            ?.meta_description
                        : faqMetaData?.meta_details
                            ?.meta_description
                    }
                />
            </Helmet>
            <Layout
                title="Try Us For Free. Yes, Free!"
                promtext="*Promotion Terms. Limited Time Offer."
                bannerImg={faqbanner}
                btntext="Book your Free class!"
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

                <CalculateSection
                    locationsData={locationsData}
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                />

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


import React, { useEffect } from "react";
import Faqform from "../sections/FAQMain/faqform";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container } from 'reactstrap'
import Layout from '../components/common-layout'


//images

import bannerImg from "../assets/images/OTF/banner/faqbanner.jpg";

const FAQMain = (props) => {

    useEffect(() => {
        document.querySelector(".accordion .accordion-item").classList.add("active");
        return () => {
            document.querySelector(".accordion .accordion-item").classList.remove("active");
        }
    }, []);

    const DummyContent1 = (props) => (
        <p>
            {props.answer}
        </p>
    );

    const faqData = [
        {
            question: "How early should I arrive for my first Orangetheory class?",
            answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
        },
        {
            question: "I haven't worked out in a long time? Can I still do the workout?",
            answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
        },
        {
            question: "I have issues with (part of the body). Can I still do your workout?",
            answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
        },
        {
            question: "What do the 5 zones mean, and why is the Orange zone so important?",
            answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
        },
        {
            question: "What equipment do you use at Orangetheory?",
            answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
        }
    ];
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
                title="Try Us For Free.Yes, Free!"
                btntext="book a free class now"
                promtext="*Promotion Terms. Limited Time Offer."
                bannerImg={bannerImg}
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
                                    {faqData &&
                                        faqData.length > 0 &&
                                        faqData.map((x, i) => (
                                            <AccordionItem className="card-header bg-primary" title={x.question} key={i} >
                                                <DummyContent1 answer={x.answer} />
                                            </AccordionItem>
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </Container>
                </section>
                <Faqform />
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
)(FAQMain);


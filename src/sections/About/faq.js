import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'
const Faq = () => {

    const DummyContent = (props) => (
        <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
            <div className="card-body">
                {props.answer}
            </div>
        </div>
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

    // const clickbuton = () => {
    //     console.log("click button")
    // }


    return (
        <section className="saas1 faq" id="faq">
            <Container>
                <h3 className="frequent-text">Frequently Asked Questions</h3>

                <div className="faq-block">
                    <div>
                        <Accordion atomic={true}>
                            {faqData &&
                                faqData.length > 0 &&
                                faqData.map((x, i) => (
                                    <AccordionItem className="card-header bg-primary" title={x.question} key={i}>
                                        <DummyContent className="active" answer={x.answer} />
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
                <center>
                    <button
                        style={{
                            background: "transparent",
                            border: "0",
                            borderBottom: "1px solid #F58220",
                            color: "#F58220",
                            textTransform: "uppercase",
                            fontWeight: "700",
                            outline: "0",
                            marginTop: "2rem"

                        }}
                    // onClick={clickbuton}
                    >read more</button>
                </center>
            </Container>
        </section>
    )
}

export default Faq;
import React from "react"
import { Container } from "react-bootstrap";
import { constants } from "../../utils/constants";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const FaqSection = ({ faqData, language, isArabic }) => {

    return (
        <section className="faq-section gym rightAnimation">
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
                <h3 className="frequent-text">
                    {
                        constants?.site_content?.faq_sec?.title[language]
                    }
                </h3>
                <Accordion allowZeroExpanded>
                    {faqData?.map((x, i) => (
                        <AccordionItem key={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <span className="title">
                                        {isArabic
                                            ? x?.arabic?.question
                                            : x?.question}
                                    </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: isArabic
                                            ? x?.arabic?.answer
                                            : x?.answer
                                    }}
                                >

                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </section>

    )
}

export default FaqSection;
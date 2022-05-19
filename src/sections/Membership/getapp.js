import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { constants } from '../../utils/constants';

import heartrate from "../../assets/images/OTF/membership/workotapp.png";
import GooglePlay from "../../assets/images/OTF/logo/GooglePlay.png"
import AppStore from "../../assets/images/OTF/logo/AppStore.png"

const GetApp = ({ language }) => (
    <section className="gym format pb-0" id="about"
    >
        <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <Row>
                <Col md="6">
                    <div className="center-text justify-content-center">
                        <div>
                            <h3 className={`${language === "ar" ? "text-right" : 'text-left'} oftHeading `}
                                style={{
                                    color: "#2E2E2E"
                                }}
                            >
                                {
                                    constants?.site_content?.getapp_sec?.title[language]
                                }
                            </h3>
                            <div className="format-sub-text">
                                <ul
                                    className={`${language === "en" ? 'pl-4' : 'pr-4'}`}
                                    style={{ listStyle: "circle" }}>
                                    <li
                                        className={`${language === "en" ? 'text-left' : 'text-right'}`}
                                        style={{ fontSize: "16px", fontWeight: "400", lineHeight: "1.8" }}
                                    >
                                        {
                                            constants?.site_content?.getapp_sec?.sec_1[language]
                                        }
                                    </li>
                                    <li
                                        className={`${language === "en" ? 'text-left' : 'text-right'}`}
                                        style={{ fontSize: "16px", fontWeight: "400", lineHeight: "1.8" }}
                                    >
                                        {
                                            constants?.site_content?.getapp_sec?.sec_2[language]
                                        }
                                    </li>
                                    <li
                                        className={`${language === "en" ? 'text-left' : 'text-right'}`}
                                        style={{ fontSize: "16px", fontWeight: "400", lineHeight: "1.8" }}
                                    >
                                        {
                                            constants?.site_content?.getapp_sec?.sec_3[language]
                                        }
                                    </li>
                                    <li
                                        className={`${language === "en" ? 'text-left' : 'text-right'}`}
                                        style={{ fontSize: "16px", fontWeight: "400", lineHeight: "1.8" }}
                                    >
                                        {
                                            constants?.site_content?.getapp_sec?.sec_4[language]
                                        }
                                    </li>
                                    <li
                                        className={`${language === "en" ? 'text-left' : 'text-right'}`}
                                        style={{ fontSize: "16px", fontWeight: "400", lineHeight: "1.8" }}
                                    >
                                        {
                                            constants?.site_content?.getapp_sec?.sec_5[language]
                                        }
                                    </li>
                                    <li
                                        className={`${language === "en" ? 'text-left' : 'text-right'}`}
                                        style={{ fontSize: "16px", fontWeight: "400", lineHeight: "1.8" }}
                                    >
                                        {
                                            constants?.site_content?.getapp_sec?.sec_6[language]
                                        }
                                    </li>
                                </ul>
                                <ul className="d-flex footer-social social mt-4">
                                    <li className="footer-social-list">
                                        <a href="https://play.google.com/store/apps/details?id=com.orangetheoryfitness.orangetheory&hl=en_IN" target={"_blank"}>
                                            <img src={GooglePlay} alt="logo" className={`${language === "ar" ? "ml-3" : 'mr-3'}`} />
                                        </a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://apps.apple.com/us/app/orangetheory-fitness/id1424351827" target={"_blank"}>
                                            <img src={AppStore} alt="logo" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="6">
                    <div className="text-center center-content">
                        <img alt="" className="img-fluid format-img" src={heartrate} />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default GetApp;
import React from 'react'
import { Container, Row, Col } from 'reactstrap';

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
                            <h3 className="oftHeading text-left"
                                style={{
                                    color: "#2E2E2E"
                                }}
                            >Get the App</h3>
                            <div className="format-sub-text">
                                <ul className='pl-4' style={{ listStyle: "circle" }}>
                                    <li style={{ fontSize: "16px", fontWeight: "400", textAlign: "left", lineHeight: "1.8" }}>
                                        View classes from multiple studios.
                                    </li>
                                    <li style={{ fontSize: "16px", fontWeight: "400", textAlign: "left", lineHeight: "1.8" }}>
                                        Find and save your favorite studios.
                                    </li>
                                    <li style={{ fontSize: "16px", fontWeight: "400", textAlign: "left", lineHeight: "1.8" }}>
                                        Get easy-to-read workout summaries.
                                    </li>
                                    <li style={{ fontSize: "16px", fontWeight: "400", textAlign: "left", lineHeight: "1.8" }}>
                                        Track challenges and benchmarks.
                                    </li>
                                    <li style={{ fontSize: "16px", fontWeight: "400", textAlign: "left", lineHeight: "1.8" }}>
                                        View your body composition.
                                    </li>
                                    <li style={{ fontSize: "16px", fontWeight: "400", textAlign: "left", lineHeight: "1.8" }}>
                                        Track out-of-studio workouts.
                                    </li>
                                </ul>
                                <ul className="d-flex footer-social social mt-4">
                                    <li className="footer-social-list">
                                        <a href="https://play.google.com/store/apps/details?id=com.orangetheoryfitness.orangetheory&hl=en_IN" target={"_blank"}>
                                            <img src={GooglePlay} alt="logo" className='mr-3' />
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
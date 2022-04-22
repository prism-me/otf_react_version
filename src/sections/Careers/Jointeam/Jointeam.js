import React from 'react';

import { Row, Col } from "react-bootstrap"

const Jointeam = () => {
    return (
        <section className="gym format container pb-0">
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="center-text">
                        <div className="text-center">
                            <div className="format-head-text">
                                <h3 className="oftHeading">
                                    Join Our Team
                                </h3>
                            </div>
                            <div className="format-sub-text mb-0">
                                <p className="p-light oftsubHeading text-center">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Jointeam;
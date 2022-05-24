import React from 'react'
import {
    Container, Row, Col
} from 'reactstrap'
import { constants } from '../../utils/constants';
//images

import sciencebakedbg from "../../assets/images/OTF/offer/sciencebakedbg.jpg";
import sciencebaked from "../../assets/images/OTF/offer/sciencebaked.png";

import techtrakbg from "../../assets/images/OTF/offer/techtrakbg.jpg";

import coachinspirebg from "../../assets/images/OTF/offer/coachinspirebg.jpg";
import coachinsp from "../../assets/images/OTF/offer/coachinsp.png";


const Coaching = ({ language }) => {
    return (
        <section className="coaching p-0">
            <Container>
                <h2 className="oftHeading text-center">
                    {
                        constants?.site_content?.coaching_sec?.title[language]
                    }
                </h2>
                <p className="oftsubHeading text-center">
                    {
                        constants?.site_content?.coaching_sec?.subtitle[language]
                    }
                </p>
            </Container>
            <Container fluid>
                <Row
                    className="coach-container"
                    style={{ backgroundImage: `url(${sciencebakedbg})` }}
                >
                    <Col sm={5}>
                        <img src={sciencebaked} className='img-fluid mb-3' alt={"img"} />
                    </Col>
                    <Col sm={7} className="d-flex flex-column justify-content-center align-items-center">
                        <Container>
                            <h4 className="oftHeading">
                                {
                                    constants?.site_content?.coaching_sec?.sec_1?.title[language]
                                }
                            </h4>
                            <p className="oftsubHeading text-white">
                                {
                                    constants?.site_content?.coaching_sec?.sec_1?.subtitle[language]
                                }
                            </p>
                        </Container>
                    </Col>
                </Row>
                <Row
                    className="coach-container"
                    style={{ backgroundImage: `url(${techtrakbg})` }}
                >
                    <Col sm={12} className="d-flex flex-column justify-content-center align-items-center">
                        <Container>
                            <h4 className="oftHeading text-center">
                                {
                                    constants?.site_content?.coaching_sec?.sec_2?.title[language]
                                }
                            </h4>
                            <p className="oftsubHeading text-white text-center">
                                {
                                    constants?.site_content?.coaching_sec?.sec_2?.subtitle[language]
                                }
                            </p>
                        </Container>
                    </Col>
                </Row>
                <Row
                    className="coach-container"
                    style={{ backgroundImage: `url(${coachinspirebg})` }}
                >
                    <Col sm={7} className="d-flex flex-column justify-content-center align-items-center">
                        <Container>
                            <h4 className="oftHeading">
                                {
                                    constants?.site_content?.coaching_sec?.sec_3?.title[language]
                                }
                            </h4>
                            <p className="oftsubHeading text-white">
                                {
                                    constants?.site_content?.coaching_sec?.sec_3?.subtitle[language]
                                }
                            </p>
                        </Container>
                    </Col>
                    <Col sm={5}>
                        {
                            language === "en" ?
                                <img src={coachinsp} className='img-fluid' alt={"img"} />
                                :
                                <img src={coachinsp} className='img-fluid' alt={"img"}
                                    style={{ transform: 'scaleX(-1)' }}
                                />
                        }

                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default Coaching
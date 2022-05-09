import React from 'react';
import { Container, Row, Col } from 'reactstrap'

//images
import rowing1 from "../../assets/images/OTF/workout/rowing1.jpg";
import rowing2 from "../../assets/images/OTF/workout/rowing2.jpg";
import strength1 from "../../assets/images/OTF/workout/strength1.jpg";
import strength2 from "../../assets/images/OTF/workout/strength2.jpg";

import cardio1 from "../../assets/images/OTF/workout/cardio1.jpg";
import cardio2 from "../../assets/images/OTF/workout/cardio2.jpg";



import Rowing from "../../assets/images/OTF/workout/rowing.mp4";
import Cardio from "../../assets/images/OTF/workout/cardio.mp4";
import strenth from "../../assets/images/OTF/workout/stregth.mp4";

const WorkGrid = () => (
    <>
        <section className="gym format about-detail rightAnimation"
            style={{
                background: "#f2f2f2"
            }}
        >
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
                <h3 className="oftHeading text-center mb-5"
                    style={{
                        color: "#2E2E2E"
                    }}
                >
                    Your OTF Workout
                </h3>
                <Row>
                    <Col sm={6} className="mblscreenworkoutgridbottomspace">
                        <Row
                            style={{ borderBottom: "0.5rem solid #F58220" }}
                        >
                            <Col sm={12} className="p-0">
                                <video
                                    nocontrols
                                    autoPlay="autoplay"
                                    loop="loop"
                                    muted
                                    style={{ width: "100%", height: "100%" }}>
                                    <source src={Rowing} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col sm={6} className="p-0">
                                <img src={rowing1} alt="" className='img-fluid mblscreenworkoutgridspace' />
                            </Col>
                            <Col sm={6} className="p-0">
                                <img src={rowing2} alt="" className='img-fluid mblscreenworkoutgridspace' />
                            </Col>
                        </Row>
                        {/* <img src={mission} alt="" className='img-fluid' /> */}

                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-start pl-5">
                        <h2 className="oftHeading"
                            style={{ color: "#2E2E2E" }}
                        >01</h2>
                        <h2 className="oftHeading">
                            Rowing
                        </h2>
                        <p className="oftsubHeading">
                            Every stroke on the rower activates 85% of your body’s muscles to help you improve endurance, strength and power.
                        </p>
                    </Col>
                </Row>
            </Container >
        </section >
        <section className="gym format about-detail">

            <div className="animated-bg"><i></i><i></i><i></i></div>

            <Container>
                <Row>
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-start pr-5 mblscreenworkoutgridbottomspace">
                        <h2 className="oftHeading"
                            style={{ color: "#2E2E2E" }}
                        >02</h2>
                        <h2 className="oftHeading">
                            Cardio
                        </h2>
                        <p className="oftsubHeading">
                            Whether you walk, jog or run, you’ll go at your own pace based on your fitness level. We also have bikes and striders available as alternates to the treadmill.
                        </p>
                    </Col>
                    <Col sm={6}>
                        <Row
                            style={{ borderBottom: "0.5rem solid #F58220" }}
                        >
                            <Col sm={6} className="p-0">
                                <video
                                    nocontrols
                                    autoPlay="autoplay"
                                    loop="loop"
                                    muted
                                    style={{ width: "100%" }}>
                                    <source src={Cardio} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col sm={6} className="p-0">
                                <Row>
                                    <Col sm={12}
                                        style={{ padding: "0 0 0 0" }}
                                    >
                                        <img src={cardio1} alt="" className='img-fluid mblscreenworkoutgridspace'
                                            style={{ height: "189px" }}

                                        />
                                    </Col>
                                    <Col sm={12}
                                        style={{ padding: "0 0 0 0" }}
                                    >
                                        <img src={cardio2} alt="" className='img-fluid mblscreenworkoutgridspace'
                                            style={{ height: "189px" }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* <img src={vision} alt="" className='img-fluid' /> */}
                    </Col>
                </Row>
            </Container >
        </section >
        <section className="gym format about-detail"
            style={{
                background: "#f2f2f2"
            }}
        >
            <Container>
                <Row>
                    <Col sm={6} className="mblscreenworkoutgridbottomspace">
                        {/* <img src={values} alt="" className='img-fluid' />
                         */}
                        <Row
                            style={{ borderBottom: "0.5rem solid #F58220" }}
                        >
                            <Col sm={12} className="p-0">
                                <video nocontrols
                                    autoPlay="autoplay"
                                    loop="loop"
                                    muted
                                    style={{ width: "100%", height: "100%" }}>
                                    <source src={strenth} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col sm={6} className="p-0">
                                <img src={strength1} alt="" className='img-fluid mblscreenworkoutgridspace' />
                            </Col>
                            <Col sm={6} className="p-0">
                                <img src={strength2} alt="" className='img-fluid mblscreenworkoutgridspace' />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-start pl-5">
                        <h2 className="oftHeading"
                            style={{ color: "#2E2E2E" }}
                        >03</h2>
                        <h2 className="oftHeading">
                            Strength Training
                        </h2>
                        <p className="oftsubHeading">
                            Our weight and floor exercises change daily so you can focus on different muscles. Your coach can provide options for any movement if you have injuries or limitations.
                        </p>
                    </Col>
                </Row>
            </Container >
        </section >
    </>

)

export default WorkGrid;
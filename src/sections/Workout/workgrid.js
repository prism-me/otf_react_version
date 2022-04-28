import React from 'react';
import { Container, Row, Col } from 'reactstrap'

//images
import vision from "../../assets/images/OTF/about/vision.png";
import mission from "../../assets/images/OTF/about/mission.png";
import values from "../../assets/images/OTF/about/values.png";

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
                <h3 className="oftHeading text-center mb-5">
                    What Happens in class
                </h3>
                <Row>
                    <Col sm={6}>
                        {/* <img src={mission} alt="" className='img-fluid' /> */}
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
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-start">
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
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-start">
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
                        <video
                            nocontrols
                            autoPlay="autoplay"
                            loop="loop"
                            muted
                            style={{ width: "100%", height: "100%" }}>
                            <source src={Cardio} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                    <Col sm={6}>
                        {/* <img src={values} alt="" className='img-fluid' />
                         */}
                        <video nocontrols
                            autoPlay="autoplay"
                            loop="loop"
                            muted
                            style={{ width: "100%", height: "100%" }}>
                            <source src={strenth} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-start">
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
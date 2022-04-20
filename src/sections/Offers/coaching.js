import React from 'react'
import {
    Container, Row, Col
} from 'reactstrap'

//images

import sciencebakedbg from "../../assets/images/OTF/offer/sciencebakedbg.jpg";
import sciencebaked from "../../assets/images/OTF/offer/sciencebaked.png";

import techtrakbg from "../../assets/images/OTF/offer/techtrakbg.jpg";

import coachinspirebg from "../../assets/images/OTF/offer/coachinspirebg.jpg";
import coachinsp from "../../assets/images/OTF/offer/coachinsp.png";


const Coaching = () => {
    return (
        <section className="coaching p-0">
            <Container>
                <h2 className="oftHeading text-center">
                    MORE COACHING. MORE SUPPORT. MORE MOTIVATION.
                </h2>
                <p className="p-light oftsubHeading text-center">
                    Orangetheory Live delivers an energy-packed, full-body group personal training experience in an easy-to-use platform that makes you feel like you’re back in the studio. Get connected with a local coach who provides real-time feedback, motivation, and inspiration, and an intimate group setting that allows you to connect with the studio community before and after your workout.
                </p>
            </Container>
            <Container fluid>
                <Row
                    className="coach-container"
                    style={{ backgroundImage: `url(${sciencebakedbg})` }}
                >
                    <Col sm={6}>
                        <img src={sciencebaked} className='img-fluid mb-3' alt={"img"} />
                    </Col>
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-center">
                        <Container>
                            <h4 className="oftHeading">Science-Backed</h4>
                            <p className="p-light oftsubHeading text-white">
                                Backed by the science of Excess Post Exercise Oxygen Consumption (or EPOC), our interval training is designed for seasoned pros and beginners. Our integrated heart-rate technology will provide you with immediate feedback so that you can get the results you need! Set your own pace, and watch as your heart rate monitor tells you your level of exertion. Take it slow - or test your limits. The choice is always up to you.
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
                            <h4 className="oftHeading text-center">Technology-Tracked</h4>
                            <p className="p-light oftsubHeading text-white text-center">
                                Our heart-rate monitored training is designed to maintain a target zone that stimulates metabolism and increases energy. We call it the afterburn. Our members burn an estimated 500 to 1,000 calories in one workout, no matter their fitness level, and keep burning calories for up to 36 hours.**
                            </p>
                        </Container>
                    </Col>
                </Row>
                <Row
                    className="coach-container"
                    style={{ backgroundImage: `url(${coachinspirebg})` }}
                >
                    <Col sm={6} className="d-flex flex-column justify-content-center align-items-center">
                        <Container>
                            <h4 className="oftHeading">Coach-Inspired</h4>
                            <p className="p-light oftsubHeading text-white">
                                At Orangetheory, you’ll get the energy of a group workout with all the benefits of an experienced personal trainer like: motivation, attention, and technique tips. Our coaches are knowledgeable, encouraging, and committed to helping you reach your fitness goals.
                            </p>
                        </Container>
                    </Col>
                    <Col sm={6}>
                        <img src={coachinsp} className='img-fluid' alt={"img"} />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default Coaching
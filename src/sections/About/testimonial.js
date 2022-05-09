import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'

//images
import videoImg from "../../assets/images/OTF/about/videoImg.png";
import playicon from "../../assets/images/OTF/icons/playicon.png";


const Testimonial = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }

    return (
        <section className="saas1 testimonial rightAnimation videos testimonial-bg">

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
                <h3 className="oftHeading mb-4">
                    Things we do differently
                </h3>
                {/* <p className="oftsubHeading text-center p-padding">
                    Blandit neque fringilla eget faucibus fringilla euismod. Varius ullamcorper massa tortor, pretium massa justo enim tincidunt praesent. Iaculis lectus lectus ut ac. Cum eu velit venenatis tellus porttitor in. Vitae quis tortor massa dolor porttitor. Nec aliquet urna ut blandit vitae porttitor. Vel sed.
                </p> */}
                <Row>
                    <Col md="6" sm="12">
                        <div className="center-content">
                            <div className="video w-100"
                                style={{ background: `url(${videoImg})` }}
                            >
                                <a className="button center-content" onClick={toggle}>
                                    <img alt="video" className="img-fluid" src={playicon} />
                                </a>
                                <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                                    <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                                    <ModalBody className="iframe-modal">
                                        <iframe className="mfp-iframe" frameborder="0" allowfullscreen="true"
                                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FOTFDubai%2Fvideos%2F1068162367292930%2F&show_text=false&width=560&t=0"></iframe>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="testimonial">
                            <h3 className="testimonialheading">
                                More than a gym
                            </h3>
                            <p className="testimonialsubheading mb-2">
                                Orangetheory is a science-backed, technology-tracked, coach-inspired group workout designed to produce results from the inside out. The hardest part of our workouts is showing up - we make it simple for you to push yourself, be your personal best and give you more.
                            </p>
                            <p className="testimonialsubheading">
                                MORE results. MORE confidence. MORE Life. More than a gym. Because you shouldn’t live to exercise. You should exercise to live.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial;
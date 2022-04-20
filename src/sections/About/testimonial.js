import React, { useState } from 'react';
import Slider from 'react-slick';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Testimonial = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }


    const videoData = [
        {
            title: "More than a gym",
            detail1: "Orangetheory is a science-backed, technology-tracked, coach-inspired group workout designed to produce results from the inside out. The hardest part of our workouts is showing up - we make it simple for you to push yourself, be your personal best and give you more.",
            detail2: "MORE results. MORE confidence. MORE Life. More than a gym. Because you shouldn’t live to exercise. You should exercise to live."
        },
        {
            title: "More than a gym",
            detail1: "Orangetheory is a science-backed, technology-tracked, coach-inspired group workout designed to produce results from the inside out. The hardest part of our workouts is showing up - we make it simple for you to push yourself, be your personal best and give you more.",
            detail2: "MORE results. MORE confidence. MORE Life. More than a gym. Because you shouldn’t live to exercise. You should exercise to live."
        },
        {
            title: "More than a gym",
            detail1: "Orangetheory is a science-backed, technology-tracked, coach-inspired group workout designed to produce results from the inside out. The hardest part of our workouts is showing up - we make it simple for you to push yourself, be your personal best and give you more.",
            detail2: "MORE results. MORE confidence. MORE Life. More than a gym. Because you shouldn’t live to exercise. You should exercise to live."
        },
        {
            title: "More than a gym",
            detail1: "Orangetheory is a science-backed, technology-tracked, coach-inspired group workout designed to produce results from the inside out. The hardest part of our workouts is showing up - we make it simple for you to push yourself, be your personal best and give you more.",
            detail2: "MORE results. MORE confidence. MORE Life. More than a gym. Because you shouldn’t live to exercise. You should exercise to live."
        }
    ]
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
                <h3 className="oftHeading">
                    Things we do differently
                </h3>
                <p className="p-light oftsubHeading text-center p-padding">
                    Blandit neque fringilla eget faucibus fringilla euismod. Varius ullamcorper massa tortor, pretium massa justo enim tincidunt praesent. Iaculis lectus lectus ut ac. Cum eu velit venenatis tellus porttitor in. Vitae quis tortor massa dolor porttitor. Nec aliquet urna ut blandit vitae porttitor. Vel sed.
                </p>
                <Row>
                    <Col md="6" sm="12">
                        <div className="center-content">
                            <div className="video w-100"
                                style={{ background: "url('/assets/images/OTF/about/videoImg.png')" }}
                            >
                                <a className="button center-content" onClick={toggle}>
                                    <img alt="video" className="img-fluid" src="/assets/images/OTF/icons/playicon.png" />
                                </a>
                                <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                                    <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                                    <ModalBody className="iframe-modal">
                                        <iframe className="mfp-iframe" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"></iframe>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="testimonial-slider">
                            <Slider {...settings}>
                                {videoData.length > 0 &&
                                    videoData.map((x, i) => (
                                        <div className="item" key={i}>
                                            <div className="testimonial">
                                                <h3 className="testimonialheading">
                                                    {x.title}
                                                </h3>
                                                <p className="testimonialsubheading mb-2">
                                                    {x.detail1}
                                                </p>
                                                <p className="testimonialsubheading">
                                                    {x.detail2}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial;
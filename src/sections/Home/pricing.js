import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Documents from '../../components/Modals/Documents/Documents';

const Pricing = ({ membershipsData, isArabic, language }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="gym pricing set-relative pb-0"
            id="membership_packages">
            <Container>
                <Row>
                    <Col md="10" className="offset-md-1">
                        <h2 className="oftHeading"
                            style={{
                                color: "#2E2E2E"
                            }}
                        >Become a Member</h2>
                        <p className="oftsubHeading text-center mb-5">
                            It only takes a minute in our studio to understand it’s not a competition – it’s a
                            community. Check out our membership options and contact your local studio
                            to find the right fit for you.
                        </p>
                    </Col>
                    <Col lg="12" md="8" className="offset-md-2 offset-lg-0">
                        <Row className="justify-content-center">
                            {membershipsData?.map((item, i) => {
                                return (
                                    <Col sm={12} lg="4" md="6" key={i} className="pb-3">
                                        <div className="price-container hover-overlay shadows bg-white text-center">
                                            <div className="price-feature-container set-relative">
                                                <div className="feature-text">
                                                    <center>
                                                        <img src={item?.color_logo} className="feature-icon1 mb-4" alt={"icon"} />
                                                        <img src={item?.white_logo} className="feature-icon2 d-none mb-4" alt={"icon"} />
                                                    </center>
                                                    <h4 className="feature-text-heading text-center bold text-uppercase font-primary">
                                                        {
                                                            isArabic
                                                                ? item?.arabic?.name
                                                                : item?.name
                                                        }
                                                    </h4>
                                                    <hr className="set-border" />
                                                </div>
                                                <div className="price-features font-primary px-4">
                                                    <h5 className="price-feature text-center mb-1"
                                                        dangerouslySetInnerHTML={{
                                                            __html: isArabic
                                                                ? item?.arabic?.description
                                                                : item?.description
                                                        }}
                                                    ></h5>
                                                </div>
                                                <button className="otfBtn2"
                                                    onClick={() => setShowModal(true)}
                                                >
                                                    <span
                                                        style={{ borderBottom: "1px solid #F58220" }}
                                                    >
                                                        join now
                                                    </span></button>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Documents
                            show={showModal} onHide={() => setShowModal(false)}
                            title="Become a Member Today"
                        />
                    </Col>
                </Row>
                <center>
                    <a href={"https://wa.me/+971800625336"} target={"_blank"} className='btn otfBtn1'
                        style={{ border: "1px solid #F58220", color: "#F58220" }}
                    >
                        <i class="fab fa-whatsapp mr-2"></i>
                        Reach out to us
                    </a>
                </center>
            </Container>
        </section>
    )
}

export default Pricing;
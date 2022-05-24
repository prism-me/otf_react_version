import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Documents from '../../components/Modals/Documents/Documents';
import { constants } from '../../utils/constants';

const Pricing = ({ membershipsData, isArabic, language }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="gym pricing set-relative pb-0"
            id="membership_packages">
            <Container>
                <h2 className="oftHeading"
                    style={{
                        color: "#2E2E2E"
                    }}
                >
                    {
                        constants?.site_content?.member_sec?.title[language]
                    }
                </h2>
                <p className="oftsubHeading text-center mb-5">
                    {
                        constants?.site_content?.member_sec?.description[language]
                    }
                </p>
                <Row>
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
                                                        {
                                                            constants?.site_content?.member_sec?.join_btn[language]
                                                        }
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Documents
                            show={showModal} onHide={() => setShowModal(false)}
                            title={
                                constants?.site_content?.memberform_sec?.btn_text[language]
                            }
                            language={language}
                        />
                    </Col>
                </Row>
                <center>
                    <a href={"https://wa.me/+971800625336"} target={"_blank"} className='btn otfBtn1'
                        style={{ border: "1px solid #F58220", color: "#F58220" }}
                    >
                        <i className={`fab fa-whatsapp ${language === "en" ? 'mr-2' : 'ml-2'}`}
                            style={{ color: "#25d366" }}
                        ></i>
                        {
                            constants?.site_content?.member_sec?.btn_text[language]
                        }
                    </a>
                </center>
            </Container>
        </section >
    )
}

export default Pricing;
import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Documents from '../../components/Modals/Documents/Documents';
import { constants } from '../../utils/constants';

const Benefits = ({ benefitList, language }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="gym benefit rightAnimation" id="plan">

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
                <h3 className="oftHeading"
                    style={{
                        color: "#2E2E2E"
                    }}
                >
                    {constants?.site_content?.memberbenefit_sec?.title[language]}
                </h3>
                <Row>
                    {benefitList &&
                        benefitList.length > 0 &&
                        benefitList.map((x, i) => (
                            <Col lg="4" md="4" className="offset-md-2 offset-lg-0" key={i}>
                                <div>
                                    <center>
                                        <img src={x.img} alt="img"
                                            style={{
                                                padding: "1.5rem",
                                                border: "1px solid #F58220",
                                                borderRadius: "100%",
                                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.14)",
                                                width: "110px"
                                            }}
                                            className="formateImg"
                                        />
                                    </center>
                                </div>
                                <p className='oftsubHeading text-center my-3'>
                                    {
                                        x.title
                                    }
                                </p>
                            </Col>
                        ))
                    }
                </Row>
                <center>
                    <button className='otfBtn1 mt-3 px-5'
                        style={{ border: "1px solid #F58220" }}
                        onClick={() => setShowModal(true)}
                    >
                        {constants?.site_content?.memberbenefit_sec?.avail_btn[language]}
                    </button>
                    <Documents
                        show={showModal} onHide={() => setShowModal(false)}
                        title="Become a Member Today"
                        language={language}
                    />
                    {/* <p className='mt-2'><small>*Available once pandemic restrictions are lifted.</small></p> */}
                </center>
            </Container>
        </section>
    )

}
export default Benefits;
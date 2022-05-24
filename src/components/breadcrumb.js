import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Documents from './Modals/Documents/Documents';
import ApplyNow from './Modals/ApplyNow/ApplyNow';
import { constants } from '../utils/constants';

const Breadcrumb = ({ btntext, title, subtitle, bannerImg, promtext, freeform, language }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <section className="agency breadcrumb-section "
            style={{ background: `url(${bannerImg})` }}
        >
            <Container>
                <Row>
                    <Col xs="12">
                        <div className=" d-flex flex-column justify-content-center align-items-center">
                            <h2 className="breadcrumb-text">{title}</h2>
                            {
                                subtitle &&
                                <p className="breadcrumb-subtext">{subtitle}</p>
                            }
                            {
                                btntext &&
                                <button className="breadcrumb-btn"
                                    onClick={() => setShowModal(true)}
                                >{btntext}</button>
                            }

                            {
                                freeform &&
                                <ApplyNow
                                    show={showModal} onHide={() => setShowModal(false)}
                                    title={"Free Class"}
                                    language={language}
                                />
                            }
                            {
                                !freeform &&
                                <Documents
                                    show={showModal} onHide={() => setShowModal(false)}
                                    title={
                                        constants?.site_content?.memberform_sec?.btn_text[language]
                                    }
                                    language={language}
                                />
                            }

                            {
                                promtext &&
                                <p className='text-white mt-3'><small>{promtext}</small></p>
                            }
                        </div>

                        {/* <ul className="breadcrumb justify-content-center">
                            {list.map((path, i) => (
                                <li key={`breadcrumb-${i}`}><a href="#">{path}</a></li>
                            ))}
                        </ul> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Breadcrumb
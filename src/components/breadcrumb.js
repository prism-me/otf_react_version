import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Documents from './Modals/Documents/Documents';
const Breadcrumb = ({ btntext, title, subtitle, bannerImg, promtext }) => {

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
                            <button className="breadcrumb-btn"
                                onClick={() => setShowModal(true)}
                            >{btntext}</button>
                            <Documents
                                show={showModal} onHide={() => setShowModal(false)}
                            />
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
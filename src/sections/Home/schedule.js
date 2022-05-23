import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Documents from '../../components/Modals/Documents/Documents';
import ApplyNow from '../../components/Modals/ApplyNow/ApplyNow';
import { HashLink } from "react-router-hash-link";


const Schedule = ({ titleM, title, detail, list, listImg, language, btnText, bgImg, subtitle, detail2, coachImg, freeform, btnfitnessText }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className={`gym format rightAnimation bg-schedule`} id="schedule"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("${bgImg}")` }}
        >
            <div className="animated-bg"><i></i><i></i><i></i></div>

            <Container>
                {
                    title &&
                    <h3 className="oftHeading">{title}</h3>
                }
                <Row>
                    <Col md="7">
                        <div className="center-text">
                            <div>
                                {
                                    titleM &&
                                    <h3 className={`oftHeading text-left ${subtitle && "mb-3"}`}>{titleM}</h3>
                                }
                                {
                                    subtitle &&
                                    <h4 className='text-white mb-5' style={{ fontSize: "20px" }}>{subtitle}</h4>
                                }
                                <div className="format-sub-text">
                                    <p className="oftsubHeading text-white">
                                        {detail}
                                    </p>
                                    {
                                        detail2 &&
                                        <p className="oftsubHeading text-white mt-3">
                                            {detail2}
                                        </p>
                                    }

                                </div>
                                {/* {
                                    listImg &&
                                    <ul className="icon-collection">
                                        {listImg.length > 0 && listImg.map((x, i) => (
                                            <li className="about-icongym" key={i}>
                                                <div className="center-content iconDiv">
                                                    <img alt="" className="img-fluid icons" src={x} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                } */}

                                {
                                    list &&
                                    <ul className='text-white pl-4' style={{ listStyle: "circle" }}>
                                        {list.length > 0 && list.map((x, i) => (
                                            <li key={i}
                                                style={{ fontSize: "16px", fontWeight: "400", textAlign: "left", lineHeight: "1.8" }}
                                            >
                                                {x}
                                            </li>
                                        ))}
                                    </ul>
                                }

                                {
                                    btnText &&
                                    <>
                                        <button className={`otfBtn1 px-5 ${subtitle ? "mt-2" : " mt-2"}`}
                                            onClick={() => setShowModal(true)}
                                        >
                                            {btnText}
                                        </button>
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
                                                title="Become a Member Today"
                                                language={language}
                                            />
                                        }

                                    </>
                                }

                                {
                                    btnfitnessText &&
                                    <>
                                        <HashLink to={`/${language}/about` + "#fitnesscoach"}
                                            className={`otfBtn1 px-5 ${subtitle ? "mt-2" : " mt-2"}`}
                                        >
                                            {btnfitnessText}
                                        </HashLink>
                                    </>
                                }

                            </div>
                        </div>
                    </Col>
                    <Col md="5">
                        <div className="text-center center-content">
                            <img alt="" className="img-fluid format-img" src={coachImg} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Schedule;
import { React, useState } from 'react';
import exp_bg_img from "../../../assets/images/about/AGSExperince.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import { constants } from "../../../utils/constants"

const AgsExperience = (props) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="AGSExperience">
            <h3 className="Title">
                {props.aboutAgs?.title}
                {/* ABOUT THE AGS EXPERIENCE */}
            </h3>
            <Container>
                <Row className={"align-items-center"}>
                    <Col sm={12} lg={5}>
                        <img alt={"#"} src={props?.aboutImg} className="healtImg" />
                    </Col>
                    <Col sm={12} lg={7}>
                        <p className="subtitle"
                            dangerouslySetInnerHTML={{
                                __html: isReadMore ?
                                    props.aboutAgs?.description.substr(
                                        0,
                                        530
                                    )
                                    : props.aboutAgs?.description
                            }}
                        // dangerouslySetInnerHTML={{
                        //     __html:
                        //         props.aboutAgs?.description
                        // }}
                        >
                            {/* At American Gulf School, an American Curriculum School in Sharjah, we believe that a diverse curriculum broadens not only minds but opportunities too. Our learners are encouraged to question and experiment to find answers to critical thinking questions, giving each learner confidence within their own ability to achieve their full potential. It is designed and delivered to bring out the best in our learners, both academically and personally. We pride ourselves on being one of the best international schools in the UAE. */}
                        </p>
                        {
                            props.aboutAgs?.description.length > 530 ?
                                <p onClick={toggleReadMore}>
                                    {isReadMore ? <button className={"viewButton"}>
                                        {
                                            constants?.site_content?.view_more[
                                            props.language
                                            ]
                                        }
                                        {/* View more */}
                                    </button> : <button className={"viewButton"}>
                                        {
                                            constants?.site_content?.view_less[
                                            props.language
                                            ]
                                        }
                                        {/* Show less */}
                                    </button>}
                                </p> : ""
                        }

                        {/* <button className={"viewButton"}>
                            {
                                constants?.site_content?.view_more[
                                props.language
                                ]
                            }
                        </button> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AgsExperience;
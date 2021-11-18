import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { constants } from "../../../utils/constants"
import ModalVideo from 'react-modal-video'
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Inclusion(props) {
    const [isOpenVideo, setOpenVideo] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="Inclusion">
            <Container>
                {props.studentCareData?.map((x, index) => (
                    <div
                        // className="HowToSellspacing"
                        className={props.isArabic ?
                            index % 2 !== 0 ? "dirlayoutOddArabic HowToSellspacing" : "HowToSellspacing"
                            : index % 2 !== 0 ? "dirlayoutOdd HowToSellspacing" : "HowToSellspacing"
                        }
                        id={index} key={index + x.title}
                    >
                        <Row className="align-items-center">
                            <Col sm={4} md={6} lg={4}>
                                <div className="d-flex justify-content-center align-items-center imgheight"
                                    style={{ backgroundImage: `url(${x.thumbnail})` }}
                                >
                                    <div className="video-promo-content mt-4 ">
                                        {x.video_link && (
                                            x.video_link?.length > 0 ?
                                                <button className="btn video-play-icon"
                                                    onClick={() => {
                                                        setCurrentIndex(index);
                                                        setOpenVideo(true);
                                                    }}
                                                >
                                                    <PlayArrowIcon className={"playSize"} />
                                                </button>
                                                : ""
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col sm md={6} lg >
                                <h2 className="title">
                                    {
                                        props.isArabic
                                            ? x?.arabic?.title
                                            : x.title
                                    }
                                    {/* INCLUSION */}
                                </h2>
                                <p
                                    className={
                                        props.isArabic
                                            ? "subTitleArabic"
                                            : "subTitle"
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: isReadMore ?
                                            props.isArabic
                                                ? x?.arabic?.description.substr(
                                                    0,
                                                    810
                                                )
                                                : x.description.substr(
                                                    0,
                                                    810
                                                ) : props.isArabic
                                                ? x?.arabic?.description
                                                : x.description
                                    }}
                                >
                                    {/* American Gulf School is an equal opportunities school, and we strongly believe in equality and diversity. We welcome learners from any race, nationality or cultural background. */}
                                </p>
                                {/* <p className={"subTitle"}>
                                    We believe that a well-designed curriculum will result in learners that are lifelong learners and who will have the ability to become civic, business and community leaders and advocates of the UAE in the international community.
                                </p>
                                <p className={"subTitle"}>
                                    Furthermore, our school believes that these learning beliefs are applied to all learners including learners that are in need of special assistance due to exceptional needs. This includes children who are on the gifted end of the learning continuum and children with learning challenges.
                                </p> */}
                                {x.description.length >= 810 ?
                                    // <button className={"LearnmoreButton"}>
                                    //     Learn more
                                    // </button>
                                    <p onClick={toggleReadMore}>
                                        {isReadMore ? <button className={"LearnmoreButton"}>
                                            {
                                                constants?.site_content?.learn_more[
                                                props.language
                                                ]
                                            }
                                            {/* Learn more */}
                                        </button> : <button className={"LearnmoreButton"}>
                                            {
                                                constants?.site_content?.learn_less[
                                                props.language
                                                ]
                                            }
                                            {/* Show less */}
                                        </button>}
                                    </p>
                                    : ""
                                }

                            </Col>
                        </Row>
                    </div>
                ))}
                <ModalVideo
                    channel='vimeo'
                    autoplay={true}
                    // vimeo={{
                    //   autoplay: 1,
                    //   mute: 1
                    // }}
                    isOpen={isOpenVideo}
                    videoId={props.studentCareData[currentIndex]?.video_link?.split("/")[3]}
                    onClose={() => setOpenVideo(false)}
                />
            </Container>
        </div>
    );
}
export default Inclusion;

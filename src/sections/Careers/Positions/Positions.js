import React from 'react';
import { Grid } from "@material-ui/core";
import { Card, Col, Row, Container } from "react-bootstrap";
import { Hidden } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { constants } from "../../../utils/constants"
import ApplyNow from "../../../components/Modals/ApplyNow/ApplyNow";

const Positions = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [jobDescription, setJobDescription] = React.useState();

    const slidesData = [
        {
            position: "Reading Specialist",
        },
        {
            position: "Academic Counselor",
        },
        {
            position: "Social Worker",
        },
        {
            position: "Designation 4",
        },
        {
            position: "Designation 5",
        },
        {
            position: "Designation 6",
        },
        {
            position: "Designation 7",
        },
        {
            position: "Designation 8",
        },
        {
            position: "Designation 9",
        },
        {
            position: "Designation 10",
        },
    ];
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Hidden smDown>
                <div className="Position" dir="ltr">
                    <h3 className={"Title"}>
                        {props?.openPosition?.title}
                        {/* OPEN POSITIONS */}
                    </h3>
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        showDots={false}
                        arrows={true}
                        ssr={true} // means to render carousel on server-side.
                        infinite={false}
                        draggable={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="listStyle"
                    >
                        {props.careerData.map((slides, index) => (
                            <div className={"description-column"}>
                                <Card className={"cardStyle"}>
                                    <Card.Body >
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <p className={"subtitle"}>
                                                    {slides.designation}
                                                </p>
                                            </Col>
                                            <br />
                                            <Col xs={12} sm={12} md={12} lg={12} className="d-flex justify-content-center align-items-center">
                                                <button class="schoolbtn btn-lg"
                                                    onClick={() => {
                                                        // setCurrentIndex(index);
                                                        setModalShow(true);
                                                        setJobDescription(props.language === 'ar' ? slides.arabic.description : slides.description);
                                                    }
                                                    }
                                                >
                                                    {
                                                        constants?.site_content?.apply_now[
                                                        props.language
                                                        ]
                                                    }
                                                    {/* APPLY NOW */}
                                                </button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                        }
                    </Carousel>
                    <ApplyNow
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        language={props.language}
                        careerDescription={jobDescription}
                    />
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className={"positionMBL"}>
                    <h3 className={"Title"}>
                        {props?.openPosition?.title}
                        {/* OPEN POSITIONS */}
                    </h3>
                    <Carousel
                        responsive={responsive}
                        swipeable={false}
                        draggable={true}
                        showDots={true}
                        arrows={false}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="listStyle"
                    >
                        {
                            props.careerData.map((slides, index) => (
                                <div className={"description-column"}>
                                    <Card className={"cardStyle"}>
                                        <Card.Body >

                                            <p className={"subtitle"}>
                                                {
                                                    slides.designation
                                                }
                                            </p>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button class="schoolbtn btn-lg"
                                                    onClick={() => {
                                                        // setCurrentIndex(index);
                                                        setModalShow(true);
                                                        setJobDescription(props.language === 'ar' ? slides.arabic.description : slides.description);
                                                    }
                                                    }
                                                >
                                                    {
                                                        constants?.site_content?.apply_now[
                                                        props.language
                                                        ]
                                                    }
                                                    {/* APPLY NOW */}
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </Carousel>
                    <ApplyNow
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        language={props.language}
                        careerDescription={jobDescription}
                    />
                </div>
            </Hidden>

        </>
    );
};

export default Positions;
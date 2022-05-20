import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ages from "../../components/Modals/Ages/Ages"
//images
import dummy from "../../assets/images/OTF/team/imageplace.jpg";


var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 490,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 767,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 991,
            settings: { slidesToShow: 3 }
        }
    ]
};

const FitnessCoach = ({ coachData, language, isArabic }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [coachDescription, setCoachDescription] = React.useState();
    const [coachName, setCoachName] = React.useState();
    const [coachImg, setCoachImg] = React.useState();




    return (
        <section className="event speaker set-relative pb-2" id="fitnesscoach">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="title title2 title-inner">
                            <div className="main-title">
                                <h2 className="font-primary borders text-center m-b-0">
                                    <span>Our Certified Fitness Coaches</span>
                                </h2>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" className="speker-container">
                        <Slider className="speaker-slider " {...settings}>
                            {coachData?.map((x, i) => (
                                <div className="item" key={i}>
                                    <div className="text-center mb-3">
                                        <div className="team-img team-img-wrapper">
                                            {
                                                x.img === null ?
                                                    <img alt="" className="img-fluid imagestyle" src={dummy} />
                                                    :
                                                    <img alt="" className="img-fluid imagestyle" src={x.img} />
                                            }
                                            <div className="middle">
                                                <div className="text"
                                                    onClick={() => {
                                                        setShowModal(true);
                                                        setCoachDescription(
                                                            isArabic
                                                                ? x?.arabic?.description
                                                                : x?.description
                                                        );
                                                        setCoachName(
                                                            isArabic
                                                                ? x?.arabic?.name
                                                                : x?.name
                                                        );
                                                        setCoachImg(x?.img);
                                                    }}
                                                >Coach Details</div>
                                            </div>
                                        </div>
                                        <div className="employee">
                                            <h5 className="e-name text-center">
                                                {
                                                    isArabic
                                                        ? x?.arabic?.name
                                                        : x?.name
                                                }
                                            </h5>
                                            <h6 className="post text-center">
                                                {
                                                    isArabic
                                                        ? x?.arabic?.designation
                                                        : x?.designation
                                                }
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </Slider>
                    </Col>
                </Row>
                <Ages
                    show={showModal} onHide={() => setShowModal(false)}
                    title={coachName}
                    description={coachDescription}
                    img={coachImg}
                />
            </Container>
        </section>
    );
}

export default FitnessCoach;
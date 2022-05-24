import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { constants } from '../../utils/constants';


//images
import dummy from "../../assets/images/OTF/team/imageplace.jpg";



var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    centerMode: false,
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

const Speaker = ({ teamsData, language, isArabic }) => (
    <section className="event speaker set-relative" id="speaker">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="title title2 title-inner">
                        <div className="main-title">
                            <h2 className="font-primary borders text-center m-b-0">
                                <span>
                                    {
                                        constants?.site_content?.team_sec?.title[language]
                                    }
                                </span>
                            </h2>
                        </div>
                    </div>
                </Col>
                <Col xs="12" className="speker-container">
                    <Slider className="speaker-slider " {...settings}>
                        {teamsData?.map((x, i) => (
                            <div className="item" key={i}>
                                <div className="text-center">
                                    <div className="team-img">
                                        {
                                            x.img === null ?
                                                <img alt="" className="img-fluid" src={dummy} />
                                                :
                                                <img alt="" className="img-fluid" src={x.img} />
                                        }
                                        {/* <div className="overlay"></div>
                                            <div className="social">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i aria-hidden="true" className="fa fa-google center-content"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i aria-hidden="true" className="fa fa-globe center-content"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                    </div>
                                    <div className="employee">
                                        <h5 className="e-name text-center">
                                            {
                                                isArabic
                                                    ? x?.arabic?.name
                                                    : x?.name
                                            }
                                        </h5>
                                        <h6 className="post text-center ">
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
        </Container>
    </section>
)

export default Speaker;
import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import team1 from "../../assets/images/OTF/team/donna.png";
import team2 from "../../assets/images/OTF/team/noor.png";
import team3 from "../../assets/images/OTF/team/sarah.png";
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


const speaker = [
    {
        img: team1,
        title: "Donna Forbes",
        subtitle: "Head Coach"
    },
    {
        img: team2,
        title: "Noor Maki",
        subtitle: "Fitness Coach"
    },
    {
        img: team3,
        title: "Sarah Al Ghafari",
        subtitle: "Fitness Coach"
    },
    {
        img: dummy,
        title: "Katrina Putnina",
        subtitle: "Fitness Coach"
    },
    {
        img: dummy,
        title: "Sara Lodhi",
        subtitle: "Fitness Coach"
    },
    {
        img: dummy,
        title: "Fadi Khoury",
        subtitle: "Fitness Coach"
    },
];
const FitnessCoach = () => (
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
                        {speaker.length > 0 &&
                            speaker.map((x, i) => (
                                <div className="item" key={i}>
                                    <div className="text-center mb-3">
                                        <div className="team-img team-img-wrapper">
                                            <img alt="" className="img-fluid imagestyle" src={x.img} />
                                            <div className="middle">
                                                <div className="text">Lorem Ipsum</div>
                                            </div>
                                        </div>
                                        <div className="employee">
                                            <h5 className="e-name text-center">{x.title}</h5>
                                            <h6 className="post text-center ">{x.subtitle}</h6>
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

export default FitnessCoach;
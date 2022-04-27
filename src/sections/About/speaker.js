import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import team1 from "../../assets/images/OTF/team/SheilaMarieOllamina.jpg";
import team2 from "../../assets/images/OTF/team/ShakirahNamusoke.jpg";
import team3 from "../../assets/images/OTF/team/KarenJoyMasangcay.jpg";
import team4 from "../../assets/images/OTF/team/JudyAnnNojor.jpg";
import team5 from "../../assets/images/OTF/team/ComfortTumukunde.jpg";
import team6 from "../../assets/images/OTF/team/BlessieTalon.jpg";
import team7 from "../../assets/images/OTF/team/AnnaAdajar.jpg";
import team8 from "../../assets/images/OTF/team/AnastaciaLeochico.jpg";


var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
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
        title: "Sheila Marie Ollamina",
        subtitle: "Sales Associate"
    },
    {
        img: team2,
        title: "Shakirah Namusoke",
        subtitle: "Sales Associate"
    },
    {
        img: team3,
        title: "Karen Joy Masangcay",
        subtitle: "Sales Associate"
    },
    {
        img: team4,
        title: "Judy Ann Nojor",
        subtitle: "Sales Associate"
    },
    {
        img: team5,
        title: "Comfort Tumukunde",
        subtitle: "Sales Associate"
    },
    {
        img: team6,
        title: "Blessie Talon",
        subtitle: "Sales Associate"
    },
    {
        img: team7,
        title: "Anna Adajar",
        subtitle: "Sales Associate"
    },
    {
        img: team8,
        title: "Anastacia Leochico",
        subtitle: "Sales Associate"
    }
];
const Speaker = () => (
    <section className="event speaker set-relative pb-2" id="speaker">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="title title2 title-inner">
                        <div className="main-title">
                            <h2 className="font-primary borders text-center m-b-0">
                                <span>Our team</span>
                            </h2>
                        </div>
                    </div>
                </Col>
                <Col xs="12" className="speker-container">
                    <Slider className="speaker-slider " {...settings}>
                        {speaker.length > 0 &&
                            speaker.map((x, i) => (
                                <div className="item" key={i}>
                                    <div className="text-center">
                                        <div className="team-img">
                                            <img alt="" className="img-fluid" src={x.img} />
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

export default Speaker;
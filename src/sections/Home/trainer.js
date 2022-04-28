// import React from 'react'
// import ReactStars from "react-rating-stars-component";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Container, Row, Col } from 'reactstrap'

// var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     autoplay: true,
//     swipeToSlide: true,
//     centerMode: true,
//     centerPadding: '60px',
//     arrows: false,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 420,
//             settings: {
//                 slidesToShow: 1
//             }
//         },
//         {
//             breakpoint: 1200,
//             settings: { slidesToShow: 3 }
//         }
//     ]
// };

// const Trainer = ({ testimonial, title }) => (
//     <section className="gym trainers">
//         <Container className="overflow-hide">
//             <h3 className="oftHeading mb-0"
//                 style={{
//                     color: "#2E2E2E"
//                 }}
//             >
//                 {title}
//             </h3>
//             <Row>
//                 <Col xs="12">
//                     <Slider className="owl-carousel owl-theme trainers-slider" id="trainers-slider" {...settings}>
//                         {testimonial &&
//                             testimonial.length > 0 &&
//                             testimonial.map((x, i) => (
//                                 <div className="item" key={i}>
//                                     <img alt="" className="img-fluid" src={x.img} />
//                                     <div className="trainers-info">
//                                         <h4 className="mb-2 text-center mt-1">
//                                             {
//                                                 x.title
//                                             }
//                                         </h4>
//                                         <p className="text-center">
//                                             {
//                                                 x.subtitle
//                                             }
//                                         </p>
//                                         <p className="d-flex justify-content-center align-items-center">
//                                             <ReactStars
//                                                 count={5}
//                                                 // onChange={() => { }}
//                                                 edit={false}
//                                                 size={24}
//                                                 isHalf={true}
//                                                 value={x.rating}
//                                                 emptyIcon={<i className="far fa-star"></i>}
//                                                 halfIcon={<i className="fa fa-star-half-alt"></i>}
//                                                 fullIcon={<i className="fa fa-star"></i>}
//                                                 activeColor="#F8B101"
//                                                 classNames="rating_bar text-center"
//                                             />
//                                         </p>

//                                         {/* <div className="socials-lists">
//                                         <ul className="socials-horizontal justify-content-center">
//                                             <li>
//                                                 <a href="#">
//                                                     <i aria-hidden="true" className="fa fa-facebook center-content"></i>
//                                                 </a>
//                                             </li>
//                                             <li>
//                                                 <a href="#">
//                                                     <i aria-hidden="true" className="fa fa-twitter center-content"></i>
//                                                 </a>
//                                             </li>
//                                             <li>
//                                                 <a href="#">
//                                                     <i aria-hidden="true" className="fa fa-google center-content"></i>
//                                                 </a>
//                                             </li>
//                                             <li>
//                                                 <a href="#">
//                                                     <i aria-hidden="true" className="fa fa-instagram center-content"></i>
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div> */}
//                                     </div>
//                                 </div>
//                             ))
//                         }

//                     </Slider>
//                 </Col>
//             </Row>
//         </Container>
//     </section>
// )


// export default Trainer;


import React from 'react'
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'reactstrap'

import googleIcon from "../../assets/images/OTF/icons/googleIcon.png"

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
        }
    ]
};

const Trainer = ({ testimonial, title }) => (
    <section className="app2 gym team">
        <Container>
            <h3 className="oftHeading"
                style={{
                    color: "#2E2E2E"
                }}
            >
                {title}
            </h3>
            <Row>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme team-slider"  {...settings}>
                        {testimonial &&
                            testimonial.length > 0 &&
                            testimonial.map((x, i) => (
                                <div className="item">
                                    <div className="team-container">
                                        <div
                                            style={{
                                                background: "#2E2E2E",
                                                borderTopLeftRadius: "5px",
                                                borderTopRightRadius: "5px",
                                                padding: " 25px 30px"
                                            }}
                                        >
                                            <img alt="" className="img-fluid members" src={x.img} />
                                            <p className="d-flex justify-content-center align-items-center mb-2">
                                                <ReactStars
                                                    count={5}
                                                    // onChange={() => { }}
                                                    edit={false}
                                                    size={24}
                                                    isHalf={true}
                                                    value={x.rating}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#F8B101"
                                                    classNames="rating_bar text-center"
                                                />
                                            </p>
                                        </div>

                                        <div className="text-center"
                                            style={{
                                                padding: " 25px 30px"
                                            }}
                                        >
                                            <h5 className="name">
                                                {x.title}
                                            </h5>
                                            <h6 className="post">
                                                A Month Ago
                                            </h6>
                                            <p className="team-para">
                                                {x.subtitle}
                                            </p>
                                            <center>
                                                <img src={googleIcon}
                                                    className="mt-5 mb-2"
                                                    style={{
                                                        width: "60px"
                                                    }} alt="googleIcon" />
                                            </center>
                                            <p className="team-para">
                                                Verified Reviews
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section >
)


export default Trainer;
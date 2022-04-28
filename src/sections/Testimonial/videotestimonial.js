import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Container, Row, Col } from 'reactstrap'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    swipeToSlide: true,
    centerMode: false,
    centerPadding: '60px',
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1200,
            settings: { slidesToShow: 3 }
        }
    ]
};

const VideotesTimonial = ({ testimonial, title }) => {
    const [openVideo, setOpenVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="event gym team-sec speaker set-relative pt-0  AgsSlider" id="speaker">
            <h3 className="oftHeading"
                style={{
                    color: "#2E2E2E"
                }}
            >
                {title}
            </h3>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    {/* <Slider className="owl-carousel owl-theme trainers-slider" id="trainers-slider" {...settings}> */}
                    {testimonial.slice(0, 5).map((data, i) => {
                        return (
                            <Col sm={4} className="speker-container" key={i}>
                                {/* <div className="item pt-0" key={i} > */}
                                <div className="text-center">
                                    <div className="d-flex justify-content-center align-items-center imgheight"
                                        style={{ backgroundImage: `url(${data.img})` }}
                                    >
                                        <div className="video-promo-content ">
                                            {data.video_link && (
                                                data.video_link?.length > 0 ?
                                                    <button className="btn video-play-icon"
                                                        style={{
                                                            border: "0",
                                                            padding: "1.5rem"
                                                        }}
                                                        onClick={() => {
                                                            setCurrentIndex(i);
                                                            setOpenVideo(true);
                                                        }}
                                                    >
                                                        <PlayArrowIcon className={"playSize"} />
                                                    </button>
                                                    : ""
                                            )}
                                        </div>
                                    </div>
                                    {/* <div className="employee pt-3">
                                        <h5 className="e-name text-center font-secondary"
                                            style={{
                                                fontWeight: "400",
                                                fontSize: "16px"
                                            }}
                                        >{data.title}</h5>
                                        <h5 className="e-name text-center font-secondary"
                                            style={{
                                                fontWeight: "400",
                                                fontSize: "16px"
                                            }}
                                        >{data.date}</h5>
                                        <p className="post text-center"
                                            style={{
                                                fontSize: "14px"
                                            }}
                                        >{data.subtitle}</p>

                                        <p className="d-flex justify-content-center align-items-center my-2">
                                            <ReactStars
                                                count={5}
                                                // onChange={() => { }}
                                                edit={false}
                                                size={24}
                                                isHalf={true}
                                                value={data.rating}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#F8B101"
                                                classNames="rating_bar text-center"
                                            />
                                        </p>
                                    </div> */}
                                </div>
                            </Col>
                            // </div>
                        )
                    })}
                    {/* </Slider> */}
                </Row>
            </Container>
            <ModalVideo
                youtube={{
                    autoplay: 1,
                    mute: 1
                }}
                isOpen={openVideo}
                videoId={testimonial[currentIndex]?.video_link?.split("/")[3]}
                onClose={() => setOpenVideo(false)}
            />
        </section>
    )
}
export default VideotesTimonial;
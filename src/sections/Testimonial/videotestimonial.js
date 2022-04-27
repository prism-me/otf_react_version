import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Container, Row, Col } from 'reactstrap'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: false,
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

const VideotesTimonial = ({ testimonial }) => {
    const [openVideo, setOpenVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="event team-sec speaker set-relative pt-0 AgsSlider" id="speaker">
            <Container>
                {/* <Row> */}
                <Slider className="owl-carousel owl-theme trainers-slider" id="trainers-slider" {...settings}>
                    {testimonial.slice(0, 5).map((data, i) => {
                        return (
                            // <Col md="3" sm="6" className="speker-container" key={i}>
                            <div className="item" key={i}>
                                <div className="text-center">
                                    <div className="d-flex justify-content-center align-items-center imgheight"
                                        style={{ backgroundImage: `url(${data.img})` }}
                                    >
                                        <div className="video-promo-content ">
                                            {data.video_link && (
                                                data.video_link?.length > 0 ?
                                                    <button className="btn video-play-icon"
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
                                    <div className="employee pt-3">
                                        <h5 className="e-name text-center font-secondary"
                                            style={{
                                                fontWeight: "400"
                                            }}
                                        >{data.title}</h5>
                                        <h6 className="post text-center ">{data.subtitle}</h6>
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
                                    </div>
                                </div>
                                {/* </Col> */}
                            </div>
                        )
                    })}
                </Slider>
                {/* </Row> */}
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
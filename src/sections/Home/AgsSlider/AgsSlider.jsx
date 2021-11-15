import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { constants } from "../../../utils/constants"

function AgsSlider(props) {
    const [openVideo, setOpenVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className={"AgsSlider"} dir="ltr">
            <h3 className={"InfoTitle"}>
                {
                    constants?.site_content?.life_at_ags[
                    props.language
                    ]
                }
                {/* LIFE AT AMERICAN GULF SCHOOL */}
            </h3>

            <Carousel responsive={responsive}
                swipeable={true}
                showDots={true}
                arrows={true}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                draggable={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="listStyle"
            >
                {
                    props.lifeagsData.map((slides, index) => (
                        <div className="item">
                            <div className={"divstyle"}>
                                <div className="d-flex justify-content-center align-items-center imgheight"
                                    style={{ backgroundImage: `url(${slides.thumbnail})` }}
                                >
                                    <div className="video-promo-content mt-4 ">
                                        {slides.video_link && (
                                            slides.video_link?.length > 0 ?
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
                                        <h5 className={"overview-heading text-center"}>
                                            {
                                                props.isArabic
                                                    ? slides?.arabic?.title
                                                    : slides.title
                                            }
                                            {/* &mdash; {slides.Subtitle} */}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
            <ModalVideo
                channel='vimeo'
                autoplay={true}
                // youtube={{
                //     autoplay: 1,
                //     mute: 1
                // }}
                isOpen={openVideo}
                videoId={props.lifeagsData[currentIndex]?.video_link?.split("/")[3]}
                onClose={() => setOpenVideo(false)}
            />
        </div>
    )
}
export default AgsSlider;
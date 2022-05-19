import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ModalVideo from 'react-modal-video';
import { constants } from '../../utils/constants';


const VideotesTimonial = ({ videotestimonialData, title, isArabic, language }) => {
    const [openVideo, setOpenVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [loadItems, setLoadItems] = useState(4);

    return (
        <section className="event gym team-sec speaker set-relative AgsSlider" id="speaker">
            <h3 className="oftHeading"
                style={{
                    color: "#2E2E2E"
                }}
            >
                {title}
            </h3>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    {videotestimonialData.slice(0, loadItems).map((data, i) => {
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
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <ModalVideo
                youtube={{
                    autoplay: 1,
                    mute: 1
                }}
                isOpen={openVideo}
                videoId={videotestimonialData[currentIndex]?.video_link?.split("/")[3]}
                onClose={() => setOpenVideo(false)}
            />

            {
                videotestimonialData.length >= 4 && loadItems != videotestimonialData.length &&
                <center>
                    <button className='otfBtn1 mt-5'
                        style={{ border: "1px solid #F58220" }}
                        onClick={() => setLoadItems(videotestimonialData.length)}>
                        {
                            constants?.site_content?.videoTestim_sec?.btn_text[language]
                        }
                    </button>
                </center>
            }
        </section>
    )
}
export default VideotesTimonial;
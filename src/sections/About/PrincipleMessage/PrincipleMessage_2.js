import { React, useState } from 'react';
import vid_bg_img from "../../../assets/images/about/PrincipalMessageThumbnail.jpg";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Container } from "react-bootstrap";

const PrincipleMessage = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="PrincipleMessage">
            <h3 className="Title">PRINCIPAL'S MESSAGE</h3>
            <Container>
                <div className="d-flex justify-content-center align-items-center imgheight"
                    style={{ backgroundImage: `url(${vid_bg_img})` }}
                >
                    <div className="video-promo-content mt-4 ">
                        <ModalVideo channel='youtube' youtube={{ autoplay: 1, mute: 1 }} isOpen={isOpen} videoId="AmLy5qM7dEI" onClose={() => setOpen(false)} />
                        <button className="btn video-play-icon" onClick={() => setOpen(true)}>
                            <PlayArrowIcon className={"playSize"} />
                        </button>
                    </div>
                </div>
                <hr className="principalmsgHr" />

                <div className="sucessDiv">
                    <p className={"subtitle"}>
                        Hello everyone,<br />
                        My name is Larry Savery, Principal of the American Gulf School in Sharjah, and it gives me great pleasure to welcome all of our students to the inaugural academic year at the American Gulf School of Sharjah.
                        I hope the summer break has given you an opportunity to relax and to connect with your respective families and friends in meaningful ways.
                        At the American Gulf School (AGS), our core values are much more than just the delivery of information, and more about delving deeper into the potential that each and every one of you possesses. Our purpose is to inspire inner development, critical thinking, teamwork, and leadership. AGS will provide you with the starting point to grow and develop in a range of environments which include academic, sport, creative arts, and technology. It is our mission to be the catalyst to your personal development and future successes.
                        I am incredibly privileged to undertake this new journey with you, and along with our dedicated team of teaching professionals and staff, we hope you will be a mainstay in the American Gulf School family for years to come.
                        <p className={"text-right"} style={{ fontSize: "13px" }}>Larry Savery, Principal of the American Gulf School</p>
                    </p>

                </div>
            </Container>
        </div>
    );
};

export default PrincipleMessage;
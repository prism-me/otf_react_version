import React, { useState } from 'react'
import { Container } from 'reactstrap'
import Documents from '../../components/Modals/Documents/Documents';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Counter = ({ title, subtitle, btntext, bgImg }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="gym counter rightAnimation  bg-img3 bg1"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('${bgImg}')` }}
        >
            <div className="animated-bg"><i></i><i></i><i></i></div>

            <Container>
                <div className="text-center">
                    <h3 className="text-white oftHeading mb-4">
                        {title}
                    </h3>
                    <p className="text-white text-center mb-5 oftsubHeading">
                        {subtitle}
                    </p>
                    <ul className="d-flex footer-social social">
                        <li className="footer-social-list">
                            <a href="https://www.instagram.com/orangetheory/" target={"_blank"}>
                                <InstagramIcon />
                            </a>
                        </li>
                        <li className="footer-social-list">
                            <a href="https://www.facebook.com/OrangetheoryFitness/" target={"_blank"}>
                                <FacebookIcon />
                            </a>
                        </li>
                        <li className="footer-social-list">
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHB6rwn1JfoIwAAAYADKMRIRbmDSr01qAQt0NDCj3xmyxOni_Oals07utfzDUhFAPsFqL1Uo6pXz5uaI_6j7n11OuWi6OI229bWFL4oQbuTC8F8tvpELsBNAgd2UFDtJi4LsY0=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Forangetheory-fitness" target={"_blank"}>
                                <LinkedInIcon />
                            </a>
                        </li>
                        <li className="footer-social-list">
                            <a href="https://twitter.com/orangetheory" target={"_blank"}>
                                <TwitterIcon />
                            </a>
                        </li>
                    </ul>
                    <button className="otfBtn1"
                        onClick={() => setShowModal(true)}
                    >
                        {btntext}
                    </button>
                    <Documents
                        show={showModal} onHide={() => setShowModal(false)}
                    />
                </div>
            </Container>
        </section>
    )
}

export default Counter;
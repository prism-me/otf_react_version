import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import { Container, Row, Col } from 'reactstrap'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

//images
import footerlogo from "../../assets/images/OTF/logo/footer_logo.png"
import GooglePlay from "../../assets/images/OTF/logo/GooglePlay.png"
import AppStore from "../../assets/images/OTF/logo/AppStore.png"


const Footer = (props) => {
  const { global } = props;

  return (
    <Fragment>
      <footer className="gym footer2">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="set-first">
              {/* <div className="logo-sec"> */}
              <div className="footer-contant">
                <img alt="" className="img-fluid footer-logo mb-0" src={footerlogo} />
                <div className="d-flex justify-content-between align-items-start DappSection">
                  {/* <div className="logo-sec">
                    <div className='mblappspace'>
                      <p className='mb-2'
                        style={{ fontSize: "16px" }}
                      >Follow us on Social Media</p>
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
                    </div>
                  </div>
                  <div>
                    <p className='mb-2'
                      style={{ fontSize: "16px" }}
                    >Download Our App</p>
                    <ul className="d-flex footer-social social">
                      <li className="footer-social-list">
                        <a href="https://www.instagram.com/orangetheory/" target={"_blank"}>
                          <img src={GooglePlay} alt="logo" className='mr-3' />
                        </a>
                      </li>
                      <li className="footer-social-list">
                        <a href="https://www.facebook.com/OrangetheoryFitness/" target={"_blank"}>
                          <img src={AppStore} alt="logo" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  {/* </div> */}

                  {/* <div className='mt-5'>
                    <p className='mb-2'
                      style={{ fontSize: "16px" }}
                    >Follow us on Social Media</p>
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
                  </div> */}
                </div>
              </div>
            </Col>
            {/* <Col lg="3" md="3" sm="12">
              <div className="footer-contant">
                <div>
                  <ul className="footer-lists">
                    <li>
                      <a href="#">Select You Locations</a>
                    </li>
                    <li>
                      <a href="/page/about-us?#mission">Our Mission, Vision, & Values</a>
                    </li>
                    <li>
                      <a href={`/${global.activeLanguage}/press`}>Press</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href={`/${global.activeLanguage}/articles`} className='active'>Articles</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col> */}
            <Col lg="3" md="3" sm="12">
              <div className="footer-contant">
                <div>
                  <ul className="footer-lists">
                    <li>
                      <Link to="#">Select You Locations</Link>
                    </li>
                    <li>
                      <Link to={`/${global.activeLanguage}/about?#mission`}>Our Mission, Vision, & Values</Link>
                    </li>
                    <li>
                      <Link to={`/${global.activeLanguage}/press`}>Press</Link>
                    </li>
                    <li>
                      <Link to={`/${global.activeLanguage}/offers`}>Offers</Link>
                    </li>
                    <li>
                      <Link to={`/${global.activeLanguage}/faq`}>FAQ's</Link>
                    </li>
                    <li>
                      <Link to="#">Jobs</Link>
                    </li>
                    <li>
                      <Link to={`/${global.activeLanguage}/articles`} className='active'>Articles</Link>
                    </li>
                    <li>
                      <Link to="#">Promotion Terms</Link>
                    </li>
                    <li>
                      <Link to="#">Do not sell my information</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="12">
              <div className="footer-para">
                <p className="para-address">
                  <LocationOnIcon className="mr-2 paraIcons" />
                  <strong>
                    Orangetheory Fitness
                    Mercato Mall - Level 1
                  </strong>
                  <br />
                  <span style={{ fontWeight: "300" }}>
                    Jumeirah Beach Road, Dubai
                    United Arab Emirates
                  </span>
                </p>
                <p className="para-address mt-2">
                  <PhoneIcon className="mr-2 paraIcons" />
                  <a href='tel:+9714 340 1040'>
                    +9714 340 1040
                  </a>
                </p>
                <p className="para-address mt-3">
                  <LocationOnIcon className="mr-2 paraIcons" />
                  <strong>
                    Times Square Centre - Ground Floor
                  </strong>
                  <br />
                  <span style={{ fontWeight: "300" }}>
                    Sheikh Zayed Road, Dubai
                    United Arab Emirates
                  </span>
                </p>
                <p className="para-address mt-2">
                  <PhoneIcon className="mr-2 paraIcons" />
                  <a href='tel:+9714 340 1040'>
                    +9714 340 1040
                  </a>
                </p>
              </div>
            </Col>
            <Col sm={12} className="d-flex DappSection">
              <div className="logo-sec">
                <div className='mr-5 footer-contant mblappspace'>
                  <p className='mb-2'
                    style={{ fontSize: "16px" }}
                  >Follow us on Social Media</p>
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
                </div>
              </div>
              <div>
                <p className='mb-2'
                  style={{ fontSize: "16px" }}
                >Download Our App</p>
                <ul className="d-flex footer-social social">
                  <li className="footer-social-list">
                    <a href="https://www.instagram.com/orangetheory/" target={"_blank"}>
                      <img src={GooglePlay} alt="logo" className='mr-3' />
                    </a>
                  </li>
                  <li className="footer-social-list">
                    <a href="https://www.facebook.com/OrangetheoryFitness/" target={"_blank"}>
                      <img src={AppStore} alt="logo" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="gym copyright text-center">
        <Container>
          © <Link className="copyright-text" to="/">Orangetheoryfitness</Link> | <Link className="copyright-text " to={`/${global.activeLanguage}/terms-of-use`}>Terms of use </Link> | <Link className="copyright-text" to={`/${global.activeLanguage}/privacy-policy`}>Privacy Policy</Link> | Designed and Managed by <a className="copyright-text" href="https://www.prism-me.com/" target={"_blank"}>Prism Digital.</a>
        </Container>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    showSpinner: state?.globalReducer?.showSpinner,
    global: state.globalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
import React from "react";
import Container from "@material-ui/core/Container";
import { Col, Row } from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function FooterBottom(props) {
  return (
    <div className="footer-bottom">
      <Container>
        <Row className="">
          <Col sm={6} xs={12} md={6} lg >
            <p className={props.language === "ar" ? "copyRight text-right" : "copyRight text-left"} >
              {props.language === "ar" ?
                <p>
                  الطبع والنشر © <a href="/">المدرسة الأمريكيّة الخليجيّة</a> - ٢٠٢١ | تم الإنشاء بواسطة<a href="https://www.prism-me.com/"> بريزم ديجيتال</a>
                </p>
                : <p>
                  Copyright By <a href="/">@American Gulf School</a> - 2021 | Powered By <a href="https://www.prism-me.com/"> Prism Digital </a>
                </p>
              }
            </p>
          </Col>
          <Col sm={6} xs={12} md={6} lg>
            <p className={props.language === "ar" ? "socialIcon text-left" : "socialIcon text-right"}>
              {/* <span className="mt-2">SOCIAL</span> */}
              <a href="https://www.facebook.com/American-Gulf-School-Sharjah-106277764954110" className={"footericonsize"} target="_blank">
                <FacebookIcon />
              </a>
              <a href="mailto:admissions@ags.ae" className={"footericonsize"}>
                <MailOutlineIcon />
              </a>
              <a href="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618" className={"footericonsize"} target="_blank">
                <LocationOnIcon />
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFmCcDlQ1gXZAAAAXwsFxY43sOt4cYab_4gAvY6oE1xWq3uaDQKZNL_mZjiN84VWH918aUvSOxZvlRF3Tcw8L-OTOg52iUs6gq9t3IX9h8f4seCgDit8xUABkKWId9PhKDaTNI=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Famerican-gulf-school-sharjah%2F" className={"footericonsize"} target="_blank">
                <LinkedInIcon />
              </a>
              <a href="https://www.instagram.com/ags_shj/?hl=en" className={"footericonsize"} target="_blank">
                <InstagramIcon />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterBottom;
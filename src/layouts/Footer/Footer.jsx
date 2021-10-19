import React from "react";
import Container from "@material-ui/core/Container";
import { Col, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { HashLink } from "react-router-hash-link";
import logo from "./../../assets/images/agslogo/Logo (1).png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import FooterBottom from "./FooterBottom";
import { Hidden } from "@material-ui/core";

function Footer(props) {
  const { global } = props;
  const history = useHistory();
  const scrollToBottom1 = () => {
    const bottomEle = document.getElementById("calenderDiv");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className={"footer-Wrape"}>
      <footer>
        <Container>
          <Row>
            <Hidden smDown>
              <Col sm={6} xs={12} md={6} lg>
                <div className="d-flex justify-contennt-start align-items-center">
                  <img src={logo} alt="AGS-logo"
                    onClick={() => history.push("/")}
                    className="footerlogo" />
                  <h5
                    className={global.activeLanguage === "en" ? "font-weight-bold FooterHeading ml-2" : "font-weight-bold FooterHeading mr-2"}
                  >
                    {global.activeLanguage === "en" ? "AMERICAN" : "المدرسة "} <br />
                    {global.activeLanguage === "en" ? "GULF SCHOOL" : "الأمريكية الخليجية"}
                    {/* AMERICAN<br />
                  GULF SCHOOL */}
                  </h5>
                </div>
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9867160428666!2d55.562873115012394!3d25.338226783830823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5ef006a4c83%3A0xcf95030e29d9fb7!2sAmerican%20Gulf%20School!5e0!3m2!1sen!2s!4v1632827655730!5m2!1sen!2s"
                    width="100%" style={{ border: "0" }} loading="lazy"></iframe>
                </div>
              </Col>
            </Hidden>
            <Col sm={6} xs={12} md={6} lg>
              <h5 className={"font-weight-bold FooterHeading"}>
                {global.activeLanguage === "en" ? "OUR SCHOOL" : "مدرستنا"}
                {/* OUR SCHOOL */}
              </h5>
              <Nav className="flex-column">
                <LinkContainer to={`/${global.activeLanguage}/about`}>
                  <Nav.Link className=" fdeco">
                    {global.activeLanguage === "en" ? "About Us" : "عن المدرسة"}
                    {/* About us  */}
                  </Nav.Link>
                </LinkContainer>
                <a href="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618?shorturl=1"
                  className=" fdeco text-white text-decoration-none" style={{ paddingTop: "8px" }} target="_blank">
                  {/* <Nav.Link className=" fdeco"> */}
                  {global.activeLanguage === "en" ? "Campus Location" : "موقع المدرسة"}
                  {/* Campus Location  */}
                  {/* </Nav.Link> */}
                </a>
                <LinkContainer to={`/${global.activeLanguage}/OurTeam`}>
                  <Nav.Link className=" fdeco">
                    {global.activeLanguage === "en" ? "Our Team" : "فريق العمل"}
                    {/* Our Team  */}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={`/${global.activeLanguage}/careers`}>
                  <Nav.Link className=" fdeco">
                    {global.activeLanguage === "en" ? "Join Our Team" : "انضم إلينا"}
                    {/* Join Our Team */}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={`/${global.activeLanguage}/FAQ`}>
                  <Nav.Link className=" fdeco">
                    {global.activeLanguage === "en" ? "FAQs" : "الأسئلة الشائعة"}
                    {/* FAQs  */}
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Col>
            <Col sm={6} xs={12} md={6} lg>
              <h5 className={"font-weight-bold FooterHeading"}>
                {global.activeLanguage === "en" ? "ADMISSIONS" : "التقديم"}
                {/* ADMISSIONS */}
              </h5>
              <Nav className="flex-column">
                {/* <LinkContainer to="#"> */}
                {/* <Nav.Link className=" fdeco"> */}
                {/* {global.activeLanguage === "en" ? "Virtual Admissions" : "التقديم الإفتراضي"} */}
                {/* </Nav.Link> */}
                {/* </LinkContainer> */}
                <a href={`/${global.activeLanguage}/OnlineForm`}
                  className=" fdeco text-white text-decoration-none" style={{ paddingTop: "8px" }}
                >
                  {/* <Nav.Link className=" fdeco"> */}
                  {global.activeLanguage === "en" ? "Enroll Online" : "التسجيل عبر الإنترنت"}
                  {/* Enroll Online */}
                  {/* </Nav.Link> */}
                </a>
                {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`}> */}
                <HashLink to={`/${global.activeLanguage}/Enroll` + "#Tuition_Fees"} className={"hashLinkStyling"}>
                  {global.activeLanguage === "en" ? "Tuition Fees" : "الرسوم الدراسية"}
                  {/* Tuition Fees */}
                </HashLink>
                {/* <Nav.Link className=" fdeco"> Tuition Fees</Nav.Link>
                </LinkContainer> */}
                {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`}> */}
                <HashLink to={`/${global.activeLanguage}/Enroll` + "#Request_for_a_callback"} className={"hashLinkStyling"}>
                  {global.activeLanguage === "en" ? "Request for a callback" : "طلب إتصال"}
                  {/* Request for a callback */}
                </HashLink>
                {/* <Nav.Link className=" fdeco"> Request for a callback </Nav.Link>
                </LinkContainer> */}
                {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ENROLL}`}> */}
                <HashLink to={`/${global.activeLanguage}/Enroll` + "#School_Tour"} className={"hashLinkStyling"}>
                  {global.activeLanguage === "en" ? "School Tours" : "أخذ جولة في المدرسة"}
                  {/* School Tours */}
                </HashLink>
                {/* <Nav.Link className=" fdeco"> School Tours</Nav.Link>
                </LinkContainer> */}
              </Nav>
            </Col>
            <Col sm={6} xs={12} md={6} lg>
              <h5 className={"font-weight-bold FooterHeading"}>
                {global.activeLanguage === "en" ? "ACADEMICS" : "الشؤون الأكاديمية"}
                {/* ACADEMICS */}
              </h5>
              <Nav className="flex-column">
                {/* <LinkContainer to={`/${currentLanguageCode}${STRINGS.ROUTES.ACADEMICS}`}
                  onClick={scrollToBottom1}
                > */}
                <HashLink to={`/${global.activeLanguage}/academics` + "#Academic_Calendar"} className={"hashLinkStyling"}>
                  {global.activeLanguage === "en" ? "Academic Calendar" : "التقويم الدراسي"}
                  {/* Academic Calendar */}
                </HashLink>
                {/* <Nav.Link className=" fdeco"> Academic Calendar </Nav.Link> */}
                {/* </LinkContainer> */}
                {/* <LinkContainer to="#"> */}
                <HashLink to={`/${global.activeLanguage}/academics` + "#Our_Curriculum"} className={"hashLinkStyling"}>
                  {global.activeLanguage === "en" ? "Our Curriculum" : "المنهج"}
                  {/* Our Curriculum */}
                </HashLink>
                {/* <Nav.Link className=" fdeco">  Our Curriculum </Nav.Link> */}
                {/* </LinkContainer> */}
                <LinkContainer to={`/${global.activeLanguage}/Student-care`}>
                  <Nav.Link className=" fdeco">
                    {global.activeLanguage === "en" ? "Student Care Support " : "رعاية الطلاب"}
                    {/* Student Care support   */}
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Col>
            <Col sm={6} xs={12} md={6} lg>
              <h5 className={"font-weight-bold FooterHeading"}>
                {global.activeLanguage === "en" ? "CONTACT US" : "للتواصل"}
                {/* Contact Us */}
              </h5>
              <p>
                {global.activeLanguage === "en" ? " Al Rahmaniya Shaghrafah 4 - Sharjah - United Arab Emirates"
                  : "الرحمانية - شغرافة 4 - إمارة الشارقةّ - الإمارات العربية المتحدة"}
                {/* Al Rahmaniya Shaghrafah 4 - Sharjah -
                United Arab Emirates */}
              </p>
              <a href="mailto:Info@ags.ae" className=" text-white fdeco">
                <MailOutlineIcon className="iconSize" /> Info@ags.ae
              </a>
              <p>
                <a href='tel:06-5061111' class="contact-pannel-btn text-decoration-none text-white fdeco">
                  <PhoneIcon className="iconSize" />
                  {global.activeLanguage === "en" ? "06-5061111" : "٥٦١١١١-٠٦"}
                  {/* 06-5061111 */}
                </a>
              </p>
              <p>
                {global.activeLanguage === "en" ? "Working Hours : 7:45 AM - 3:45 PM ( Sunday - Thursday )" :
                  "ساعات العمل: ٧:٤٥ صباحاً - ٣:٤٥ مساءاً (الأحد -الخميس)"}
                {/* Working Hours : 7:45 AM - 3:45 PM ( Sunday - Thursday ) */}
              </p>
            </Col>
          </Row>

        </Container>
        <FooterBottom
          language={global.activeLanguage}
        />
      </footer>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    global: state.globalReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

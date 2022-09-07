import React from "react";
import { Modal, ModalBody, Row, Col, Container } from "reactstrap";
import ClearIcon from "@material-ui/icons/Clear";
import GooglePlay from "../../../assets/images/OTF/logo/GooglePlay.png";
import AppStore from "../../../assets/images/OTF/logo/AppStore.png";
import phone from "../../../assets/images/OTF/phone.png";

const DownloadApp = (props) => {
  return (
    <>
      <Modal isOpen={props.show} className="downloadApp">
        <ModalBody>
          <Container>
            <p className="modalIconWrape">
              <span
                className="modalIconStyle"
                style={{
                  padding: "0.6rem 0.7rem 0.7rem 0.7rem",
                }}
              >
                <ClearIcon onClick={props.onHide} />
              </span>
            </p>
            <Row>
              <Col sm={6} className="downloadcontent">
                <h3 className="offer-subtext">Download Our App</h3>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.orangetheoryfitness.orangetheory&hl=en_IN"
                    target={"_blank"}
                  >
                    <img src={GooglePlay} alt="logo" className="mr-3" />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/orangetheory-fitness/id1424351827"
                    target={"_blank"}
                  >
                    <img src={AppStore} alt="logo" />
                  </a>
                </div>
              </Col>
              <Col
                sm={6}
                style={{
                  background: "#F48221",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <img src={phone} alt="phone" className="img-fluid phoneImg" />
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DownloadApp;

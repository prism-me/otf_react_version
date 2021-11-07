import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ApplyNow = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={
        props.lang === "ar"
          ? "ApplyNow agsModalDirArabic"
          : "ApplyNow agsModalDir"
      }
      style={{ paddingLeft: "0px" }}
    >
      <span className={
        props.lang === "ar"
          ? "modalIconArabic modalIcon"
          : "modalIcon"}
        onClick={props.onHide}>
        <ArrowBackIcon />
      </span>
      <Modal.Body>
        <div className="model_content"
          dangerouslySetInnerHTML={{
            __html:
              props.careerDescription
          }}></div>
      </Modal.Body>
    </Modal>
  );
};

export default ApplyNow;
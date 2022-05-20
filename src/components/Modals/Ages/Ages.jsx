import React from 'react';
import {
    Modal, ModalBody,
    Row, Col, Container
} from 'reactstrap';
import ClearIcon from "@material-ui/icons/Clear";


const Ages = (props) => {

    return (
        <>
            <Modal isOpen={props.show} className="sburning Ages">
                <ModalBody>
                    <Container>
                        <p className='modalIconWrape mt-3'
                            style={{
                                cursor: "pointer"
                            }}
                        >
                            <span className='modalIconStyle'
                                style={{
                                    padding: "0.6rem 0.7rem 0.7rem 0.7rem"
                                }}
                            >
                                <ClearIcon
                                    onClick={props.onHide}
                                />
                            </span>
                        </p>
                        <Row>
                            <Col sm={12} className={"my-3"}>
                                <center>
                                    <img src={props?.img} alt={"img"} className="img-fluid my-3" />
                                </center>

                                <h3 className="offer-subtext mb-0 text-center mt-2">
                                    {props?.title}
                                </h3>
                                <p className='mt-3 offer-detailtext text-justify'
                                    dangerouslySetInnerHTML={{
                                        __html: props?.description
                                    }}
                                >
                                    {/* Experience our workout for free. Please fill out the form and a member of the team will be in touch. */}
                                </p>
                            </Col>
                        </Row>


                    </Container>
                </ModalBody>
            </Modal>
        </>
    );
}

export default Ages;
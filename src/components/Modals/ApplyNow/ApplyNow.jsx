import React from 'react';
import {
  Modal, ModalBody, Form,
  FormGroup,
  Input,
  Row, Col, Container,
  Label
} from 'reactstrap';
import ClearIcon from "@material-ui/icons/Clear";


const ApplyNow = (props) => {

  const location = [
    "Mercato Mall",
    "Times Square Center"
  ];

  return (
    <>
      <Modal isOpen={props.show} className="sburning">
        <ModalBody>
          <Container>
            <p className='modalIconWrape mt-3'>
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
            <Form className='offer-form'>
              <h3 className="offer-subtext mb-0">
                Free Intro Class*
              </h3>
              <p className='mt-3 offer-detailtext'>
                Experience our workout for free. Please fill out the form and a member of the team will be in touch.
              </p>
              <p className='mt-3 offer-detailtext'>
                * All fields are mandatory
              </p>
              <p className='mt-3 mb-2 offer-detailtext'>
                Find Your Location
              </p>
              {/* <FormGroup>
                <Input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="City or Zip Code"
                  className='inputStyle'
                  required
                />
              </FormGroup> */}
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect"
                  className='inputStyle'
                  required
                  style={{ color: "#495057", width: "100%" }}

                >
                  <option style={{ color: "#495057" }}>Select Location</option>
                  {location &&
                    location.length > 0 &&
                    location.map((x) => (
                      <option style={{ color: "#495057" }} key={x}>{x}</option>
                    ))
                  }

                </Input>
              </FormGroup>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="First Name"
                      className='inputStyle'
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="Last Name"
                      className='inputStyle'
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      className='inputStyle'
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className='inputStyle'
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"
                    className='inputStyle'
                  />{' '}
                  Yes I’d like to get updates and
                  offers from Orangetheory Fitness
                  by text.
                </Label>
              </FormGroup>
              <button className="offerBtn px-5 mt-4"
                style={{ border: "1px solid #F58220" }}
              >Submit</button>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ApplyNow;
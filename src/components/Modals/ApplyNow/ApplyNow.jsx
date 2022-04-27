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
    "Times Square Centre"
  ];

  const membershiplist = [
    "Orange Premier",
    "Orange Elite",
    "Orange Basic",
    "Class Packages"
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
                All fields are mandatory unless indicated as optional.
              </p>
              <p className='mt-3 mb-2 offer-detailtext'>
                Find Your Location
              </p>
              <FormGroup>
                <Input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="City or Zip Code"
                  className='inputStyle'
                  required
                />
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
                  Yes! I’d like to get updates and offers from Orangetheory Fitness & my local studio by text.
                  <p className='mt-2 offer-detailtext'>
                    <a href="#"><u>Display and Edit Communications Preferences</u></a>
                  </p>
                </Label>
              </FormGroup>

              <button className="offerBtn px-5 mt-4">Submit</button>
              <p className='mt-3'>
                <small>
                  *Certain restrictions apply. See full <a href="#">
                    <u>
                      <small>
                        Promotion Terms.
                      </small>
                    </u></a>
                </small>
              </p>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ApplyNow;
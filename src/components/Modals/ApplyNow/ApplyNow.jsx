import React, { useState, useEffect } from 'react';
import {
  Modal, ModalBody, Form,
  FormGroup,
  Input,
  Row, Col, Container,
  Label
} from 'reactstrap';
import ClearIcon from "@material-ui/icons/Clear";
import { constants } from '../../../utils/constants';

import { API } from "../../../http/API"
import { Alert } from "react-bootstrap"


const ApplyNow = (props) => {

  // locations API 

  useEffect(() => {
    getAllLocations();
  }, []);

  const [locationsData, setLocationsData] = useState([]);

  const getAllLocations = () => {
    API.get('/locations').then(response => {
      const alllocations = response.data?.data;
      setLocationsData(alllocations);
    })
      .catch(err => {
        console.log(err)
      })
  }

  const defaultState = {
    location: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    get_updates: "",
    type: "book_class_form"
  };


  const [formValues, setFormValues] = useState(defaultState);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedData = { ...formValues };
    setLoading(true);
    API.post("/enquiries", updatedData)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setLoading(false);
          setIsValid(true)
          setFormValues({ ...defaultState });
        }
      })
      .catch((err) => {
        alert("Something went wrong.");
        console.log(err);
      });
  }
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

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
            {isValid &&
              <Alert variant="success"
                onClose={() => {
                  setIsValid(false);
                }}
                dismissible
                className='mt-5'
              >
                {
                  constants?.site_content?.offerform_sec?.submit_text[props?.language]
                }
              </Alert>
            }
            <Form className='offer-form' onSubmit={handleSubmit} dir={`${props?.language === "ar" && 'rtl'}`}>
              <h3 className="offer-subtext mb-0">
                {
                  constants?.site_content?.free_classForm?.title[props?.language]
                }
              </h3>
              <p
                className={`mt-3 offer-detailtext ${props?.language === "ar" && 'text-right'}`}
              >
                {
                  constants?.site_content?.free_classForm?.subtitle[props?.language]
                }
              </p>
              <p
                className={`mt-3 offer-detailtext ${props?.language === "ar" && 'text-right'}`}
              >
                {
                  constants?.site_content?.free_classForm?.form_title[props?.language]
                }
              </p>
              <p
                className={`mt-3 mb-2 offer-detailtext ${props?.language === "ar" && 'text-right'}`}
              >
                {
                  constants?.site_content?.free_classForm?.form_subtitle[props?.language]
                }
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
                <Input type="select" name="location"
                  value={formValues.location}
                  onChange={handleChange}
                  id="exampleSelect"
                  className='inputStyle'
                  required
                  style={{ color: "#495057", width: "100%" }}

                >
                  <option style={{ color: "#495057" }} value="">
                    {
                      constants?.site_content?.offerform_sec?.location[props?.language]
                    }
                  </option>
                  {locationsData &&
                    locationsData.length > 0 &&
                    locationsData.map((x) => (
                      <option style={{ color: "#495057" }} key={x} value={x?.name}>
                        {
                          props?.language === "ar"
                            ? x?.arabic?.name
                            :
                            x?.name
                        }
                      </option>
                    ))
                  }

                </Input>
              </FormGroup>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={formValues.first_name}
                      onChange={handleChange}
                      placeholder={
                        constants?.site_content?.free_classForm?.first_name[props?.language]
                      }
                      className='inputStyle'
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={formValues.last_name}
                      onChange={handleChange}
                      placeholder={
                        constants?.site_content?.free_classForm?.last_name[props?.language]
                      }
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
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder={
                        constants?.site_content?.free_classForm?.phone_number[props?.language]
                      }
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
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder={
                        constants?.site_content?.free_classForm?.email[props?.language]
                      }
                      className='inputStyle'
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Label check
                  className={`${props?.language === "ar" && 'text-right'}`}
                >
                  <Input type="checkbox"
                    className='inputStyle'
                    value="Yes I’d like to get updates and
                    offers from Orangetheory Fitness
                    by text."
                    id="get_updates"
                    onClick={handleChange}
                    name="get_updates"
                  />
                  <span className={`${props?.language === "ar" && 'pr-4'}`}>
                    {
                      constants?.site_content?.free_classForm?.checkbox_text[props?.language]
                    }
                  </span>
                </Label>
              </FormGroup>
              {
                loading ?
                  <div className="loader"
                    style={{
                      borderTopColor: "#2E2E2E",
                      borderRightColor: "#2E2E2E",
                      borderBottomColor: "#2E2E2E",
                      borderLeftColor: "#F58220",
                      width: "sm" ? "6em" : "md" ? "10em" : "10em",
                      height: "sm" ? "6em" : "md" ? "10em" : "10em",
                    }}
                  />
                  :
                  <button className="offerBtn px-5 mt-4"
                    style={{ border: "1px solid #F58220" }}
                  >
                    {
                      constants?.site_content?.offerform_sec?.submit_btn[props?.language]
                    }
                  </button>
              }

            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ApplyNow;
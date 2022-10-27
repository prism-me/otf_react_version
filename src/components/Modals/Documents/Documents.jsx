import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";
import ClearIcon from "@material-ui/icons/Clear";
import { API } from "../../../http/API";
import { Alert } from "react-bootstrap";

const Documents = (props) => {
  // locations API

  useEffect(() => {
    getAllLocations();
    getAllMemberships();
  }, []);

  const [locationsData, setLocationsData] = useState([]);

  const getAllLocations = () => {
    API.get("/locations")
      .then((response) => {
        const alllocations = response.data?.data;
        setLocationsData(alllocations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // memberships API
  const [membershipsData, setMembershipsData] = useState([]);

  const getAllMemberships = () => {
    API.get("/memberships")
      .then((response) => {
        const allmemberships = response.data?.data;
        setMembershipsData(allmemberships);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const defaultState = {
    first_name: "",
    email: "",
    phone: "",
    location: "",
    membership_package: "",
    type: "membership_form",
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
          setIsValid(true);
          setFormValues({ ...defaultState });
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong.");
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Modal isOpen={props.show} className="sburning">
        <ModalBody>
          <Container>
            <p className="modalIconWrape mt-3">
              <span
                className="modalIconStyle"
                style={{
                  padding: "0.6rem 0.7rem 0.7rem 0.7rem",
                }}
              >
                <ClearIcon onClick={props.onHide} />
              </span>
            </p>
            {isValid && (
              <Alert
                variant="success"
                onClose={() => {
                  setIsValid(false);
                }}
                dismissible
                className="mt-5"
              >
                Data Submitted Successfuly!
              </Alert>
            )}
            <Form className="offer-form" onSubmit={handleSubmit}>
              <h3 className="offer-subtext">{props.title}</h3>
              <FormGroup>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Full name"
                  value={formValues.first_name}
                  onChange={handleChange}
                  className="inputStyle"
                  required
                />
              </FormGroup>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="inputStyle"
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
                      placeholder="Phone number"
                      className="inputStyle"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  type="select"
                  name="location"
                  id="exampleSelect"
                  className="inputStyle"
                  required
                  value={formValues.location}
                  onChange={handleChange}
                  style={{ color: "#495057", width: "100%" }}
                >
                  <option style={{ color: "#495057" }} value="">
                    Select Location
                  </option>
                  {locationsData &&
                    locationsData.length > 0 &&
                    locationsData.map((x, i) => (
                      <option
                        style={{ color: "#495057" }}
                        key={i}
                        value={x?.name}
                      >
                        {props?.language === "ar" ? x?.arabic?.name : x?.name}
                      </option>
                    ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  type="select"
                  name="membership_package"
                  id="exampleSelect"
                  className="inputStyle"
                  required
                  value={formValues.membership_package}
                  onChange={handleChange}
                  style={{ color: "#495057", width: "100%" }}
                >
                  <option style={{ color: "#495057" }} value="">
                    Select Membership Package
                  </option>
                  {membershipsData &&
                    membershipsData.length > 0 &&
                    membershipsData.map((x, i) => (
                      <option
                        style={{ color: "#495057" }}
                        key={i}
                        value={x?.name}
                      >
                        {props?.language === "ar" ? x?.arabic?.name : x?.name}
                      </option>
                    ))}
                </Input>
              </FormGroup>
              {loading ? (
                <div
                  className="loader"
                  style={{
                    borderTopColor: "#2E2E2E",
                    borderRightColor: "#2E2E2E",
                    borderBottomColor: "#2E2E2E",
                    borderLeftColor: "#F58220",
                    width: "sm" ? "6em" : "md" ? "10em" : "10em",
                    height: "sm" ? "6em" : "md" ? "10em" : "10em",
                  }}
                />
              ) : (
                <button
                  className="offerBtn px-5 mt-3"
                  style={{ border: "1px solid #F58220" }}
                >
                  Submit
                </button>
              )}
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Documents;

import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { API } from "../http/API";
import { Alert } from "react-bootstrap";

const NewsLetter = ({}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [alertData, setAlertData] = useState({
    varient: "success",
    alertText: "",
    show: false,
  });

  const sendEmail = () => {
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setAlertData({
        varient: "danger",
        alertText: "Valid Email is Required",
        show: true,
      });
      return false;
    }

    let data = {
      email: email,
      type: "subscription_form",
    };
    setLoading(true);
    API.post("/enquiries", data)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setAlertData({
            varient: "success",
            show: true,
            alertText: "Email Recieved Successfully",
            permission: false,
          });
          setLoading(false);
          setEmail("");
        }
      })

      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="sidebar-container">
      <h5 className="blog-title">newsletter</h5>

      <Form>
        <Form.Group>
          <InputGroup
            style={{
              boxShadow: "0px 4px 15px rgb(0 0 0 / 14%)",
            }}
          >
            <Form.Control
              type="email"
              placeholder="enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "#FFFFFF",
                border: "1px solid grey",
                borderRight: "0",
                borderRadius: "0",
                marginRight: "0",
                boxShadow: "none",
              }}
            />
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{
                  background: "#FFFFFF",
                  border: "1px solid grey",
                  borderRadius: "0",
                  borderLeft: "0",
                  cursor: "pointer",
                }}
                onClick={sendEmail}
              >
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
                  <i aria-hidden="true" className="fa fa-paper-plane"></i>
                )}
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Form.Group>
        <Alert
          variant={alertData.varient}
          show={alertData.show}
          onClose={() => setAlertData({ ...alertData, show: false })}
          dismissible
        >
          {alertData.alertText}
        </Alert>
      </Form>
    </div>
  );
};

export default NewsLetter;

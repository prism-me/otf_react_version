import React, { useEffect, useState } from "react";
import location_icon from "../../assets/images/contact/map-pin.png";
import phone_icon from "../../assets/images/contact/phone.png";
import email_icon from "../../assets/images/contact/mail.png";
import bg_img from "../../assets/images/agsbanners/contactUs.png";
import bg_img_arabic from "../../assets/images/agsbanners/ContactUsArabic.png";
import { STRINGS } from "../../utils/base";
import { API } from "../../http/API";
import SnackBar from "../../components/SnackBar/SnackBar";
import Spinner from "../../components/Spinner/Spinner";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { constants } from "../../utils/constants";

const defaultState = {
  isRequestPending: false,
  isOpen: false,
  message: "",
  variant: "",
  name: "",
  email: "",
  phone: "",
  _message: "",
};

const Contact = (props) => {
  const [init, setInit] = useState(defaultState);
  let {
    name,
    email,
    phone,
    _message,
    isRequestPending,
    isOpen,
    message,
    variant,
  } = init;

  const validation = (obj) => {
    let valid = { error: true, message: "" };
    let emailRegex = STRINGS.REGEX.EMAIL;

    if (obj.email === "") {
      valid.error = false;
      valid.message += valid.message
        ? `\n${constants?.site_content?.waitlist?.email_req[props.language]}`
        : `${constants?.site_content?.waitlist?.email_req[props.language]}`;
    } else if (!emailRegex.test(obj.email)) {
      valid.error = false;
      valid.message += valid.message
        ? `\n${obj.email} is not a valid email`
        : `${obj.email} is not a valid email`;
    }
    if (obj.name === "") {
      valid.error = false;
      valid.message += valid.message
        ? `\n${constants?.site_content?.waitlist?.name_req[props.language]}`
        : `${constants?.site_content?.waitlist?.name_req[props.language]}`;
    }
    if (obj.phone === "") {
      valid.error = false;
      valid.message += valid.message
        ? `\n${constants?.site_content?.contact_us?.numb_req[props.language]}`
        : `${constants?.site_content?.contact_us?.numb_req[props.language]}`;
    }
    if (obj._message === "") {
      valid.error = false;
      valid.message += valid.message
        ? `\n${constants?.site_content?.contact_us?.msg_req[props.language]}`
        : `${constants?.site_content?.contact_us?.msg_req[props.language]}`;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validate = validation(init);
    if (validate.error) {
      let inputData = {
        name: init.name,
        email: init.email,
        phone: init.phone,
        message: init._message,
        flag: "contact_form",
      };
      setInit({
        ...init,
        isRequestPending: true,
      });

      API.post("contact_form", inputData).then((res) => {
        if (res.status === STRINGS.REQUEST_STATUS) {
          setInit({
            ...init,
            isRequestPending: false,
            name: "",
            email: "",
            phone: "",
            _message: "",
            isOpen: true,
            message: res.data.message,
            variant: "success",
          });
        } else {
          setInit({
            ...init,
            isRequestPending: false,
            isOpen: true,
            message: res.data.message,
            variant: "error",
          });
        }
      });
    } else {
      setInit({
        ...init,
        isOpen: true,
        message: validate.message,
      });
    }
  };

  const cancelSnackBar = () => {
    setInit({
      ...init,
      isOpen: false,
    });
  };

  const handleChange = (e) => {
    setInit({
      ...init,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-main">
      <SnackBar
        isOpen={isOpen}
        message={message}
        variant={variant}
        onClose={cancelSnackBar}
      />
      <div className="contact-sec">
        <div className="contact-card-holder">
          <div
            className={
              props.language === "ar"
                ? "contact-card contact-cardArabic"
                : "contact-card"
            }
          >
            <div className="card-head">
              <div className="heading">
                {constants?.site_content?.contact_us?.title[props.language]}
                {/* Contact Us */}
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="inp-group">
                  <div className="inp">
                    <input
                      name={"name"}
                      onChange={handleChange}
                      value={name}
                      type={"text"}
                      className="inp-text"
                      placeholder={
                        constants?.site_content?.contact_us?.name[
                          props.language
                        ]
                      }
                    />
                  </div>
                  <div className="inp">
                    <input
                      name={"phone"}
                      onChange={handleChange}
                      value={phone}
                      type={"number"}
                      className="inp-text"
                      placeholder={
                        constants?.site_content?.contact_us?.phone[
                          props.language
                        ]
                      }
                    />
                  </div>
                  <div className="inp">
                    <input
                      name={"email"}
                      onChange={handleChange}
                      value={email}
                      type={"text"}
                      className="inp-text"
                      placeholder={
                        constants?.site_content?.contact_us?.email[
                          props.language
                        ]
                      }
                    />
                  </div>
                  <div className="inp">
                    <textarea
                      name={"_message"}
                      onChange={handleChange}
                      value={_message}
                      rows={4}
                      className="inp-text"
                      placeholder={
                        constants?.site_content?.contact_us?.msg[props.language]
                      }
                    />
                  </div>
                  <div className="inp-btn">
                    {!isRequestPending ? (
                      <button className="btn" onClick={handleSubmit}>
                        {
                          constants?.site_content?.contact_us?.send[
                            props.language
                          ]
                        }
                        {/* Send */}
                      </button>
                    ) : (
                      <Spinner
                        color2={"#1a2c52"}
                        color1={"white"}
                        size={"sm"}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-foot">
              <div className="address-label">
                <div className="icon">
                  <a
                    href="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618"
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    <img alt={"#"} src={location_icon} />
                  </a>
                </div>
                <div className="text">
                  <p>
                    {constants?.site_content?.contact_us?.addr[props.language]}
                    {/* Al Rahmaniya Shaghrafah 4 - Sharjah - United Arab Emirates */}
                  </p>
                </div>
              </div>
              <div className="info-group">
                <div className="info-item">
                  <div className="txt">
                    <p>
                      {
                        constants?.site_content?.contact_us?.admission[
                          props.language
                        ]
                      }
                      {/* For Admissions */}
                    </p>
                  </div>
                  <div className="icon-txt-hld">
                    <div className="icon">
                      <img alt={"#"} src={phone_icon} />
                    </div>
                    <div className="txt">
                      <a
                        href="tel: 05-69990871"
                        className="text-decoration-none text-white"
                      >
                        {props.language === "en" ? "05-69990871" : "٠٥٦٩٩٩٠٨٧١"}
                        {/* 05-69990871 */}
                      </a>
                    </div>
                  </div>
                  <div className="icon-txt-hld">
                    <div className="icon">
                      <img alt={"#"} src={email_icon} />
                    </div>
                    <div className="txt">
                      <a
                        href="mailto:admissions@ags.ae"
                        className="text-decoration-none text-white"
                      >
                        {" "}
                        admissions@ags.ae
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="txt">
                    <p>
                      {
                        constants?.site_content?.contact_us?.help_desk[
                          props.language
                        ]
                      }
                      {/* Help Desk & Queries */}
                    </p>
                  </div>
                  <div className="icon-txt-hld">
                    <div className="icon">
                      <img alt={"#"} src={phone_icon} />
                    </div>
                    <div className="txt">
                      <a
                        href="tel:06-5061111"
                        className="text-decoration-none text-white"
                      >
                        {props.language === "en" ? "06-5061111" : "٥٦١١١١-٠٦"}
                        {/* 06-5061111 */}
                      </a>
                    </div>
                  </div>
                  <div className="icon-txt-hld">
                    <div className="icon">
                      <img alt={"#"} src={email_icon} />
                    </div>
                    <div className="txt">
                      <a
                        href="mailto:info@ags.ae"
                        className="text-decoration-none text-white"
                      >
                        info@ags.ae
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info-item ic">
                  <div className="icon-txt-hld ic">
                    <div className="icon">
                      {/* <img alt={"#"} src={youtube_icon} /> */}
                      <a
                        href="https://www.facebook.com/American-Gulf-School-Sharjah-106277764954110"
                        className={"text-white"}
                        target="_blank"
                      >
                        <FacebookIcon />
                      </a>
                    </div>
                    <div className="icon">
                      {/* <img alt={"#"} src={insta_icon} /> */}
                      <a
                        href="mailto:admissions@ags.ae"
                        className={"text-white"}
                      >
                        <MailOutlineIcon />
                      </a>
                    </div>
                    <div className="icon">
                      {/* <img alt={"#"} src={fb_icon} /> */}
                      <a
                        href="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618"
                        className={"text-white"}
                        target="_blank"
                      >
                        <LocationOnIcon />
                      </a>
                    </div>
                    <div className="icon">
                      {/* <img alt={"#"} src={twitter_icon} /> */}
                      <a
                        href="https://www.linkedin.com/company/otfdubai/"
                        className={"text-white"}
                        target="_blank"
                      >
                        <LinkedInIcon />
                      </a>
                    </div>
                    <div className="icon">
                      {/* <img alt={"#"} src={twitter_icon} /> */}
                      <a
                        href="https://www.instagram.com/ags_shj/?hl=en"
                        className={"text-white"}
                        target="_blank"
                      >
                        <InstagramIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-hld">
          <img
            className="sec-bg-img"
            src={props.language === "ar" ? bg_img_arabic : bg_img}
            alt={"#"}
          />
        </div>
      </div>
      <div className="contact-footer">
        <div className="address-map">
          {/* <div className="btn-hld">
                        <button className="btn">Share Location</button>
                    </div> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9867160428666!2d55.562873115012394!3d25.338226783830823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5ef006a4c83%3A0xcf95030e29d9fb7!2sAmerican%20Gulf%20School!5e0!3m2!1sen!2s!4v1632827655730!5m2!1sen!2s"
            width="100%"
            style={{ border: "0" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

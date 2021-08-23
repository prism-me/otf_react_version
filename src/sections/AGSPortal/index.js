import React from 'react';
import ic_email from "../../assets/images/ags-portal/mail-icon.png";
import ic_phone from "../../assets/images/ags-portal/phone-icon.png";
import bg_img from "../../assets/images/ags-portal/bg.png";

const AgsPortalComponent = () => {
    return (
        <div className="ags-portal-main">
            <img alt={"#"} src={bg_img} className='ags-portal-main ' style={{
                visibility:"hidden",position:"absolute",display: "inline-block"
            }} />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12">
                        <div className="ags-p-info">
                            <p>
                                AGS ensured that all stakeholders have access to the portal to stay informed of recent
                                announcements, news, events and updates.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="btn-holder">
                        <div className="btn">
                            <button>Parent Access</button>
                        </div>
                        <div className="btn">
                            <button>Staff Access</button>
                        </div>
                        <div className="btn">
                            <button>Student Access</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footer-info">
                        <div className="info-holder">
                            <div className="txt">
                                <p>For IT support, please contact us at:</p>
                            </div>
                            <div className="email">
                                <div className="icon">
                                    <img alt={"#"} src={ic_email} className="ic-email"/>
                                </div>
                                <div className="txt">helpdesk@ags.ae</div>
                            </div>
                            <div className="phone">
                                <div className="icon">
                                    <img alt={"#"} src={ic_phone} className="ic-phone"/>
                                </div>
                                <div className="txt">050-000000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgsPortalComponent;
import { React, useState } from 'react';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
const Contactpannel = (props) => {
    return (
        <>
            {props?.activeLanguage === "en" ?
                <div
                    className="contact-pannel-main"
                >
                    <div className="contact-number">
                        <a href='tel:06-5061111' className="contact-pannel-btn text-decoration-none"><PhoneOutlinedIcon />
                            {props?.activeLanguage === "en" ? "06-5061111" : "٥٦١١١١-٠٦"}
                            {/* 06-5061111 */}
                        </a>
                    </div>
                </div> : (
                    <div
                        className="contact-pannel-main-Arabic"
                    >
                        <div className="contact-number">
                            <a href='tel:06-5061111' className="contact-pannel-btn text-decoration-none"><PhoneOutlinedIcon />
                                {props?.activeLanguage === "en" ? "06-5061111" : "٥٦١١١١-٠٦"}
                                {/* 06-5061111 */}
                            </a>
                        </div>
                    </div>
                )}

        </>
    );
};

export default Contactpannel;
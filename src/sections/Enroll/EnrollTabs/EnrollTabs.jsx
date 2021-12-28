import React from 'react';
import { Hidden } from "@material-ui/core";
import { constants } from "../../../utils/constants"
import $ from 'jquery';

export default function EnrollTabs(props) {

    $(document).ready(function () {
        $('.TabButton').click(function () {
            $('.TabButton.active').removeClass("active");
            $(this).addClass("active");
        });
    });

    const scrollToBottom1 = () => {
        const bottomEle = document.getElementById("Admissions");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom2 = () => {
        const bottomEle = document.getElementById("Enquiry");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom3 = () => {
        const bottomEle = document.getElementById("Payments");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom4 = () => {
        const bottomEle = document.getElementById("applyOnline");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom5 = () => {
        const bottomEle = document.getElementById("FAQs");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom6 = () => {
        const bottomEle = document.getElementById("Contact");
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <Hidden smDown>
                <div className={"EnrollTabs"}>
                    <div className={"buttons-flex"}>
                        <button className={"TabButton btn-lg active"}
                            onClick={scrollToBottom1}
                        >
                            {
                                constants?.site_content?.enrollTabs?.tab1[
                                props.language
                                ]
                            }
                            {/* Admissions Process */}
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom2}
                        >
                            {
                                constants?.site_content?.enrollTabs?.tab2[
                                props.language
                                ]
                            }
                            {/* Enquiry */}
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom3}
                        >
                            {
                                constants?.site_content?.enrollTabs?.tab3[
                                props.language
                                ]
                            }
                            {/* Fees and Payments */}
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom4}
                        >
                            {
                                constants?.site_content?.enrollTabs?.tab4[
                                props.language
                                ]
                            }
                            {/* Online Application */}
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom5}
                        >
                            {
                                constants?.site_content?.enrollTabs?.tab5[
                                props.language
                                ]
                            }
                            {/* FAQs */}
                        </button>
                        <button className={"TabButton btn-lg"}
                            onClick={scrollToBottom6}
                        >
                            {
                                constants?.site_content?.contact_us?.title[
                                props.language
                                ]
                            }
                            {/* Contact us */}
                        </button>
                    </div>
                </div>
            </Hidden>
            <p className={"EnrollTabTitle"}>
                {props.introSec?.title}
                {/* Thank you for considering joining the American Gulf School family. After conducting a tour with us, please adhere to the below steps for acceptance and registration. */}
            </p>
        </>
    );
}
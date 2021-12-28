import React from 'react';
import { Hidden } from "@material-ui/core";
import { constants } from "../../../utils/constants"
import $ from 'jquery';

export default function ScrollableTabsButtonAuto(props) {

    $(document).ready(function () {
        $('.TabButton').click(function () {
            $('.TabButton.active').removeClass("active");
            $(this).addClass("active");
        });
    });

    const scrollToBottom1 = () => {
        const bottomEle = document.getElementById(0);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom2 = () => {
        const bottomEle = document.getElementById(1);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom3 = () => {
        const bottomEle = document.getElementById(2);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom4 = () => {
        const bottomEle = document.getElementById(3);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToBottom5 = () => {
        const bottomEle = document.getElementById(4);
        bottomEle.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <Hidden smDown>
            <div className={"TabPanel"}>
                <div className={"buttons-flex"}>
                    <button className={"TabButton btn-lg active"}
                        onClick={scrollToBottom1}
                    >
                        {
                            constants?.site_content?.stdTabs?.tab1[
                            props.language
                            ]
                        }
                        {/* Inclusion */}
                    </button>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom2}
                    >
                        {
                            constants?.site_content?.stdTabs?.tab2[
                            props.language
                            ]
                        }
                        {/* Academic Support */}
                    </button>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom3}
                    >
                        {
                            constants?.site_content?.stdTabs?.tab3[
                            props.language
                            ]
                        }
                        {/* School Clinic */}
                    </button>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom4}
                    >
                        {
                            constants?.site_content?.stdTabs?.tab4[
                            props.language
                            ]
                        }
                        {/* Academic Guidance */}
                    </button>
                    <button className={"TabButton btn-lg"}
                        onClick={scrollToBottom5}
                    >
                        {
                            constants?.site_content?.stdTabs?.tab5[
                            props.language
                            ]
                        }
                        {/* Wellbeing */}
                    </button>
                </div>
            </div>
        </Hidden>
    );
}
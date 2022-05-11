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

    return (
        <Hidden smDown>
            <div className={"TabPanel"}>
                <div className={"buttons-flex"}>
                    <button className={"TabButton btn-lg active"}
                    >

                        The Studio
                    </button>
                    <button className={"TabButton btn-lg"}
                    >

                        The First Class
                    </button>
                    <button className={"TabButton btn-lg"}
                    >

                        The Community
                    </button>
                    <button className={"TabButton btn-lg"}
                    >

                        The Workout
                    </button>
                </div>
            </div>
        </Hidden>
    );
}
import React from 'react';
import { Grid } from "@material-ui/core";
import health_bg_img from "../../../assets/images/about/health_.png";
import exp_bg_img from "../../../assets/images/about/exp_bg_img.jpg";

const AGSHealth = () => {
    return (
        <div className="ex-paths ags-heath-main">
            <h3 className="InfoTitle">HEALTH AND SAFETY</h3>
            <div className="ex-content">
                <div className="ex-img-hld" >
                    <img alt={"#"} src={health_bg_img}
                        className="exp-img" />
                </div>
                <div className="text-content">
                    <div className="d-flex txt-c" >
                        <p>American Gulf School believes that the safety of every child is paramount and as such, places immense importance on the health, safety, and wellbeing of all its learners.
                            Here at AGS we have high safety expectations,  which ensure all staff are well aware of child protection, health, and safety.
                            A full-time nurse is on site with a fully functional child friendly, school clinic to help all our learners should they feel ill or in need of medical attention.
                            Our facilities are inspected daily to ensure they are in safe working order, and we have intensive risk assessments in place to ensure the safety of the learners both inside and outside the classroom.
                            We also have detailed and comprehensive policies in place to protect learners, staff, and visitors.We pride ourselves on being fully compliant with the UAE government's Covid directives to ensure our learners, staff, and parents are protected.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AGSHealth;
import React from 'react'
import {
    Container, Row, Col
} from 'reactstrap'
import { constants } from '../../utils/constants';

const Workouteveryone = ({ language }) => {
    return (
        <section className="coaching rightAnimation">

            <div className="animated-bg"><i
                style={{
                    background: "#f5822091",
                    boxShadow: "0 15px 30px 0 #f5822091"
                }}
            ></i>
                <i
                    style={{
                        background: "#f5822091",
                        boxShadow: "0 15px 30px 0 #f5822091"
                    }}
                ></i>
                <i style={{
                    background: "#f5822091",
                    boxShadow: "0 15px 30px 0 #f5822091"
                }}></i>
            </div>

            <Container>
                <h2 className="oftHeading text-center">
                    {
                        constants?.site_content?.offersworkouteveryone_sec?.title[language]
                    }
                </h2>
                <p className="oftsubHeading text-center">
                    {
                        constants?.site_content?.offersworkouteveryone_sec?.subtitle[language]
                    }
                </p>
            </Container>
        </section >
    )
}
export default Workouteveryone
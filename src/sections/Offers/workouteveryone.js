import React from 'react'
import {
    Container, Row, Col
} from 'reactstrap'

const Workouteveryone = () => {
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
                    A Workout for everyone
                </h2>
                <p className="p-light oftsubHeading text-center">
                    Whether you’re an athlete or just starting your fitness journey, Orangetheory is designed for all fitness levels. Our experienced coaches provide options that allow you to safely perform movements that work around any physical issues. Walk, jog, run, or ride, you set your own pace. Well…technically your heart rate does.
                </p>
            </Container>
        </section >
    )
}
export default Workouteveryone
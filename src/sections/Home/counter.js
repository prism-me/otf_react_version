import React from 'react'
import { Container } from 'reactstrap'

const Counter = ({ title, subtitle, btntext, bgImg }) => (
    <section className="gym counter rightAnimation  bg-img3 bg1"
        style={{ backgroundImage: `url('${bgImg}')` }}
    >
        <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <div className="text-center">
                <h3 className="text-white oftHeading mb-4">
                    {title}
                </h3>
                <p className="p-light text-white text-center mb-5 oftsubHeading">
                    {subtitle}
                </p>
                <a className="otfBtn1" href="#">
                    {btntext}
                </a>
            </div>
        </Container>
    </section>
)


export default Counter;
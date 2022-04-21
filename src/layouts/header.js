import React, { useState } from 'react'
import Nav from './nav'
import { Container, Row, Col } from 'reactstrap'
import logo from "./../assets/images/OTF/logo/ot_logo.png";
import { CgMenuLeftAlt } from "react-icons/cg";



const Header = props => {
    const [sidebar, setSidebar] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <>
            <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  `}>
                <Container>
                    <Row>
                        <Col>
                            <nav>
                                <a className="m-r-auto" href="/">
                                    <img alt="" className="img-fluid" src={logo} />
                                </a>
                                <div className="responsive-btn">
                                    <a className="toggle-nav" onClick={clickSidebar} >
                                        <CgMenuLeftAlt className='text-white menuIconstyle' />
                                    </a>
                                </div>
                                <Nav />
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header

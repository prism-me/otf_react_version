import React, { useState, useEffect } from 'react'
import Nav from './nav'
import { Container, Row, Col } from 'reactstrap'
import logo from "./../assets/images/OTF/logo/ot_logo.png";
import { Menu } from '@material-ui/icons';
import { useHistory } from "react-router-dom";



const Header = props => {
    const history = useHistory();

    const [sidebar, setSidebar] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight > 250 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    return (
        <>
            <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll ${history.location.pathname.split('/')[2] === "articles" ? "bg-dark py-2" : ""}`}>
                <Container>
                    <Row>
                        <Col>
                            <nav className={`${stickyClass}`}>
                                <a className="m-r-auto" href="/">
                                    <img alt="" className="img-fluid" src={logo} />
                                </a>
                                <div className="responsive-btn">
                                    <a className="toggle-nav" onClick={clickSidebar} >
                                        <Menu className='text-white menuIconstyle' />
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

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import $ from 'jquery';
import { constants } from '../../utils/constants';

import locationbg from "../../assets/images/OTF/home/locationbg.jpg";

import PhoneIcon from '@material-ui/icons/Phone';


$(document).ready(function () {
    $('.locationDiv').click(function () {
        $('.locationDiv.active').removeClass("active");
        $(this).addClass("active");
    });
});

const Calculate = ({ locationsData, language, isArabic }) => {
    const [mshow, setMShow] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <section className="gym format bg-location p-0" id="bmi">
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} lg={6} className={"BGImgLocation p-0"}
                        style={{ backgroundImage: `url(${locationbg})` }}
                    >
                        <div className={"p-5 mx-5 mb-4 calLocationspacing"}>
                            <h3 className={`${language === "ar" ? "text-right" : 'text-left'} oftHeading `}>
                                {
                                    constants?.site_content?.loca_sec?.title[language]
                                }
                            </h3>
                            <Container>
                                {
                                    locationsData?.map((x, i) => (
                                        <Row className={`locationDiv ${currentIndex === i ? 'active' : ''}`}
                                            onClick={() => {
                                                setCurrentIndex(i);
                                                setMShow(true);
                                            }}
                                            key={i}
                                        >
                                            <Col sm={8}>
                                                <h4 className='locationHeading'>
                                                    {
                                                        isArabic
                                                            ? x?.arabic?.name
                                                            : x?.name
                                                    }
                                                </h4>
                                                <p className='locationsubHeading'>
                                                    {
                                                        isArabic
                                                            ? x?.arabic?.address
                                                            : x?.address
                                                    } <br />
                                                    {
                                                        constants?.site_content?.loca_sec?.cont_text[language]
                                                    } <a href={`tel:${x?.phone}`}>
                                                        {
                                                            isArabic
                                                                ? x?.arabic?.phone
                                                                : x?.phone
                                                        }
                                                    </a>
                                                </p>
                                            </Col>
                                            <Col sm={4} className={"d-flex justify-content-center align-items-center"}>
                                                <a href={`tel:${x?.phone}`} className="iconstyelLocation">
                                                    <PhoneIcon />
                                                </a>
                                            </Col>
                                        </Row>
                                    ))
                                }
                            </Container>

                        </div>
                    </Col>
                    {
                        mshow &&
                        <Col sm={12} md={6} lg={6} className={"p-0 mapstylembl"}>
                            <iframe src={locationsData[currentIndex]?.map_url}
                                width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    }
                    {
                        !mshow &&
                        <Col sm={12} md={6} lg={6} className={"p-0 mapstylembl"}>
                            <iframe src={locationsData[currentIndex]?.map_url}
                                width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Calculate;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { AccessTime } from '@material-ui/icons';

const CardGridWrapper = ({
    className,
    image,
    blogDate,
    place,
    title,
    description,
    readUrl,
    language
}) => {
    const MAX_LENGTH = 130;

    return (
        <div className={className}>
            <div className="blog-agency">
                <Row className="blog-contain pl-0 pr-0">
                    <Col xl="3" lg="4" md="6" className="p-0">
                        <div className=" text-center">
                            <img alt="" className="img-fluid blog-img" src={image} />
                        </div>
                    </Col>
                    <Col xl="9" lg="8" md="6" className="p-0">
                        <div className="img-container center-content">
                            <div className="center-content">
                                <div className="blog-info">
                                    <div className="m-b-20">
                                        <div className="center-text">
                                            {blogDate && <>
                                                {/* <AccessTime className="bloglocIcons" /> */}
                                                {/* <i aria-hidden="true" className="fa fa-clock-o m-r-10"></i> */}
                                                {/* <h6 className="m-r-25 font-blog">{blogDate}</h6>  */}
                                            </>}
                                            {place && <>
                                                {/* <LocationOnIcon className="bloglocIcons" /> */}
                                                {/* <i aria-hidden="true" className="fa fa-map-marker m-r-10"></i> */}
                                                <h6 className="font-blog">{place}</h6> </>}
                                        </div>
                                    </div>
                                    <h5 className="blog-head font-600 mt-3">{title}</h5>
                                    {description.length > MAX_LENGTH ?
                                        (
                                            <p className="para2">
                                                {`${description.substring(0, MAX_LENGTH)} .....`}
                                            </p>
                                        ) :
                                        <p className="para2">{description}</p>
                                    }

                                    {/* <div className="btn-bottom m-t-20">
                                        <Link to={`/${language}/${readUrl}/${title}`} >
                                            <button
                                                style={{
                                                    background: "transparent",
                                                    border: "0",
                                                    borderBottom: "1px solid #F58220",
                                                    color: "#F58220",
                                                    textTransform: "uppercase",
                                                    fontWeight: "700",
                                                    outline: "0"
                                                }}
                                            >read more</button></Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

CardGridWrapper.propTypes = {

    className: PropTypes.string.isRequired,

    image: PropTypes.string.isRequired,

    blogDate: PropTypes.string,

    place: PropTypes.string,

    title: PropTypes.string.isRequired,

    description: PropTypes.string.isRequired,

    readUrl: PropTypes.string.isRequired,
}

export default CardGridWrapper;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { AccessTime, Language } from '@material-ui/icons';
import { constants } from '../utils/constants';


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
                <div className="blog-contain">
                    <img alt="" className="img-fluid" src={image} />
                    <div className="img-container">
                        <div>
                            <div className="blog-info">
                                <div className="m-b-20">
                                    <div className="center-text">
                                        {/* {blogDate && <>
                                            <h6 className="m-r-25 font-blog">{blogDate}</h6> </>} */}
                                        {place && <>
                                            <h6 className="font-blog mb-1">{place}</h6> </>}
                                    </div>
                                </div>
                                <h5 className="blog-head font-600">{title}</h5>
                                {description && description.length > MAX_LENGTH ?
                                    (
                                        <p className="para2">
                                            {`${description.substring(0, MAX_LENGTH)} .....`}
                                        </p>
                                    ) :
                                    <p className="para2">{description}</p>
                                }

                                <div className="btn-bottom m-t-20">
                                    <a href={readUrl} target="_blank">
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
                                        >
                                            {
                                                constants?.site_content?.press_sec?.read_btn[language]
                                            }
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

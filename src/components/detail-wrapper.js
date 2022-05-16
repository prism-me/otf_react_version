import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


import { Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

//images 
// import ArticalDetail from "../assets/images/OTF/articleinner/articaldetail.jpg";

import playicon from "../assets/images/OTF/icons/playicon.png";

import art1 from "../assets/images/OTF/articles/art1.png";
import art2 from "../assets/images/OTF/articles/art2.png";

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        }
    ]
};

const ImageWrapper = ({ featureImage }) => (
    <div className="blog-block">
        <div className="blog-box">
            <div className="overflow-hidden">
                <img alt="blog" className="img-fluid blur-up lazyload " src={featureImage} /></div>
        </div>
    </div>
)

const GalleryWrapper = () => (
    <Slider {...settings}>
        <div className="item">
            <div className="border-portfolio">
                <a className="zoom_gallery" data-source="http://500px.com/photo/32736307"
                    href={art1} title="Into The Blue">
                    <img alt="" className="img-fluid blur-up lazyload "
                        src={art1} />
                </a>
            </div>
        </div>
        <div className="item">
            <div className="border-portfolio">
                <a className="zoom_gallery" data-source="http://500px.com/photo/32554131"
                    href={art2}>
                    <img alt="" className="img-fluid blur-up lazyload "
                        src={art2} />
                </a>
            </div>
        </div>
    </Slider>
)

const VideoWrapper = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return (
        <Col md="12" className="m-b-50 p-0">
            <div className="video w-100">
                <a className="button center-content" onClick={toggle}>
                    <img alt="video" className="img-fluid" src={playicon} />
                </a>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                <ModalBody className="iframe-modal">
                    <iframe className="mfp-iframe" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"></iframe>
                </ModalBody>
            </Modal>
        </Col>
    );
}

const DetailWrapper = ({ className, showcaseType, singleArticleData, language, isArabic }) => {
    const Showcase = () => {
        switch (showcaseType) {
            case "Image":
                return <ImageWrapper
                    featureImage={singleArticleData?.featured_img}
                />;
            case "Gallery":
                return <GalleryWrapper />;
            case "Video":
                return <VideoWrapper />;
            default:
                return <ImageWrapper />;
        }
    }

    return (
        <div className={className}>

            {Showcase()}

            <div className="blog-text m-t-20">
                <div className='d-flex justify-content-start align-items-center mb-3'>
                    <h6 className="mr-3">
                        {new Date(singleArticleData?.created_at).toLocaleDateString()}
                    </h6>
                    <h6>
                        <i className="fa fa-user mr-2"></i>
                        {/* By Leslie Barker */}
                        {
                            isArabic
                                ? singleArticleData?.arabic?.author_name
                                : singleArticleData?.author_name
                        }
                    </h6>
                </div>
                <h3 className="oftHeading text-left mb-4 mt-1"
                    style={{
                        color: "#2E2E2E"
                    }}
                >
                    {
                        isArabic
                            ? singleArticleData?.arabic?.title
                            : singleArticleData?.title
                    }
                    {/* Hunkered Down to Keep Coronavirus at Bay? Stay Healthy With 7 Tips to Channel Your Inner Orangetheory Spirit */}
                </h3>
                <div className="blog-divider"></div>
                <div className="blog-description">
                    <p className='oftsubHeading'
                        dangerouslySetInnerHTML={{
                            __html: isArabic
                                ? singleArticleData?.arabic?.long_description
                                : singleArticleData?.long_description
                        }}
                    >
                        {/* Now that our shared world is in the throes of uncertainty and fear, we’d like to continue counting on exercise to sustain us. And, for Orangetheory Fitness members, to continue counting on classmates for camaraderie and sharing. */}
                    </p>

                    {
                        singleArticleData?.author_detail &&
                        <p className='oftsubHeading mb-1 mt-4'>
                            <strong>
                                About the Author
                            </strong>
                        </p>
                    }
                    <p className='oftsubHeading font-italic'
                        dangerouslySetInnerHTML={{
                            __html: isArabic
                                ? singleArticleData?.arabic?.author_detail
                                : singleArticleData?.author_detail
                        }}
                    >
                        {/* <em>
                            Leslie Barker has written about and lived her passion – health and fitness – for decades, most recently as senior writer for The Dallas Morning News. Her essays, tips and ways to find joy in even the simplest of circumstances have inspired couch potatoes to start moving as well as more experienced exercisers to keep moving.
                        </em> */}
                    </p>
                </div>
            </div>
            <a href="https://www.facebook.com/sharer/sharer.php?u=" className={` ${language === "en" ? 'mr-3' : 'ml-3'} `} target={"_blank"}>
                <FacebookIcon />
            </a>
            <a href="https://twitter.com/share?url=" target={"_blank"}>
                <TwitterIcon />
            </a>
        </div >
    )
}
export default DetailWrapper;
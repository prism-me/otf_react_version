import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AccessTime } from '@material-ui/icons';


import { Col, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

//images 
import ArticalDetail from "../assets/images/OTF/articleinner/articaldetail.jpg";

import comment1 from "../assets/images/OTF/articleinner/comment1.png";
import comment2 from "../assets/images/OTF/articleinner/comment2.png";
import comment3 from "../assets/images/OTF/articleinner/comment3.png";
import comment4 from "../assets/images/OTF/articleinner/comment4.png";

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

const ImageWrapper = () => (
    <div className="blog-block">
        <div className="blog-box">
            <div className="overflow-hidden">
                <img alt="blog" className="img-fluid blur-up lazyload " src={ArticalDetail} /></div>
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

const DetailWrapper = ({ className, showcaseType }) => {
    const Showcase = () => {
        switch (showcaseType) {
            case "Image":
                return <ImageWrapper />;
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
                <h6>July, 24th 2019</h6><a href="#">
                    <h3 className="oftHeading text-left mb-4 mt-1"
                        style={{
                            color: "#2E2E2E"
                        }}
                    >
                        Hunkered Down to Keep Coronavirus at Bay? Stay Healthy With 7 Tips to Channel Your Inner Orangetheory Spirit
                    </h3></a>
                <div className="blog-divider"></div>
                <div className="blog-description">
                    <p className='oftsubHeading'>
                        When havoc hits our own personal world, exercise tends to be our lifeboat. We count on it to keep our bodies toned, our spirits high, our minds at ease.
                    </p>
                    <p className='oftsubHeading'>
                        Now that our shared world is in the throes of uncertainty and fear, we’d like to continue counting on exercise to sustain us. And, for Orangetheory Fitness members, to continue counting on classmates for camaraderie and sharing.
                    </p>
                    <p className='oftsubHeading'>

                        But in keeping with guidelines to slow the spread of the coronavirus, many Orangetheory Fitness studios and other gyms around the country have closed. So how can we stay fit — physically, emotionally, mentally?
                    </p>
                    <p className='oftsubHeading'>

                        We’ve come up with 7 ways to do just that.
                    </p>
                    <p className='oftsubHeading'>
                    </p>
                    <p className='oftsubHeading'>
                        <strong>
                            Keep up your workout with Orangetheory’s daily at-home workouts.
                        </strong>
                        If your class is canceled or if you’re not comfortable going to the studio during these precarious times, don’t stop moving.
                    </p>
                    <p className='oftsubHeading'>
                        Natalie Moren works out at OTF in Happy Valley, Ariz. Her elderly parents have compromised immune systems, and she doesn’t want to risk picking up the virus and spreading it to them. So she’s staying away from public places, but not from the workout habit she honed at Orangetheory. For now, she’s working out with weights at home.
                    </p>
                    <p className='oftsubHeading'>

                        Orangetheory is now offering workouts you can do at home with household objects. The 30-minute workouts feature coaches from around the world and are meant to be paired with your favorite tunes in the background. They are updated daily on the website and in the mobile app.
                    </p>
                    <p className='oftsubHeading'>
                        <strong>Keep in touch.</strong> Natalie may not be seeing her “amazing OTF tribe” in person, she says, but she’s staying connected with them via Facebook Messenger, “a group we’ve used for years.” You can also follow your local studio’s Facebook page and “gather” there to cheer each other on.
                    </p>
                    <p className='oftsubHeading'>
                        <strong>Get enough sleep.</strong> Most of us don’t get nearly enough shut-eye, which we need to reduce stress, stay healthy, keep our weight in check, help our muscles recover and do all sorts of things we tend to forget.
                    </p>
                    <p className='oftsubHeading'>
                        If you have a tough time sleeping, which is understandable during these trying times, try to nap, a practice the National Sleep Foundation says is very beneficial. Also, click here for tips on getting a good night’s sleep.
                    </p>
                    <p className='oftsubHeading'>
                        <strong> Breathe.</strong> That may sound obvious, but make sure your breathing is through your nose, and that it’s deep (to the count of four on the inhale and the exhale) and slow.
                    </p>
                    <p className='oftsubHeading'>
                        “This will bring more oxygen to your heart, lungs and brain,” says Jill Murawski, owner of a yoga studio in Richardson, Tex., whose doors have closed until the coronavirus threat has eased. “Breathing allows you to be present, which instills a calmer mind. When we are stressed, our body releases a stress hormone called cortisol; deep breathing helps reverse this.”
                    </p>
                    <p className='oftsubHeading'>
                        <strong> Try yoga.</strong> “If you can breathe,” Jill says, “you can do yoga. When it comes to anxiety and stress, yoga can be magical. When you’re stressed, tension is stored in the body, making you feel tight and often causing pain. Movement and deep breathing help move tension from the body and calm the nervous system.”
                    </p>
                    <p className='oftsubHeading'>
                        Not sure where to start? Try a few of these beginner poses from Yoga Journal.
                    </p>
                    <p className='oftsubHeading'>
                        <strong>Stock your pantry and fridge.</strong> When we’re stressed, we tend to reach for the peanut butter cookies or potato chips or ice cream. But Dallas registered dietitian and culinary nutritionist Robin Plotkin says instead to make sure your food repertoire includes lots of fruits and vegetables — fresh, frozen, freeze-dried and canned.
                    </p>
                    <p className='oftsubHeading'>

                        Carrots, potatoes and onions tend to have a longer shelf life, so are good choices.  Make sure your canned goods include those high in protein such as tuna and beans, and that your frozen food includes fish. Pasta is always good to have on hand, as well as cereal, rice, quinoa and peanut butter.
                    </p>
                    <p className='oftsubHeading'>
                        One caveat: Don’t get carried away. “People have a tendency to overbuy,” she says. Remember, you are stocking extra food — not hoarding.”
                    </p>
                    <p className='oftsubHeading'>
                        Click here for recipes that can be made from ingredients you probably have on hand.
                    </p>
                    <p className='oftsubHeading'>
                        <strong> Write down your feelings.</strong> Putting pen to paper or fingers to keyboard to journal your thoughts and feelings is a powerful coping tool. Plus, when all this is over (which it will be), you can look back and remember what you endured, and how your resilience pulled you through. Click here for more such tips.
                    </p>
                    <p className='oftsubHeading'>
                        <strong>Look ahead.</strong> Remember the situation we’re in won’t last forever. And when it’s time to resume your schedule and your Orangetheory workout, if you’ve followed these guidelines you won’t miss a step.
                    </p>
                    <p className='oftsubHeading'>
                        Natalie says that for now, the online connection with her OTF buddies will have to do, but she’s eager to meet up with everyone in person again.
                    </p>
                    <p className='oftsubHeading'>
                        “Orangetheory is my therapy,” she says, “and I can’t wait to get back there.”
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5>
                            <i className="fa fa-user mr-2"></i>
                            <span>By Leslie Barker</span>
                        </h5>
                        <h5 className="pull-right">10<i className="fa fa-heart ml-1"></i>, 50<i className="fa fa-comments ml-1"></i></h5>
                    </div>

                </div>
            </div>
            {/* <!-- Comment Sec Start --> */}

            <h3 className="oftHeading text-left mb-0 mt-3 mb-1"
                style={{
                    color: "#2E2E2E"
                }}
            >Comments :</h3>
            <div className="comment-list blog_comment"
                style={{
                    padding: "0 0 1rem 0",
                    borderBottom: "1px solid #F58220"
                }}
            >
                <div className="comment_sec">
                    <article className="row">
                        <Col xs="12">
                            <div className="blog_center">
                                <div>
                                    <figure className="thumbnail">
                                        <img alt="" src={comment1} />
                                    </figure>
                                </div>
                                <div className="blog_user arrow left">
                                    <div className="panel-body">
                                        <div className="text-left">
                                            <div className="comment-user"><i className="fa fa-user"></i><h6>That Guy</h6>
                                            </div>
                                            <div className="comment-date">
                                                <AccessTime className="mr-1"
                                                    style={{ fontSize: "16px" }}
                                                />
                                                {/* <i className="fa fa-clock-o"></i> */}
                                                <h6> Dec 16,
                                                    2014 </h6></div>
                                        </div>
                                        <div className="comment-post">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                                            </p>
                                        </div>
                                        <a className="link-btn" href="#"><i className="fa fa-reply pr-2"></i>reply</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </article>
                    {/* <!--Comment Sec Start--> */}
                    <article className="row">
                        <Col xs="11" className="offset-1">
                            <div className="blog_center re_comment">
                                <div>
                                    <figure className="thumbnail">
                                        <img alt="" src={comment2} />
                                    </figure>
                                </div>
                                <div className="blog_user arrow left">
                                    <div className="panel-body">
                                        <div className="text-left">
                                            <div className="comment-user">
                                                <i className="fa fa-user"></i><h6> That Guy </h6>
                                            </div>
                                            <div className="comment-date">
                                                {/* <i className="fa fa-clock-o"></i> */}
                                                <AccessTime className="mr-1"
                                                    style={{ fontSize: "16px" }}
                                                />
                                                <h6> Dec 16, 2014</h6>
                                            </div>
                                        </div>
                                        <div className="comment-post">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            </p>
                                        </div>
                                        <a className="link-btn" href="#"><i className="fa fa-reply pr-2"></i>reply</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </article>
                    {/* <!--Comment Sec End--> */}
                </div>
                <div className="comment_sec">
                    <article className="row">
                        <Col xs="12">
                            <div className="blog_center">
                                <div>
                                    <figure className="thumbnail">
                                        <img alt="" src={comment3} />
                                    </figure>
                                </div>
                                <div className="blog_user arrow left">
                                    <div className="panel-body">
                                        <div className="text-left">
                                            <div className="comment-user">
                                                <i className="fa fa-user"></i><h6> That Guy </h6>
                                            </div>
                                            <div className="comment-date">
                                                {/* <i className="fa fa-clock-o"></i> */}
                                                <AccessTime className="mr-1"
                                                    style={{ fontSize: "16px" }}
                                                />
                                                <h6> Dec 16, 2014</h6>
                                            </div>
                                        </div>
                                        <div className="comment-post">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                        <a className="link-btn" href="#"><i className="fa fa-reply pr-2"></i>reply</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </article>
                </div>
                <div className="comment_sec">
                    <article className="row">
                        <Col xs="12">
                            <div className="blog_center">
                                <div>
                                    <figure className="thumbnail">
                                        <img alt="" src={comment4} />
                                    </figure>
                                </div>
                                <div className="blog_user arrow left">
                                    <div className="panel-body">
                                        <div className="text-left">
                                            <div className="comment-user"><i className="fa fa-user"></i><h6> That Guy </h6>
                                            </div>
                                            <div className="comment-date">
                                                {/* <i className="fa fa-clock-o"></i> */}
                                                <AccessTime className="mr-1"
                                                    style={{ fontSize: "16px" }}
                                                />
                                                <h6> Dec 16,
                                                    2014</h6></div>
                                        </div>
                                        <div className="comment-post">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                        <a className="link-btn" href="#"><i className="fa fa-reply pr-2"></i>reply</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </article>
                </div>
            </div>
            {/* <!-- Comment Sec End --> */}
            <div className="quote_2 comment_form_sec">
                <div className="container">
                    <div className="row">
                        <Col xs="12" className="quote_form">
                            <h3 className="oftHeading text-left mb-0 mt-3 mb-4"
                                style={{
                                    color: "#2E2E2E"
                                }}
                            >Leave you comment :</h3>
                            <Form>
                                <div className="form-row">
                                    <FormGroup className="col-md-6">
                                        <Label>Name</Label>
                                        <Input className="form-control" placeholder="Enter Your Name" required=""
                                            type="text" />
                                    </FormGroup>
                                    <FormGroup className="col-md-6">
                                        <Label htmlFor="inputEmail4">Email</Label>
                                        <Input className="form-control" id="inputEmail4" placeholder="Enter Your Email"
                                            required="" type="email" />
                                    </FormGroup>
                                    <FormGroup className="col-md-12">
                                        <Label htmlFor="exampleTextarea">Message</Label>
                                        <textarea className="form-control msg_coment" id="exampleTextarea" placeholder="Leave a Comment"
                                            required="" rows="3"></textarea>
                                    </FormGroup>
                                </div>
                                <button className="otfBtn1 mt-3 px-5"
                                    style={{ border: "1px solid #F58220" }} >
                                    Post Comment
                                </button>
                            </Form>
                        </Col>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default DetailWrapper;
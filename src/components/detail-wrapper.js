import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


import { Col, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

//images 
import ArticalDetail from "../assets/images/OTF/articleinner/articaldetail.jpg";

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
                <div className='d-flex justify-content-start align-items-center mb-3'>
                    <h6 className="mr-3">July, 24th 2019</h6>
                    <h6>
                        <i className="fa fa-user mr-2"></i>
                        By Leslie Barker
                    </h6>
                </div>
                <h3 className="oftHeading text-left mb-4 mt-1"
                    style={{
                        color: "#2E2E2E"
                    }}
                >
                    Hunkered Down to Keep Coronavirus at Bay? Stay Healthy With 7 Tips to Channel Your Inner Orangetheory Spirit
                </h3>
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
                    <p className='oftsubHeading mb-1 mt-4'>
                        <strong>
                            About the Author
                        </strong>
                    </p>
                    <p className='oftsubHeading'>
                        <em>
                            Leslie Barker has written about and lived her passion – health and fitness – for decades, most recently as senior writer for The Dallas Morning News. Her essays, tips and ways to find joy in even the simplest of circumstances have inspired couch potatoes to start moving as well as more experienced exercisers to keep moving.
                        </em>
                    </p>
                </div>
            </div>
            <a href="https://www.facebook.com/sharer/sharer.php?u=" className="mr-3" target={"_blank"}>
                <FacebookIcon />
            </a>
            <a href="https://twitter.com/share?url=" target={"_blank"}>
                <TwitterIcon />
            </a>
        </div >
    )
}
export default DetailWrapper;
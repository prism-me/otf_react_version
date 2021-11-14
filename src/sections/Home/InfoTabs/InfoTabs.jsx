import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import { Card, Col, Container, Row } from "react-bootstrap";
import ModalVideo from 'react-modal-video';
import { constants } from "../../../utils/constants"
function InfoTabs(props) {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className={"info-tabs"} dir="ltr">
      {console.log("constants?.site_content :: ",constants?.site_content.exp_ags)}
      {console.log("props.language :: ",props.language)}
      <h2 className={"InfoTitle"}>
        {
          props.language === "ar" ? constants?.site_content?.exp_ags.ar : constants?.site_content?.exp_ags.en
        }
        {/* EXPERIENCE THE AGS DIFFERENCE */}
      </h2>
      <Carousel responsive={responsive}
        swipeable={true}
        showDots={true}
        arrows={false}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        draggable={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="listStyle"
      >
        {props.expData.map((slides, index) => (
          // <Col sm={4}>
          <div className={"divstyle"}>
            <div className="d-flex justify-content-center align-items-center imgheight"
              style={{ backgroundImage: `url(${slides.thumbnail})` }}
            >
              <div className="video-promo-content mt-4 ">
                {slides.video_link && (
                  slides.video_link?.length > 0 ?
                    <button className="btn video-play-icon"
                      onClick={() => {
                        setCurrentIndex(index);
                        setOpenVideo(true);
                      }}
                    >
                      <PlayArrowIcon className={"playSize"} />
                    </button>
                    : ""
                )}
                <h5 className={"overview-heading"}>
                  {
                    props.isArabic
                      ? slides?.arabic?.title
                      : slides.title
                  }
                  {/* {slides.title} */}
                </h5>
              </div>
            </div>
          </div>
          // </Col>
        ))
        }
      </Carousel>
      <ModalVideo
        channel='vimeo'
        autoplay={true}
        // vimeo={{
        //   autoplay: 1,
        //   mute: 1
        // }}
        isOpen={openVideo}
        videoId={props.expData[currentIndex]?.video_link?.split("/")[3]}
        onClose={() => setOpenVideo(false)}
      />
    </div>
  )
}

export default InfoTabs;




// import React, { useState } from "react";
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// // import {Card, Col, Container, Row} from "react-bootstrap";
// import ModalVideo from 'react-modal-video'
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { constants } from "../../../utils/constants"

// function InfoTabs(props) {
//   const [openVideo, setOpenVideo] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const options = {
//     loop: true,
//     margin: 10,
//     items: 4,
//     autoplay: true,
//     dots: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       450: {
//         items: 2,
//       },
//       600: {
//         items: 3,
//       },
//       1000: {
//         items: 4,
//       },
//     }
//   };
//   return (
//     <div className={"info-tabs"} dir="ltr">
//       <h2 className={"InfoTitle"}>
//         {
//           constants?.site_content?.exp_ags[
//           props.language
//           ]
//         }
//         {/* EXPERIENCE THE AGS DIFFERENCE */}
//       </h2>
//       <OwlCarousel className="owl-theme" {...options}>
//         {/* <Row> */}

//         {props.expData.map((slides, index) => (
//           // <Col sm={4}>
//           <div className={"divstyle"}>
//             <div className="d-flex justify-content-center align-items-center imgheight"
//               style={{ backgroundImage: `url(${slides.thumbnail})` }}
//             >
//               <div className="video-promo-content mt-4 ">
//                 {slides.video_link && (
//                   slides.video_link?.length > 0 ?
//                     <button className="btn video-play-icon"
//                       onClick={() => {
//                         setCurrentIndex(index);
//                         setOpenVideo(true);
//                       }}
//                     >
//                       <PlayArrowIcon className={"playSize"} />
//                     </button>
//                     : ""
//                 )}
//                 <h5 className={"overview-heading"}>
//                   {
//                     props.isArabic
//                       ? slides?.arabic?.title
//                       : slides.title
//                   }
//                   {/* {slides.title} */}
//                 </h5>
//               </div>
//             </div>
//           </div>
//           // </Col>
//         ))
//         }
//         {/* </Row> */}
//       </OwlCarousel>
//       {/* {
//         console.log("videoLink", props.expData[currentIndex]?.video_link?.split("/")[3])
//       } */}
//       <ModalVideo
//         channel='vimeo'
//         autoplay={true}
//         // vimeo={{
//         //   autoplay: 1,
//         //   mute: 1
//         // }}
//         isOpen={openVideo}
//         videoId={props.expData[currentIndex]?.video_link?.split("/")[3]}
//         onClose={() => setOpenVideo(false)}
//       />
//     </div>
//   )
// }

// export default InfoTabs;

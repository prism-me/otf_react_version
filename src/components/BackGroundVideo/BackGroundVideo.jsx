import React from 'react';

const BackGroundVideo = ({ videoSource, children, blur, videoRef }) => {

    return (
        <div className={"BackgroundDiv"}>
            {/*<div className='container'>*/}
            <video
                // style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
                autoPlay="autoplay"
                loop="loop"
                muted
                // ref={video}
                id={"video-id"}
                className='video' >
                {/* TODO make it accept multiple media types */}
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {children}
            {/*</div>*/}
            {/* <span id="video-bottom"></span> */}
        </div>
    )
}

export default BackGroundVideo
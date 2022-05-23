import React from 'react';
import Breadcrumb from "./breadcrumb"


const CommonLayout = ({ children, btntext, title, subtitle, bannerImg, promtext, freeform, language }) => {

    return (
        <>
            <Breadcrumb
                subtitle={subtitle}
                title={title}
                bannerImg={bannerImg}
                btntext={btntext}
                promtext={promtext}
                freeform={freeform}
                language={language}
            />

            <>{children}</>

        </>
    )
}


export default CommonLayout;
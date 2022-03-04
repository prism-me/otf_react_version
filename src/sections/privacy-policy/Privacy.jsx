import React from "react";

const Privacy = (props) => (
    <div className="privacy">
        <div class="container">
            <div>
                <h2 className={"title"}>
                    {props?.privacyData?.title}
                </h2>
                <h3 className={"title2"}>
                    {props?.privacyData?.subtitle}
                </h3>
                <p className="privacyDiv"
                    dangerouslySetInnerHTML={{
                        __html: props?.privacyData?.description
                    }}
                >
                </p>
            </div>
        </div>
    </div>
);

export default Privacy;

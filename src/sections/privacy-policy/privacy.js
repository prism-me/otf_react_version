import React from "react";

const Privacy = ({ title, detail }) => (
    <section className="gym format">
        <div class="container">
            <div>
                <h2 className={"oftHeading"}>
                    {title}
                </h2>
                <p className="oftPrivacysubHeading"
                    dangerouslySetInnerHTML={{
                        __html: detail
                    }}
                >
                </p>
            </div>
        </div>
    </section>
);

export default Privacy;

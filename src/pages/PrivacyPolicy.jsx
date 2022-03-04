import React, { useEffect, useState } from "react";
import Privacy from "../sections/privacy-policy";
import { API } from "../http/API";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants";


const PrivacyPolicy = (props) => {
    const [content, setContent] = useState("");

    const getPagesData = () => {
        API.get(`/pages`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {
                    let currentPage = response.data.data.find(
                        (x) => x.slug === "privacy-policy"
                    );
                    API.get(`/all_sections/${currentPage._id}`)
                        .then((response) => {
                            setContent(response.data?.data[response.data.data?.length - 1]?.content);
                        })
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getPagesData();
    }, []);

    const { global } = props;

    return (
        <div className="home-page">
            <Helmet>
                <title>
                    {
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.meta_details?.title
                            : content?.meta_details?.title
                    }
                </title>
                <meta
                    name="description"
                    content={global?.activeLanguage === "ar" ?
                        content?.arabic?.meta_details
                            ?.description || constants?.site_content?.seo_description
                        : content?.meta_details
                            ?.description || constants?.site_content?.seo_description
                    }
                />
            </Helmet>
            <Privacy
                privacyData={
                    global?.activeLanguage === "ar"
                        ? content?.arabic?.privacySection
                        : content?.privacySection
                }
                language={global?.activeLanguage}
            />
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        showSpinner: state?.globalReducer?.showSpinner,
        global: state.globalReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivacyPolicy);
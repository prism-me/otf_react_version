import React from 'react';
import { InputGroup, Form } from 'react-bootstrap'
import { constants } from '../utils/constants';

const NewsLetter = ({ language }) => {

    return (
        <div className="sidebar-container">
            <h5 className={`${language === "en" ? 'blog-title' : 'blog-title-arabic'}`}>
                {
                    constants?.site_content?.articles_sec?.newsletter?.title[language]
                }
            </h5>


            <Form >
                <Form.Group>
                    <InputGroup
                        style={{
                            boxShadow: "0px 4px 15px rgb(0 0 0 / 14%)"
                        }}
                    >
                        {
                            language === "en" ?
                                <>
                                    <Form.Control
                                        type="text"
                                        placeholder={
                                            constants?.site_content?.articles_sec?.newsletter?.email[language]
                                        }
                                        style={{
                                            background: '#FFFFFF',
                                            border: "1px solid grey",
                                            borderRight: "0",
                                            borderRadius: "0",
                                            marginRight: "0",
                                            boxShadow: "none"
                                        }}
                                    />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text
                                            style={{
                                                background: '#FFFFFF', border: "1px solid grey",
                                                borderRadius: "0",
                                                borderLeft: "0"
                                            }}
                                        >
                                            <i aria-hidden="true" className="fa fa-paper-plane"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                </>
                                :
                                <>
                                    <Form.Control
                                        type="text"
                                        placeholder={
                                            constants?.site_content?.articles_sec?.newsletter?.email[language]
                                        }
                                        style={{
                                            background: '#FFFFFF',
                                            border: "1px solid grey",
                                            borderLeft: "0",
                                            borderRadius: "0",
                                            marginLeft: "0",
                                            boxShadow: "none"
                                        }}
                                    />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text
                                            style={{
                                                background: '#FFFFFF', border: "1px solid grey",
                                                borderRadius: "0",
                                                borderRight: "0"
                                            }}
                                        >
                                            <i aria-hidden="true" className="fa fa-paper-plane"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                </>
                        }

                    </InputGroup>
                </Form.Group>
            </Form>
        </div >
    );
};

export default NewsLetter;

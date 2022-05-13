import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';

// import Custom Components
import CardWrapper from "../../components/list-wrapper";

//images



const Articlesgrid = ({ language, articlesData, isArabic }) => {

    const [loadItems, setLoadItems] = useState(10);


    return (
        <section className="agency blog blog-sec blog-no-sidebar blog-split pt-0">
            <Container>
                <Row className="pl-0 pr-0">
                    <Col lg="12">
                        <Row className="split m-0">
                            {articlesData.length > 0 ?
                                articlesData.slice(0, loadItems).map((item, index) =>
                                    <CardWrapper
                                        key={`grid-no-sidebar-${index}`}
                                        className="col-12 blog-sec blog-list "
                                        image={item.featured_img}
                                        blogDate={item.created_at}
                                        place={
                                            isArabic
                                                ? item?.arabic?.category
                                                : item?.category
                                        }
                                        title={
                                            isArabic
                                                ? item?.arabic?.title
                                                : item?.title
                                        }
                                        description={isArabic
                                            ? item?.arabic?.short_description
                                            : item?.short_description}
                                        readUrl={`article/${item.slug}`}
                                        language={language}
                                    />
                                ) :
                                '!! No Articles Found'}
                        </Row>
                    </Col>
                </Row>
                {
                    articlesData.length >= 10 && loadItems != articlesData.length &&
                    <center>
                        <button className='otfBtn1 mt-4' onClick={() => setLoadItems(articlesData.length)}>
                            Load More
                        </button>
                    </center>
                }
            </Container>
        </section>
    )
}


export default Articlesgrid;
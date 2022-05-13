import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Masonry from 'react-masonry-css';
import CardWrapper from "../../components/grid-wrapper"
import Categories from "../../components/categories"
import PopularPosts from "../../components/popularpost"
import NewsLetter from "../../components/newsletter"
// import Instagram from "../../components/instagram"

//images 
// import pressimg from "../../assets/images/OTF/press/pressimg.png"


const Pressgrid = ({ pressData, isArabic, language }) => (
    <section className="agency blog blog-sec blog-sidebar rightAnimation">
        <div className="animated-bg"><i
            style={{
                background: "#f5822091",
                boxShadow: "0 15px 30px 0 #f5822091"
            }}
        ></i>
            <i
                style={{
                    background: "#f5822091",
                    boxShadow: "0 15px 30px 0 #f5822091"
                }}
            ></i>
            <i style={{
                background: "#f5822091",
                boxShadow: "0 15px 30px 0 #f5822091"
            }}></i>
        </div>
        <Container>
            <Row>
                <Col lg="9" className="order-lg-2">
                    <div>
                        <Masonry
                            breakpointCols={2}
                            className="my-masonry-grid masonry-with-dec row"
                            columnClassName="col-md-6 col-12"
                        >
                            {pressData.length > 0 ?
                                pressData.map((item, index) =>
                                    <CardWrapper
                                        key={`grid-no-sidebar-${index}`}
                                        className=""
                                        image={item.featured_img}
                                        blogDate={item.createdAt}
                                        place={
                                            isArabic
                                                ? item?.arabic?.title
                                                : item?.title
                                        }
                                        title={
                                            isArabic
                                                ? item?.arabic?.subtitle
                                                : item?.subtitle
                                        }
                                        description={item.description}
                                        readUrl={item.url}
                                    />
                                ) :
                                '!! No Data Found'}
                        </Masonry>
                    </div>
                </Col>
                <Col lg="3">
                    <div className="blog-side">
                        <Categories />
                        <PopularPosts />
                        <NewsLetter />
                        {/* <Instagram /> */}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Pressgrid;
import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import DetailSecion from '../../components/detail-wrapper'
import Categories from "../../components/categories"
import PopularPosts from "../../components/popularpost"
import NewsLetter from "../../components/newsletter"
// import Instagram from "../../components/instagram"

const ArticlesInner = () => (
    <section className="agency gym blog-sec blog-sidebar single_blog_item">
        <Container>
            <Row>
                <DetailSecion
                    className="col-lg-9 order-lg-2"
                    showcaseType="Image"
                />
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

export default ArticlesInner;
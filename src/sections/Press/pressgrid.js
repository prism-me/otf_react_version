import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Masonry from 'react-masonry-css';
import CardWrapper from "../../components/grid-wrapper"
import Categories from "../../components/categories"
import PopularPosts from "../../components/popularpost"
import NewsLetter from "../../components/newsletter"
// import Instagram from "../../components/instagram"

//images 
import pressimg from "../../assets/images/OTF/press/pressimg.png"



const MesonryData = [
    {
        image: pressimg,
        place: "SHAPE",
        title: "How Orangetheory Fitness Helped Propel Me Out of a Workout Slump",
        // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        readUrl: "https://www.shape.com/fitness/orangetheory-fitness-pushed-me-out-of-workout-slump",
        createdAt: "01-01-2020",
        createdBy: "MARK JKCNO",
    },
    {
        image: pressimg,
        place: "SHAPE",
        title: "6 Things to Know Before Your First Orangetheory Fitness Class",
        // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        readUrl: "https://www.shape.com/fitness/orangetheory-fitness-for-beginners-what-to-know",
        createdAt: "01-01-2020",
        createdBy: "MARK JKCNO",
    },
    {
        image: pressimg,
        place: "CNBC",
        title: "Another buzzy fitness brand will soon integrate with Apple Watch",
        // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        readUrl: "https://www.cnbc.com/2019/12/12/orangetheory-fitness-apple-watch-heart-rate-tracking-coming-early-2020.html",
        createdAt: "01-01-2020",
        createdBy: "MARK JKCNO",
    },
    {
        image: pressimg,
        place: "The Doctors",
        title: "Can a Workout Change Your Body from the inside Out?",
        // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        readUrl: "https://www.thedoctorstv.com/articles/4748-can-a-workout-change-your-body-from-the-inside-out",
        createdAt: "01-01-2020",
        createdBy: "MARK JKCNO",
    }
]

const Pressgrid = () => (
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
                            {MesonryData.length > 0 ?
                                MesonryData.map((item, index) =>
                                    <CardWrapper
                                        key={`grid-no-sidebar-${index}`}
                                        className=""
                                        image={item.image}
                                        blogDate={item.createdAt}
                                        place={item.place}
                                        title={item.title}
                                        description={item.description}
                                        readUrl={item.readUrl}
                                    />
                                ) :
                                '!! No Blogs Found'}
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
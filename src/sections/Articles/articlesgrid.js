import React from 'react'
import { Container, Row, Col } from 'reactstrap';

// import Custom Components
import CardWrapper from "../../components/list-wrapper";

//images
import art1 from "../../assets/images/OTF/articles/art1.png";
import art2 from "../../assets/images/OTF/articles/art2.png";
import art3 from "../../assets/images/OTF/articles/art3.png";
import art4 from "../../assets/images/OTF/articles/art4.png";


const Articlesgrid = ({ language }) => {

    const BlogsList = [
        {
            id: 1,
            image: art1,
            place: "Example, Place.",
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            readUrl: `articles-detail`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "MARK JKCNO",
        },
        {
            id: 2,
            image: art2,
            place: "Example, Place.",
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            readUrl: `articles-detail`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "MARK JKCNO",
        },
        {
            id: 3,
            image: art3,
            place: "Example, Place.",
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            readUrl: `articles-detail`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "MARK JKCNO",
        },
        {
            id: 4,
            image: art4,
            place: "Example, Place.",
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            readUrl: `articles-detail`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "MARK JKCNO",
        }
    ]

    return (
        <section className="agency blog blog-sec blog-no-sidebar blog-split pt-0">
            <Container>
                <Row className="pl-0 pr-0">
                    <Col lg="12">
                        <Row className="split m-0">
                            {BlogsList.length > 0 ?
                                BlogsList.map((item, index) =>
                                    <CardWrapper
                                        key={`grid-no-sidebar-${index}`}
                                        className="col-12 blog-sec blog-list "
                                        image={item.image}
                                        blogDate={item.createdAt}
                                        place={item.place}
                                        title={item.title}
                                        description={item.description}
                                        readUrl={item.readUrl}
                                        language={language}
                                    />
                                ) :
                                '!! No Blogs Found'}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Articlesgrid;
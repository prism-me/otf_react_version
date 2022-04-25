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
            place: "Fitness",
            title: "5 Exercises to Improve Your Posture and Reduce Pain",
            description: "We were born to move. However, in this day and age, we’re more sedentary than ever before. Aaron Santiso, physical therapist and member of the medical advisory board at Orangetheory, helps us put an end to that.",
            readUrl: `articles-detail`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 2,
            image: art2,
            place: "Technology",
            title: "We Have a Heart: The “Why” Behind Our Heart Rate Monitors",
            description: "How else can you prove you’re improving? Think of your heart rate monitor as your built-in coach, telling you when you need to push, or when you should scale back and recover.",
            readUrl: `articles-detail`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 3,
            image: art3,
            place: "Motivation",
            title: "Change Your Mind, Change Your Body: Hack Your Brain to Nail Your Next Personal Record",
            description: "Trouble staying motivated? It happens. Here’s 7 tips from the experts to stick to your exercise routine during those moments you feel like throwing in the sweat towel.",
            readUrl: `articles-detail`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 4,
            image: art4,
            place: "Motivation",
            title: "Sweat Together, Live More Together",
            description: "For many of us, we go through life strapped to our couches, our phones, and our computers. We’re more immobile than ever – losing touch with real life and the person you want to spend it with. 3 children, 4 jobs, and 20 pounds later, you start to regret that trip you never took, the beautiful sunrise you never saw, the workout you never tried.",
            readUrl: `articles-detail`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Meredith Parks",
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
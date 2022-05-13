import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';

// import Custom Components
import CardWrapper from "../../components/list-wrapper";

//images
import art1 from "../../assets/images/OTF/articles/downto.jpg";
import art2 from "../../assets/images/OTF/articles/overweight.jpg";
import art3 from "../../assets/images/OTF/articles/heartrate.jpg";
import art4 from "../../assets/images/OTF/articles/5exercise.jpg";
import art5 from "../../assets/images/OTF/articles/wehaveheart.jpg";
import art6 from "../../assets/images/OTF/articles/changeyourmind.jpg";
import art7 from "../../assets/images/OTF/articles/sweattogether.jpg";
import art8 from "../../assets/images/OTF/articles/secret.jpg";
import art9 from "../../assets/images/OTF/articles/stretch.jpg";
import art10 from "../../assets/images/OTF/articles/pain.jpg";
import art11 from "../../assets/images/OTF/articles/highway.jpg";
import art12 from "../../assets/images/OTF/articles/fuel.jpg";
import art13 from "../../assets/images/OTF/articles/fit.jpg";
import art14 from "../../assets/images/OTF/articles/buddy.jpg";
import art15 from "../../assets/images/OTF/articles/living.jpg";
import art16 from "../../assets/images/OTF/articles/movement.jpg";



const Articlesgrid = ({ language, articlesData, isArabic }) => {

    const BlogsList = [
        {
            id: 1,
            image: art1,
            place: "Fitness",
            title: "Hunkered Down to Keep Coronavirus at Bay? Stay Healthy With 7 Tips to Channel Your Inner Orangetheory Spirit",
            description: "In keeping with guidelines to slow the spread of the coronavirus, many Orangetheory Fitness studios and other gyms around the country have closed. So",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 2,
            image: art2,
            place: "Health",
            title: "Over 50? How Exercise Can Add Quality Years to Your Life",
            description: "Let’s be honest, starting a new fitness routine at any age can be intimidating. But because Orangetheory was created with all ages and fitness levels in mind, rest",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 3,
            image: art3,
            place: "Science",
            title: "What Your Heart Rate Is Telling You",
            description: "Walk into an Orangetheory class, and you’ll see multiple flashing colors on a large screen. This is our heart rate monitoring technology at work, capturing the unique heart rates of nearly one million members worldwide. But what do these pretty colors",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Meredith Parks",
        },
        {
            id: 4,
            image: art4,
            place: "Fitness",
            title: "5 Exercises to Improve Your Posture and Reduce Pain",
            description: "We were born to move. However, in this day and age, we’re more sedentary than ever before. Aaron Santiso, physical therapist and member of the medical advisory board at Orangetheory, helps us put an end to that.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 5,
            image: art5,
            place: "Technology",
            title: "We Have a Heart: The “Why” Behind Our Heart Rate Monitors",
            description: "How else can you prove you’re improving? Think of your heart rate monitor as your built-in coach, telling you when you need to push, or when you should scale back and recover.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 6,
            image: art6,
            place: "Motivation",
            title: "Change Your Mind, Change Your Body: Hack Your Brain to Nail Your Next Personal Record",
            description: "Trouble staying motivated? It happens. Here’s 7 tips from the experts to stick to your exercise routine during those moments you feel like throwing in the sweat towel.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 7,
            image: art7,
            place: "Motivation",
            title: "Sweat Together, Live More Together",
            description: "For many of us, we go through life strapped to our couches, our phones, and our computers. We’re more immobile than ever – losing touch with real life and the person you want to spend it with. 3 children, 4 jobs, and 20 pounds later, you start to regret that trip you never took, the beautiful sunrise you never saw, the workout you never tried.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Meredith Parks",
        },
        {
            id: 8,
            image: art8,
            place: "Science",
            title: "The Secret to Getting Healthy? Hit the Sheets.",
            description: "How, with a healthy diet and committed workout routine, does the risk of chronic disease appear? What’s wrong with this equation? The not-so-obvious problem that’s facing people today is simply a lack of shuteye.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Meredith Parks",
        },
        {
            id: 9,
            image: art9,
            place: "Fitness",
            title: "7 Stretches to Do at Your Desk",
            description: "Have you noticed that the more you stretch, the better you feel? Taking a few minutes to stretch every day will help you alleviate stress and post-workout soreness. Here are some of our favorites.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 10,
            image: art10,
            place: "Health",
            title: "Haven’t Got Time for the Pain: When to Push Past It and When to Stop",
            description: "There’s good pain, and there’s bad pain. We’ll help you know the difference.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 11,
            image: art11,
            place: "Events",
            title: "Highway to Hell Week: Inside Orangetheory’s Iconic Workout",
            description: "Orangetheory members flood studios during Hell Week, a series of hair-raising, spine-chilling, blood-curdling workouts that get their hearts pumping like never before. Why is this fitness challenge so popular? Take a look behind the scenes.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Alex Kramers",
        },
        {
            id: 12,
            image: art12,
            place: "Health",
            title: "Fuel Your Workout, Fuel Your Life",
            description: "To live a healthy, long life, the cardiovascular training you get from Orangetheory is only part of the equation. Get more out of your workout with these simple, yet powerful nutrition tips.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Orangetheory Fitness",
        },
        {
            id: 13,
            image: art13,
            place: "Health",
            title: "Do You “Fit” The Heart Rate Equation?",
            description: "If you feel like you’re on the verge of physical exhaustion, but not getting any Splat Points, or if you’re barely breathing heavy yet accumulating 30+ Splat Points each class, it may be time to adjust your heart rate zones..",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 14,
            image: art14,
            place: "Community",
            title: "An Unusual Workout Buddy",
            description: "OTF Member Katherine doesn’t let diabetes stop her from getting her Splat Points in. She’s in great paws, knowing her furry friend, Blaze, is ready to save her life if her glucose levels drop during a workout.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 15,
            image: art15,
            place: "Community",
            title: "The Meaning of Living All Out",
            description: "The benefits of exercise go far beyond weight loss, and our members prove it.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Leslie Barker",
        },
        {
            id: 16,
            image: art16,
            place: "Fitness",
            title: "Are You a Victim of the ‘Chasing Skinny’ Movement?",
            description: "Orangetheory Fitness is not about counting calories and losing weight. It’s a workout program structured to fuel your body with the exercise multivitamin to help you achieve a longer, healthier life.",
            readUrl: `article`,
            likes: 10,
            comments: 20,
            createdAt: "01-01-2020",
            createdBy: "By Meredith Parks",
        }
    ];

    const [loadItems, setLoadItems] = useState(8);


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
                                '!! No Blogs Found'}
                        </Row>
                    </Col>
                </Row>
                {
                    BlogsList.length >= 8 && loadItems != BlogsList.length &&
                    <center>
                        <button className='otfBtn1 mt-4' onClick={() => setLoadItems(BlogsList.length)}>
                            Load More
                        </button>
                    </center>
                }
            </Container>
        </section>
    )
}


export default Articlesgrid;
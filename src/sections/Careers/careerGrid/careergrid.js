import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Masonry from 'react-masonry-css'

//images 


const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    991: 2,
    500: 1
};

const Careergrid = () => {

    const careersData = [
        {
            title: "Lorem Ipsum",
            description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Lorem Ipsum",
            description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Lorem Ipsum",
            description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Lorem Ipsum",
            description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Lorem Ipsum",
            description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Lorem Ipsum",
            description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]

    return (
        <section className='gym rightAnimation career-grid'>
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
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                        careersData?.map((x, i) => (
                            <div key={i}>

                                <div className='careerdiv'>
                                    <h2 className='careerheading'>
                                        {x?.title}
                                    </h2>
                                    <p className='careerdetail'>
                                        {x?.description}
                                    </p>
                                    <center>
                                        <a href="mailto:info@otf.com" className='careerbtn'>
                                            Apply Now
                                        </a>
                                    </center>
                                </div>
                            </div>

                        ))
                    }
                </Masonry>
            </Container>

        </section >
    );
}
export default Careergrid;
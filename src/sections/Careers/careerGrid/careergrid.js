import React from 'react';
import { Container } from 'react-bootstrap';
import Masonry from 'react-masonry-css'

//images 


const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    991: 2,
    500: 1
};

const Careergrid = ({ careersData, isArabic }) => {

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
                                        {
                                            isArabic
                                                ? x?.arabic?.designation
                                                : x?.designation
                                        }
                                    </h2>
                                    <p className='careerdetail'
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                isArabic
                                                    ? x?.arabic?.description
                                                    : x?.description
                                        }}
                                    >
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
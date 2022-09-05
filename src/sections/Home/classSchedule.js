import React from 'react'
import { Container, Table, Row, Col } from 'reactstrap'


const ClassSchedule = ({ timesSec, language, mercatoSec }) => {

    return (
        <>
            <section className="classSchedule gym pb-0" id="bmi">
                <Container>
                    <h3 className="oftHeading mb-3">
                        {
                            mercatoSec?.title
                        }
                    </h3>
                    <p className="oftsubHeading text-center mb-3">
                        {
                            mercatoSec?.subtitle
                        } <a href="tel:+9714 340-10-40">(+9714 340-10-40)</a>
                    </p>

                    <Table responsive className={"text-center TableMB"}>
                        <p className={"SubTitle"}
                            dangerouslySetInnerHTML={{
                                __html: mercatoSec?.content
                            }}
                        >
                        </p>
                        {/* <thead>
                            <tr>
                                <th>Age</th>
                                <th>American Gulf School (GRADE)</th>
                                <th>North America (GRADE)</th>
                                <th>England (YEAR)</th>
                                <th>French</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3 years old as of August
                                    31 (potty trained)
                                </td>
                                <td>PreK</td>
                                <td>-</td>
                                <td>FS1 (Nursery)</td>
                                <td>Ecole Maternelle</td>
                            </tr>
                            <tr>
                                <td>4 years old as of August 31 (potty trained)</td>
                                <td>KG 1</td>
                                <td>PreK</td>
                                <td>FS2 (Reception)</td>
                                <td>Ecole Maternellee</td>
                            </tr>
                            <tr>
                                <td>5 years old as of August 31</td>
                                <td>KG 2</td>
                                <td>KG</td>
                                <td>1</td>
                                <td>Ecole Maternelle</td>
                            </tr>
                            <tr>
                                <td>6 years old as of August 31</td>
                                <td>1</td>
                                <td>1</td>
                                <td>2</td>
                                <td>CP</td>
                            </tr>
                            <tr>
                                <td>7 years old</td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                                <td>CE1</td>
                            </tr>
                            <tr>
                                <td>8 years old</td>
                                <td>3</td>
                                <td>3</td>
                                <td>4</td>
                                <td>CE2</td>
                            </tr>
                            <tr>
                                <td>9 years old</td>
                                <td>4</td>
                                <td>3</td>
                                <td>4</td>
                                <td>CM1</td>
                            </tr>
                            <tr>
                                <td>10 years old</td>
                                <td>5</td>
                                <td>3</td>
                                <td>4</td>
                                <td>CM2</td>
                            </tr>
                            <tr>
                                <td>11 years old</td>
                                <td>6</td>
                                <td>3</td>
                                <td>4</td>
                                <td>6 eme</td>
                            </tr>
                            <tr>
                                <td>12 years old</td>
                                <td>7</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5 eme</td>
                            </tr>
                            <tr>
                                <td>13 years old</td>
                                <td>8</td>
                                <td>3</td>
                                <td>4</td>
                                <td>4 eme</td>
                            </tr>
                            <tr>
                                <td>14 years old</td>
                                <td>9</td>
                                <td>3</td>
                                <td>4</td>
                                <td>3 eme</td>
                            </tr>
                            <tr>
                                <td>15 years old</td>
                                <td>10</td>
                                <td>3</td>
                                <td>4</td>
                                <td>Seconde</td>
                            </tr>
                            <tr>
                                <td>16 years old</td>
                                <td>11</td>
                                <td>3</td>
                                <td>4</td>
                                <td>Premiere</td>
                            </tr>
                            <tr>
                                <td>17 years old</td>
                                <td>12</td>
                                <td>3</td>
                                <td>4</td>
                                <td>Terminale</td>
                            </tr>
                        </tbody> */}
                    </Table>
                </Container>
            </section>

            <section className="classSchedule gym pt-4 pb-0" id="bmi">
                <Container>
                    <h3 className="oftHeading mb-3">
                        {
                            timesSec?.title
                        }
                    </h3>
                    <p className="oftsubHeading text-center mb-3">
                        {
                            timesSec?.subtitle
                        } <a href="tel:+9714 324-44-24">(+9714 324-44-24)</a>
                    </p>

                    <Table responsive className={"text-center TableMB"}>
                        <p className={"SubTitle"}
                            dangerouslySetInnerHTML={{
                                __html: timesSec?.content
                            }}
                        >
                        </p>
                        {/* <thead>
                            <tr>
                                <th>Age</th>
                                <th>American Gulf School (GRADE)</th>
                                <th>North America (GRADE)</th>
                                <th>England (YEAR)</th>
                                <th>French</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3 years old as of August
                                    31 (potty trained)
                                </td>
                                <td>PreK</td>
                                <td>-</td>
                                <td>FS1 (Nursery)</td>
                                <td>Ecole Maternelle</td>
                            </tr>
                            <tr>
                                <td>4 years old as of August 31 (potty trained)</td>
                                <td>KG 1</td>
                                <td>PreK</td>
                                <td>FS2 (Reception)</td>
                                <td>Ecole Maternellee</td>
                            </tr>
                            <tr>
                                <td>5 years old as of August 31</td>
                                <td>KG 2</td>
                                <td>KG</td>
                                <td>1</td>
                                <td>Ecole Maternelle</td>
                            </tr>
                            <tr>
                                <td>6 years old as of August 31</td>
                                <td>1</td>
                                <td>1</td>
                                <td>2</td>
                                <td>CP</td>
                            </tr>
                            <tr>
                                <td>7 years old</td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                                <td>CE1</td>
                            </tr>
                            <tr>
                                <td>8 years old</td>
                                <td>3</td>
                                <td>3</td>
                                <td>4</td>
                                <td>CE2</td>
                            </tr>
                            <tr>
                                <td>9 years old</td>
                                <td>4</td>
                                <td>3</td>
                                <td>4</td>
                                <td>CM1</td>
                            </tr>
                            <tr>
                                <td>10 years old</td>
                                <td>5</td>
                                <td>3</td>
                                <td>4</td>
                                <td>CM2</td>
                            </tr>
                            <tr>
                                <td>11 years old</td>
                                <td>6</td>
                                <td>3</td>
                                <td>4</td>
                                <td>6 eme</td>
                            </tr>
                            <tr>
                                <td>12 years old</td>
                                <td>7</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5 eme</td>
                            </tr>
                            <tr>
                                <td>13 years old</td>
                                <td>8</td>
                                <td>3</td>
                                <td>4</td>
                                <td>4 eme</td>
                            </tr>
                            <tr>
                                <td>14 years old</td>
                                <td>9</td>
                                <td>3</td>
                                <td>4</td>
                                <td>3 eme</td>
                            </tr>
                            <tr>
                                <td>15 years old</td>
                                <td>10</td>
                                <td>3</td>
                                <td>4</td>
                                <td>Seconde</td>
                            </tr>
                            <tr>
                                <td>16 years old</td>
                                <td>11</td>
                                <td>3</td>
                                <td>4</td>
                                <td>Premiere</td>
                            </tr>
                            <tr>
                                <td>17 years old</td>
                                <td>12</td>
                                <td>3</td>
                                <td>4</td>
                                <td>Terminale</td>
                            </tr>
                        </tbody> */}
                    </Table>
                    <center>
                        <a href={"https://wa.me/+971504276004"} target={"_blank"} className='btn otfBtn1 mt-3'
                            style={{ border: "1px solid #F58220", color: "#F58220" }}
                        >
                            <i class="fab fa-whatsapp mr-2"
                                style={{ color: "#25d366" }}
                            ></i>
                            Reach out to us
                        </a>
                    </center>
                </Container>
            </section>
        </>

    )
}

export default ClassSchedule;
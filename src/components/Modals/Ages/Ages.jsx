import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container, Table, Card } from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Ages = (props) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={
                props.lang === "ar"
                    ? "Ages agsModalDirArabic"
                    : "Ages agsModalDir"
            }
            style={{ paddingLeft: "0px" }}
        >
            <span className={
                props.lang === "ar"
                    ? "modalIconArabic modalIcon"
                    : "modalIcon"} onClick={props.onHide}>
                <ArrowBackIcon />
            </span>
            <Modal.Body>
                <Table responsive className={"text-center TableMB"}>
                    <p className={"SubTitle"}
                        dangerouslySetInnerHTML={{
                            __html:
                                props.reqTableData?.description
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
            </Modal.Body>
        </Modal>
    );
};

export default Ages;
